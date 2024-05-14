# v0.1.0
- Initial version.

# v0.2.0 - 2023-12-16
- Added client, shared and server mods folders.
  - Each folder contains Full, Medium and Optional mod installations. You must
   use matching mod installations, so if the server is using Full, you must
   also use Full. Optional mods can be added no matter what installation the
   server is using.
  - NOTE: Medium and optional mod installations are still heavily unfinished.

# v0.2.1-alpha - 2023-12-17
- Added spark mod to shared.
- Removed mods folder.

# v0.3.0-alpha - 2023-12-17
- Added GlobalPacks to client.
- Moved Smooth Boot (Reloaded) from client to shared.
- Added BetterVillages-MoreVillagers compat datapack to shared.
- Moved PolyLib from shared to server.
- Added 2 CurseForge packs (with and without shaders).
- Added instructions (SETUP.txt) inside *client.zip.
- Emptied Medium installations to reduce file size.

# v0.4.0-beta - 2023-12-27
- Beta testing stage!
- Renamed the repository to "WWSMP-modpack".
- Modified README.md to reflect repo name change.
- Removed Full, Medium and Optional mod installations for sake of simplicity.
  Instead, only the "full" installation will be in releases from now on.
  If you want optional mods you'll have to download them directly from the
  "main" branch.
- The "cf-shaders" modpack zip will no longer be provided in releases.
- Shortened the names of all modpack zips.

# v0.5.0-beta - 2023-12-28
- Fixed the modpack not allowing you to join the WWSMP server (I forgot to
  provide the `kubejs` folder).
- Added the "Building Wands" mod (currently only for admin use).

# v0.6.0-beta - 2024-01-01
- Added CGM compat to skills mod (Rereskillable Rereforked).
- Made keybinds conflict a lot less.

# v0.7.0-beta - 2024-01-06
**WARNING**: Installing a new modpack version will *overwrite* your Xaero's
Minimap/World Map data. It is recommended to manually back this data up
*before* installing a new modpack version, otherwise you should consider
manually installing the mods from the main branch.

Folders to back up:
- `.minecraft/XaeroWaypoints`
- `.minecraft/XaeroWorldMap`

Changelog:
- Removed FTB Chunks and FTB Quests.
- Added Xaero's Minimap, World Map and Open PAC mods.
- Moved Embeddium to optionals (it was causing the invis blocks bug on ships).
- Moved all client-side *gameplay enhancement mods* to optionals.
- Added `servers.dat` as part of releases (so you can quick-join the server
after installation).
- Removed Map Atlases (its useless and sometimes causes crashes when opening).
- Removed GameStages (we have kubejs instead).

# v1.0.0 - 2024-04-06
General changes:
- Set spawn radius to 500 as opposed to 1000.
- Changed player night skip percentage from 100% to 50%.
- Changed claims config options so that only a few are configurable by players.
- Made players' claims invisible to non-party-members.
- Added Create: Big Cannons mod.
- Updated Xaero's Minimap and Xaero's WorldMap mods.
- Updated Inventory Profiles Next and libIPN mods.
- Updated Embeddium (optional client mod).
- Made Embeddium no longer an optional client mod.
- Cleaned up the `config` folder a bit.

Temperature changes:
- Climate Clemency (immunity to temperature changes) is **10 minutes** now as opposed to 5,
- Equipping armour will change your temperature within **2 seconds**,
- Holding an item that changes your temperature (torches? idrk) will change your temperature within **4 seconds**,
- It takes **4 minutes** for your temperature to change (e.g. entering a savanna after being in plains, will make you reach extremity temperature),
- Once the fire/snowflake icon appears (reached extremity temperature), you have **1 minute** to lower your temperature before you start taking damage,
- Rebounding from an extreme temperature (e.g. jumping into water after the fire icon appeared) takes **2 seconds**,

Removed the following mods for balancing or being useless:
- Create: Steam Powered Revived
- Realistic Torches
- Rereskillable Rereforked (skills/levels)
- MrCrayfish's Gun Mod
- NineZero's Gun Expansion

# v1.1.0 - 2024-04-25
Mods removed from Shared:
- Create: Crystal Clear
- More Villagers + compat datapack
- Guard Villagers
- Spyglass Improvements
- Global GameRules
- Rough Tweaks Revamped
- Cosmetic Armor Reworked
- SkinChanger

Mods removed from Client:
- Global Packs

Shared Mods made optional:
- Just Enough Professions (JEP)
- Just Enough Resources (JER)
- spark

Client Mods made optional:
- Not Enough Animations
- Catalogue
- Configured

# v1.2.0 - 2024-05-05
- Added Xaero's Minimap Fairplay version
- Updated Eureka and Xaero's WorldMap

# v1.3.0 - 2024-05-14
- Added Zombie Awareness, Chunk Loaders and Armor Trims Backport
- Added an addon for Valkyrien Skies that adds a craftable "assembly gun" which improves ship assembly
- Updated Valkyrien Skies, Eureka, and "Open Parties and Claims"
- Removed Create: Chunkloading in favor of Chunk Loaders