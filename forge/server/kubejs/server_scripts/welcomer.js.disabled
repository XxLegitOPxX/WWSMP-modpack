// priority: 0

const WELCOME_MESSAGE_1 = `["",{"text":"Welcome","color":"green"},{"text":" to "},{"text":"WorldWarSMP","bold":true,"color":"gold"},{"text":"!"}]`
const WELCOME_MESSAGE_2 = `["",{"text":"Please read the "},{"text":"Beginners' Guide","color":"yellow"},{"text":" book that was placed in your inventory to get started!"}]`
const WELCOME_BACK_MESSAGE = `["",{"text":"Welcome back","color":"aqua"},{"text":" to "},{"text":"WorldWarSMP","bold":true,"color":"gold"},{"text":"!"}]`
const BOOK_COMMAND = `written_book{pages:['{"text":"There are 3 things you need to be careful of when you first start out:\n\n1. Temperature, you get 10 mins of immunity every time you spawn in but after this runs out, you should be more careful around hot/cold biomes. You have 4 mins before you reach extreme"}','{"text":"temperatures and then 1 minute before you start taking damage. This can be reversed however if you e.g. place a campfire to avoid freezing or jump into a pool of water to avoid overheating.\n\n2. You don\'t naturally heal, which means you have to use salves"}','{"text":"or other healing items to heal yourself (look up recipe in JEI, its very simple).\n\n3. Thirst, you need to craft a canteen to drink water (search up in JEI), and you can purify it too to not receive the \"thrist\" debuff (kinda like \"hunger\")."}','{"text":"Also backpacks are a thing, you can look that up in JEI too for how to craft them.\n\nEnjoy playing!"}'],title:"Beginners Guide",author:XxLegitOPxX}`

onEvent('player.logged_in', event => {
    var playTime = event.player.stats.playTime
    var playerName = event.player.name.text

    if (playTime === 0 || playerName === "Exinity") {
        Utils.server.runCommand(`/tellraw ${event.player} ${WELCOME_MESSAGE_1}`)
        //Utils.server.runCommand(`/tellraw ${event.player} ${WELCOME_MESSAGE_2}`)
        //Utils.server.runCommand(`/give ${event.player} ${BOOK_COMMAND}`)
    } else {
        Utils.server.runCommand(`/tellraw ${event.player} ${WELCOME_BACK_MESSAGE}`)
    }
})