import os
import pygsheets
import subprocess

sheet_names = ["client", "server", "shared"]
sides = ["client", "server"]
sheet_indexes = {
    "client": 1,
    "server": 2,
    "shared": 3,
}


def get_spreadsheet(sheet_name):
    gc = pygsheets.authorize(
        service_file="../../.scripts/wwsmp-pygsheets-428223-95a542d6b1db.json"
    )

    if sheet_name in sheet_names:
        spreadsheet = gc.open_by_key("1O87Q_irPaNHXqFW9Nd5SVPhWzO0-KgbCFQ83Azbbhm4")
    else:
        raise ValueError("Invalid sheet name")

    return spreadsheet


def is_mod_installed(slug):
    for name in os.listdir("mods"):
        pw_slug = name.split(".")[0]
        if pw_slug == slug:
            return True
    return False


def main():
    sheet_name = (
        input("""Enter the sheet's name (options: "client", "server", "shared"): """)
        .strip()
        .lower()
    )

    if sheet_name in sides:
        side = sheet_name
        os.chdir(f"../forge/{side}")
    elif sheet_name == "shared":
        side = (
            input("Which side do you want to install the shared mods onto?: ")
            .strip()
            .lower()
        )
        if side in sides:
            os.chdir(f"../forge/{side}")
        else:
            print("Invalid side entered.")
            return
    else:
        print("Invalid sheet name entered.")
        return

    spreadsheet = get_spreadsheet(sheet_name)
    sheet_index = sheet_indexes[sheet_name]
    worksheet = spreadsheet[sheet_index]
    col_values = worksheet.get_col(4, include_tailing_empty=False)

    print("")
    print(f'Installing "{sheet_name}" mods onto the "{side}" side...')

    for link in col_values:
        if link and link != "Link":
            domain = link.split("/")[2]
            site = domain.split(".")[1] if "www" in domain else domain.split(".")[0]
            slug = link.split("/")[-1]

            if is_mod_installed(slug):
                print(f"Skipped over {slug} because it's already installed")
                continue
            else:
                print(f"Installing {slug}...")

            command = f"packwiz {site} install {link} -y"
            subprocess.run(command)


if __name__ == "__main__":
    main()
