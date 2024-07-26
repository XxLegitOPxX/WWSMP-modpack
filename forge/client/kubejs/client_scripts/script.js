// priority: 0

var recipeBlacklist = [
  "cfm:oak_mail_box",
  "cfm:post_box",
  "minecraft:ender_chest",
  "chunkloaders:advanced_chunk_loader",
  "chunkloaders:ultimate_chunk_loader",
];
var conflictingRecipes = ["additionaladditions:wrench"];

onEvent("item.tooltip", (tooltip) => {
  // Add tooltip to all of these items
  tooltip.add(
    recipeBlacklist,
    Text.red("This item is prohibited on the server.")
  );
  tooltip.add(
    conflictingRecipes,
    Text.yellow("This item has a conflicting recipe.")
  );
});
