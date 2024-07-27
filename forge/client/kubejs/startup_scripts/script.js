// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')

	// Yamato
	event.create('yamato', 'sword')
		.displayName("Yamato")
		//.texture("kubejs:item/yamato")
		.tooltip(Text.aqua("Now I'm motivated!"))
		.tier('diamond')
		//.attackDamageBaseline(4)
		.speedBaseline(0)
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})