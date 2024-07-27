// priority: 0

var recipeBlacklist = [
  "cfm:oak_mail_box",
  "cfm:post_box",
  "locksmith:lockpick",
  "wands:stone_wand",
  "wands:stone_wand2",
  "wands:iron_wand",
  "wands:diamond_wand",
  "wands:netherite_wand",
  "wands:palette",
  "wands:magic_bag_1",
  "wands:magic_bag_2",
  "wands:magic_bag_3",
  "chunkloaders:basic_chunk_loader",
  "chunkloaders:advanced_chunk_loader",
  "chunkloaders:ultimate_chunk_loader",
];
var conflictingRecipes = ["additionaladditions:wrench"];

onEvent("recipes", (event) => {
  // Change recipes here
  event.remove({ output: [recipeBlacklist, conflictingRecipes] });
  event.shaped("locksmith:lockpick", ["DII", "I  ", "I  "], {
    D: "minecraft:diamond",
    I: "minecraft:iron_ingot",
  });
  event.shaped("chunkloaders:basic_chunk_loader", ["SSS", "SSS", "SSS"], {
    S: "chunkloaders:single_chunk_loader",
  });
  event.shaped("chunkloaders:basic_chunk_loader", ["DCD", "CNC", "DCD"], {
    D: "minecraft:diamond_block",
    C: "minecraft:crying_obsidian",
    N: "minecraft:nether_star",
  });

  event.remove({ input: ["minecraft:leather"], output: ["vs_eureka:balloon"] });
  event.shaped("4x vs_eureka:balloon", ["LL ", "LL ", "   "], {
    L: "minecraft:leather",
  });
});
