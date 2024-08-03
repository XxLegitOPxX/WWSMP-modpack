// priority: 0

const recipeBlacklist = [
  "cfm:oak_mail_box",
  "cfm:post_box",
  "chunkloaders:advanced_chunk_loader",
  "chunkloaders:ultimate_chunk_loader",
];
const conflictingRecipes = ["additionaladditions:wrench"];

ItemEvents.tooltip((event) => {
  event.add(
    recipeBlacklist,
    Text.red("This item is prohibited on the server.")
  );
  event.add(
    conflictingRecipes,
    Text.yellow("This item has a conflicting recipe.")
  );
});
