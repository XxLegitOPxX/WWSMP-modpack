// priority: 0

StartupEvents.registry("item", (event) => {
  // Yamato
  event
    .create("yamato", "sword")
    .displayName("Yamato")
    //.texture("kubejs:item/yamato")
    .tooltip(Text.aqua("Now I'm motivated!"))
    .tier("diamond")
    //.attackDamageBaseline(4)
    .speedBaseline(0);
});
