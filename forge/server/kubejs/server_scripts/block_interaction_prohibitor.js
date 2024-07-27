// priority: 0

var blockBlacklist = [
  "cfm:oak_mail_box",
  "cfm:post_box",
  "minecraft:ender_chest",
];

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}

onEvent("block.right_click", (event) => {
  if (event.player.name.text === "Exinity") {
    return;
  }

  if (isInArray(event.getBlock(), blockBlacklist)) {
    Utils.server.runCommand(
      `/title ${event.player} actionbar {"text":"This block is prohibited on the server.","color":"red"}`
    );
    event.cancel();
  }
});
