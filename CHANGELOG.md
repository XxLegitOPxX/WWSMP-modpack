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