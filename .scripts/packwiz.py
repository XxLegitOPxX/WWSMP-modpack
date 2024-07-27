import argparse
import os
from colorama import Fore, Back, Style, init
import pygsheets
import subprocess

MODLOADER = "forge"
SHEETS = ["client", "server", "shared"]
SIDES = ["client", "server"]
SHEET_INDEXES = {
    "client": 1,
    "server": 2,
    "shared": 3,
}


def warn(message):
    print(
        f"{Style.BRIGHT}{Back.YELLOW}[WARN]{Style.RESET_ALL} {Fore.YELLOW}{message}{Style.RESET_ALL}"
    )


def success(message):
    print(
        f"{Style.BRIGHT}{Back.GREEN}[SUCCESS]{Style.RESET_ALL} {Fore.GREEN}{message}{Style.RESET_ALL}"
    )


def info(message):
    print(
        f"{Style.BRIGHT}{Back.WHITE}[INFO]{Style.RESET_ALL} {Fore.WHITE}{message}{Style.RESET_ALL}"
    )


def error(message):
    print(Fore.RED)
    raise Exception(f"{Style.BRIGHT}{message}{Style.RESET_ALL}")


def is_mod_installed(side, slug):
    for name in os.listdir(f"{MODLOADER}/{side}/mods"):
        pw_slug = name.split(".")[0]
        if pw_slug == slug:
            return True
    return False


def get_spreadsheet():
    gc = pygsheets.authorize(
        service_file=".scripts/wwsmp-pygsheets-428223-95a542d6b1db.json"
    )
    spreadsheet = gc.open_by_key("1O87Q_irPaNHXqFW9Nd5SVPhWzO0-KgbCFQ83Azbbhm4")
    return spreadsheet


def get_mod_data(link):
    domain = link.split("/")[2]
    site = domain.split(".")[1] if "www" in domain else domain.split(".")[0]
    slug = link.split("/")[-1]
    return {"site": site, "slug": slug}


def get_mod_links(sheet):
    spreadsheet = get_spreadsheet()
    sheet_index = SHEET_INDEXES[sheet]
    worksheet = spreadsheet[sheet_index]
    links = worksheet.get_col(4, include_tailing_empty=False)
    links.remove("Link")
    return links


def get_mod_slugs(sheet):
    slugs = []
    for link in get_mod_links(sheet):
        mod_data = get_mod_data(link)
        slugs.append(mod_data["slug"])
    return slugs


def is_mod_listed(slugs, slug):
    try:
        _ = slugs.index(slug)
        return True
    except ValueError:
        return False


def check(args):
    side = args.check[0]
    try:
        only = args.check[1]
    except IndexError:
        only = None

    if not side in SIDES:
        error("Invalid side")
    if only != None and only != "only":
        error(f'"only" argument must be exactly "only" (given: "{only}")')

    def check_sheet(sheet):
        dashes = "-" * 30
        print(f"{Fore.BLUE}{sheet}{Style.RESET_ALL}")
        print(f"{Fore.BLUE}{dashes}{Style.RESET_ALL}")

        installed = []
        not_installed = []
        for slug in get_mod_slugs(sheet):
            if is_mod_installed(side, slug):
                installed.append(slug)
            else:
                not_installed.append(slug)

        if len(not_installed) == 0:
            installed_count = len(installed)
            success(f"{installed_count}/{installed_count} mods are installed")
        else:
            installed_count = len(installed)
            not_installed_count = len(not_installed)
            total_count = installed_count + not_installed_count

            verb = "is" if not_installed_count == 1 else "are"

            warn(f"{installed_count}/{total_count} mods are installed")
            warn(f"{not_installed_count} {verb} missing:")
            for mod in not_installed:
                warn(f"    {mod}")

    def cross_check_sheet(sheet):
        if sheet == "client":
            sheet = "server"
        elif sheet == "server":
            sheet = "client"

        installed = []
        for slug in get_mod_slugs(sheet):
            if is_mod_installed(side, slug):
                installed.append(slug)

        if len(installed) > 0:
            installed_count = len(installed)
            verb = "is" if installed_count == 1 else "are"

            warn(f"Also {installed_count} {verb} from the wrong sheet ({sheet}):")
            for mod in installed:
                warn(f"    {mod}")

    check_sheet(side)
    cross_check_sheet(side)
    if only == None:
        print("")
        check_sheet("shared")


def clean(args):
    side = args.clean[0]
    try:
        sheet = args.clean[1]
    except IndexError:
        sheet = None

    if not side in SIDES:
        error("Invalid side")
    if sheet != None and sheet not in SHEETS:
        error("Invalid sheet")

    cleaned_count = 0
    directory = f"{MODLOADER}/{side}/mods"
    if sheet != None:
        slugs = get_mod_slugs(sheet)
    for file_name in os.listdir(directory):
        slug = file_name.split(".")[0]
        if sheet != None and not is_mod_listed(slugs, slug):
            continue

        file_path = os.path.join(directory, file_name)
        try:
            if os.path.isfile(file_path) or os.path.islink(file_path):
                os.remove(file_path)
                cleaned_count += 1
        except Exception as e:
            error("Failed to delete %s. Reason: %s" % (file_path, e))

    plural = "" if cleaned_count == 1 else "s"
    print_fn = success if cleaned_count > 0 else info
    if sheet == None:
        print_fn(f"{cleaned_count} mod{plural} cleaned from {side}!")
    else:
        print_fn(
            f'{cleaned_count} mod{plural} cleaned from {side}! ("{sheet}" sheet only)'
        )

    old_cwd = os.getcwd()
    os.chdir(f"{MODLOADER}/{side}")
    subprocess.run(f"packwiz refresh")
    os.chdir(old_cwd)


def install(args):
    side = args.install[0]
    try:
        only = args.install[1]
    except IndexError:
        only = None

    if not side in SIDES:
        error("Invalid side")
    if only != None and only != "only":
        error(f'"only" argument must be exactly "only" (given: "{only}")')

    def install_sheet(sheet):
        installed = []
        not_installed = []
        for link in get_mod_links(sheet):
            mod_data = get_mod_data(link)
            site = mod_data["site"]
            slug = mod_data["slug"]
            if is_mod_installed(side, slug):
                info(f"Skipped over {slug} because it's already installed")
                continue
            else:
                # info(f"Installing {slug}...")
                pass

            old_cwd = os.getcwd()
            os.chdir(f"{MODLOADER}/{side}")
            subprocess.run(f"packwiz {site} install {link} -y")
            os.chdir(old_cwd)
            if is_mod_installed(side, slug):
                # success(f"Installed {slug}!")
                installed.append(slug)
            else:
                warn(f"{slug} failed to install")
                not_installed.append(slug)

        if len(not_installed) == 0:
            installed_count = len(installed)
            success(f"Installed {installed_count}/{installed_count} mods!")
        else:
            installed_count = len(installed)
            not_installed_count = len(not_installed)
            total_count = installed_count + not_installed_count

            warn(f"Installed {installed_count}/{total_count} mods")
            warn(f"{not_installed_count} failed:")
            for mod in not_installed:
                warn(f"    {mod}")

    install_sheet(side)
    if only == None:
        print("")
        install_sheet("shared")


def main():
    parser = argparse.ArgumentParser(
        description="Tool for managing mods via packwiz using Google Spreadsheets"
    )
    parser.add_argument(
        "--check",
        type=str,
        nargs="+",
        metavar=("side", "only"),
        help='Checks if all the mods on a given side are installed (including shared, unless "only" is specified)',
    )
    parser.add_argument(
        "--clean",
        type=str,
        nargs="+",
        metavar=("side", "sheet"),
        help='Cleans ALL mods on a given side (unless "sheet" is specified)',
    )
    parser.add_argument(
        "--install",
        type=str,
        nargs="+",
        metavar=("side", "only"),
        help='Installs mods for the given side (including shared, unless "only" is specified)',
    )

    args = parser.parse_args()
    if args.check != None:
        check(args)
    elif args.clean != None:
        clean(args)
    elif args.install != None:
        install(args)


if __name__ == "__main__":
    # init(autoreset=True)
    main()
