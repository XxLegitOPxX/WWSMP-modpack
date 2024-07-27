




// for 1.18 pls use: onEvent("ponder.tag")
onEvent("ponder.tag", event => {
    /**
     * "kubejs:getting_started" -> the tag name
     * "minecraft:paper"        -> the icon
     * "Getting Started"        -> the title
     * "This is a description"  -> the description
     * [...items]               -> default items
     */
    event.createTag("kubejs:clockwork_ponders", "vs_clockwork:physics_infuser", "Create Clockwork", "All about using the items added by Valkyrien Skies Clockwork! \n Mod Made by Potato5678 & Ponders made by West6432", [
        // some default items
        "vs_clockwork:propellor_bearing",
        "vs_clockwork:flap_bearing",
         "vs_clockwork:ballooner",
          "vs_clockwork:afterblazer",
           "vs_clockwork:combustion_engine",
    ]);
});


onEvent("ponder.registry", (event) => {
  //  console.log("haiiiiii")
      event.create("vs_clockwork:propellor_bearing").scene("our_first_scene", "Basics of propellor bearing", "ponderjs:propellor2_1", (scene, util) => {
     // scene.world.setBlocks([02, 1, 02], "vs_clockwork:propellor_bearing", false);
     //    scene.world.hideSection([2, 1, 2]);
    // console.log("gjisrgijsrg")
 //scene.showStructure();
    //   scene.world.showSection([2, 1, 2], Facing.DOWN);
      // console.log("hiiii22222")
 util.grid.zero();
         scene.showBasePlate();
   // scene.showBaseplate();
        /**
         * The last argument is for spawning particles.
         * true if yes, false if no
         */
          scene.idle(5);

  
           
          const link = direction => scene.world.showIndependentSection([2, 1, 2], direction)
             scene.world.moveSection(link(Direction.UP), [0, 2, 0], 15)
          
          scene.idle(10);
          scene
            .text(70, "The propellor bearing is a block added by Clockwork to provide thrust to physics objects.", [2.0, 4, 2.5])
            /**
             * Optional | Sets the color of the text.
             * Possible values:
             * - PonderPalette.WHITE, PonderPalette.BLACK
             * - PonderPalette.RED, PonderPalette.GREEN, PonderPalette.BLUE
             * - PonderPalette.SLOW, PonderPalette.MEDIUM, PonderPalette.FAST
             * - PonderPalette.INPUT, PonderPalette.OUTPUT
             */
            .colored(PonderPalette.BLUE)
            /**
             * Optional | Places the text closer to the target position.
             */
            .placeNearTarget();
              scene.addKeyframe();
            /**
             * Optional | Adds a keyframe to the scene.
             */
      
 scene.idle(85);
    
                for (let y = 1; y < 7; y++) {
                for (let x = 0; x < 5; x++) {
                    scene.world.showSection([x, y, 1], Facing.DOWN);
                }
                scene.idle(3);
            }
            scene.idle(3)
               scene.addKeyframe();
   scene
            .text(60, "Attach create sails to the propellor bearing to make it move forwards or backwards.", [2.0, 2, 0.5])
            /**
             * Optional | Sets the color of the text.
             * Possible values:
             * - PonderPalette.WHITE, PonderPalette.BLACK
             * - PonderPalette.RED, PonderPalette.GREEN, PonderPalette.BLUE
             * - PonderPalette.SLOW, PonderPalette.MEDIUM, PonderPalette.FAST
             * - PonderPalette.INPUT, PonderPalette.OUTPUT
             */
            .colored(PonderPalette.RED)
            /**
             * Optional | Places the text closer to the target position.
             */
            .placeNearTarget();


 scene.idle(75);
              scene.addKeyframe();
            /**
             * Optional | Adds a keyframe to the scene.
             */


                scene.world.setBlocks([2, 4, 1], "minecraft:air");
                scene.world.setBlocks([2, 5, 1], "minecraft:air");
         scene.idle(10);
           scene.showControls(50, [2, 4.5, 2], "down").rightClick().withItem("vs_clockwork:propellor_bearing");;
           scene.idle(5);

               scene
            .text(75, "Right clicking the propellor bearing toggles it between block and contraption mode.", [2.0, 4, 2.5])
            /**
             * Optional | Sets the color of the text.
             * Possible values:
             * - PonderPalette.WHITE, PonderPalette.BLACK
             * - PonderPalette.RED, PonderPalette.GREEN, PonderPalette.BLUE
             * - PonderPalette.SLOW, PonderPalette.MEDIUM, PonderPalette.FAST
             * - PonderPalette.INPUT, PonderPalette.OUTPUT
             */
            .colored(PonderPalette.RED)
            /**
             * Optional | Places the text closer to the target position.
             */
            .placeNearTarget();
              scene.addKeyframe();
            /**
             * Optional | Adds a keyframe to the scene.
             */

    });

      event.create("vs_clockwork:propellor_bearing").scene("our_second_scene", "Attaching objects to propellor bearing", "ponderjs:propellor_spinning1", (scene, util) => {
          let propellorHead = scene.world.showIndependentSection(util.select.fromTo(0, 1, 1, 4, 6, 1), Direction.DOWN);
           scene.idle(10);
           scene.world.showSection([2, 3, 2], Facing.DOWN);
           let PropellorBear = util.select.position(2, 3, 2);
           scene.idle(5);
            let  bbox = util.select.fromTo(0, 3, 1, 4, 3, 1);
             bbox = bbox.add(util.select.fromTo(2, 1, 1, 2, 5, 1));
            scene.overlay.showOutline(PonderPalette.GREEN, "airgap", bbox, 25);
            scene.idle(5);
            scene.showControls(20, [2, 3.8, 1], "down").rightClick().withItem("create:super_glue");

            scene.text(85, "Glue the structure attached to the propellor bearing together to ensure it all spins.", [0.5, 3.7, 1.2])
            /**
             * Optional | Sets the color of the text.
             * Possible values:
             * - PonderPalette.WHITE, PonderPalette.BLACK
             * - PonderPalette.RED, PonderPalette.GREEN, PonderPalette.BLUE
             * - PonderPalette.SLOW, PonderPalette.MEDIUM, PonderPalette.FAST
             * - PonderPalette.INPUT, PonderPalette.OUTPUT
             */
            .colored(PonderPalette.GREEN)
            /**
             * Optional | Places the text closer to the target position.
             */
            .placeNearTarget();
              scene.addKeyframe();
              scene.idle(65);
                 scene.world.showSection([2, 3, 3], Facing.DOWN);
                    scene.idle(5);
                    scene.world.showSection([2, 3, 4], Facing.DOWN);
                scene.idle(10);
                scene.world.setKineticSpeed(util.select.fromTo(2, 3, 3, 2, 3, 4), -32);
               // scene.world.setKineticSpeed(PropellorBear, 16);
              scene.world.configureCenterOfRotation(propellorHead, [2.5, 3.5, 1]);
       
        //    scene.world.rotateBearing(PropellorBear, -360, 120)
            scene.world.rotateSection(propellorHead, 0, 0, -360, 60)
             scene.addKeyframe();
               scene.text(65, "Attach a shaft to the rear of the propellor bearing to power it.", [2.5, 3.7, 4])
            /**
             * Optional | Sets the color of the text.
             * Possible values:
             * - PonderPalette.WHITE, PonderPalette.BLACK
             * - PonderPalette.RED, PonderPalette.GREEN, PonderPalette.BLUE
             * - PonderPalette.SLOW, PonderPalette.MEDIUM, PonderPalette.FAST
             * - PonderPalette.INPUT, PonderPalette.OUTPUT
             */
            .colored(PonderPalette.WHITE)
            /**
             * Optional | Places the text closer to the target position.
             */
            .placeNearTarget();
      scene.idle(60)
      scene.world.setKineticSpeed(util.select.fromTo(2, 3, 3, 2, 3, 4), 0);
      });

      event.create("vs_clockwork:flap_bearing").scene("flap_scene1", "Basics of flap bearings", "ponderjs:flap_bearing3", (scene, util) => {

        let flaps = scene.world.showIndependentSection(util.select.fromTo(1, 2, 1, 1, 2, 3), Direction.DOWN);
       scene.idle(10);
        for (let x = 1; x < 4; x++) {
                    scene.world.showSection([2, 2, x], Facing.DOWN);
                    scene.idle(3);
                }
                scene.idle(15);
                    scene.world.showSection([3, 2, 2], Facing.WEST);
                    scene.idle(5);
                    scene.world.showSection([4, 2, 2], Facing.WEST);
                    scene.idle(15);

                      scene.text(60, "The flap bearing is a block added by Clockwork to rotate flying vehicles.", [2.7, 2.6, 2.7])
            /**
             * Optional | Sets the color of the text.
             * Possible values:
             * - PonderPalette.WHITE, PonderPalette.BLACK
             * - PonderPalette.RED, PonderPalette.GREEN, PonderPalette.BLUE
             * - PonderPalette.SLOW, PonderPalette.MEDIUM, PonderPalette.FAST
             * - PonderPalette.INPUT, PonderPalette.OUTPUT
             */
            .colored(PonderPalette.BLUE)
            /**
             * Optional | Places the text closer to the target position.
             */
            .placeNearTarget();
            scene.idle(80);

                      scene.world.setKineticSpeed(util.select.fromTo(3, 2, 2, 4, 2, 2), -32);
                           scene.text(45, "The flap bearing requires constant kinetic power to function.", [4, 2.7, 2.5])
            /**
             * Optional | Sets the color of the text.
             * Possible values:
             * - PonderPalette.WHITE, PonderPalette.BLACK
             * - PonderPalette.RED, PonderPalette.GREEN, PonderPalette.BLUE
             * - PonderPalette.SLOW, PonderPalette.MEDIUM, PonderPalette.FAST
             * - PonderPalette.INPUT, PonderPalette.OUTPUT
             */
            .colored(PonderPalette.WHITE)
            /**
             * Optional | Places the text closer to the target position.
             */
            .placeNearTarget();
            scene.addKeyframe();
            scene.idle(60);
            let  bbox = util.select.fromTo(1, 2, 1, 1, 2, 3);
            scene.overlay.showOutline(PonderPalette.GREEN, "airgap", bbox, 20);
             scene.addKeyframe();
            scene.idle(10);
            scene.showControls(20, [1, 3, 2], "down").rightClick().withItem("create:super_glue");
            scene.idle(15);
               scene.text(45, "Build the panels out of flaps and not wings.", [1.5, 2.7, 2.5])
            /**
             * Optional | Sets the color of the text.
             * Possible values:
             * - PonderPalette.WHITE, PonderPalette.BLACK
             * - PonderPalette.RED, PonderPalette.GREEN, PonderPalette.BLUE
             * - PonderPalette.SLOW, PonderPalette.MEDIUM, PonderPalette.FAST
             * - PonderPalette.INPUT, PonderPalette.OUTPUT
             */
            .colored(PonderPalette.RED)
            /**
             * Optional | Places the text closer to the target position.
             */
            .placeNearTarget();
            scene.idle(55);
              scene.addKeyframe();

             
              scene.world.showIndependentSection(util.select.position(2, 3, 1), Direction.EAST);
              scene.idle(15);
           scene.text(55, "Applying a redstone pulse to the bearing's right will make it tilt right and vice versa.", [2.5, 3.3, 1.5])
            /**
             * Optional | Sets the color of the text.
             * Possible values:
             * - PonderPalette.WHITE, PonderPalette.BLACK
             * - PonderPalette.RED, PonderPalette.GREEN, PonderPalette.BLUE
             * - PonderPalette.SLOW, PonderPalette.MEDIUM, PonderPalette.FAST
             * - PonderPalette.INPUT, PonderPalette.OUTPUT
             */
            .colored(PonderPalette.RED)
            /**
             * Optional | Places the text closer to the target position.
             */
            .placeNearTarget();
             scene.idle(60);
             
		scene.world.toggleRedstonePower(util.select.position(2, 3, 1));

          scene.world.configureCenterOfRotation(flaps, [1.5, 2.5, 2.5]);
       
        //    scene.world.rotateBearing(PropellorBear, -360, 120)
            scene.world.rotateSection(flaps, -20, 0, 0, 20)
                scene.idle(35);
                scene.world.toggleRedstonePower(util.select.position(2, 3, 1));
                   scene.world.rotateSection(flaps, 20, 0, 0, 20)
 scene.idle(25);
  scene.addKeyframe();
   scene.text(55, "You can also similarly use an analog lever and provide a variable input.", [2.5, 3.3, 1.5])
            .colored(PonderPalette.RED)
            .placeNearTarget();
             scene.idle(60);
      });
 
            event.create("vs_clockwork:afterblazer").scene("our_fibgfhghrst_scene", "Using afterburners", "ponderjs:afterblazers2", (scene, util) => {
                	scene.configureBasePlate(1, 1, 5);
		scene.setSceneOffsetY(-1);
		scene.scaleSceneView(.9);
         //     let flaps = scene.world.showIndependentSection(util.select.select(2, 2, 2), Direction.DOWN);
                 scene.world.showSection([2, 2, 2], Facing.DOWN);
                 scene.idle(7);

                   scene.text(65, "The afterblazer is a block added by clockwork as an alternative way to provide thrust aside from the propellor bearing.", [2.5, 2.3, 2.5])
            .colored(PonderPalette.RED)
            .placeNearTarget();
             scene.idle(75);
               scene.addKeyframe();
                 scene.world.showSection([2, 2, 1], Facing.DOWN);
                 scene.world.showSection([2, 2, 3], Facing.DOWN);
                 scene.idle(15);
                 scene.world.showSection([2, 3, 3], Facing.WEST);
                 scene.idle(5);
                 scene.world.showSection([2, 3, 1], Facing.WEST);
                 scene.idle(20);
                      scene.text(65, "Flipping the left lever will make it thrust from the left and flipping the right lever will make it thrust to the right. Flipping both will make it go forward with no direction.", [2.5, 3.3, 1.5])
            .colored(PonderPalette.RED)
            .placeNearTarget();
             scene.idle(75);
               scene.addKeyframe();
             scene.world.showIndependentSection(util.select.fromTo(3, 2, 2, 3, 5, 2), Direction.WEST);
               scene.idle(15);
               scene.text(65, "Fill a fluid tank with either strawberry, chocolate, or vanilla frosting and pump it into the rear of the afterblazer.", [3.5, 4.5, 2.5])
            .colored(PonderPalette.RED)
            .placeNearTarget();

            });

 event.create("vs_clockwork:ballooner").scene("our_fibgfhghrst_scene", "Using ballooners", "ponderjs:ballooners", (scene, util) => {
         scene.world.showSection([2, 3, 2], Facing.DOWN);

           scene.text(75, "The ballooner is a block added by clockwork as a way to provide vertical thrust to objects via large balloon objects.", [2.5, 3.3, 2.5])
            .colored(PonderPalette.RED)
            .placeNearTarget();
             scene.idle(85);
              scene.addKeyframe();
              scene.world.showSection([2, 2, 2], Facing.UP);
               scene.text(75, "Provide thrust from the bottom via a shaft. The RPM of the shaft determines the amount of heat the ballooner exerts.", [2.5, 2.3, 2.5])
               
            .colored(PonderPalette.RED)
            .placeNearTarget();
 scene.addKeyframe();
                scene.world.setKineticSpeed(util.select.position(2, 2, 2), 16);
                 scene.idle(85);
                  scene.world.showIndependentSection(util.select.fromTo(4, 2, 2, 4, 5, 2), Direction.WEST);
                   scene.world.showIndependentSection(util.select.fromTo(3, 3, 2, 3, 2, 2), Direction.WEST);
                 scene.text(70, "Similarly to the after blazer the ballooner accepts strawberry, chocolate, or vanilla frosting.", [3.5, 4.3, 2.5])
               
            .colored(PonderPalette.RED)
            .placeNearTarget();
   scene.addKeyframe();
              scene.idle(80);
               scene.world.showIndependentSection(util.select.fromTo(1, 4, 1, 3, 4, 3), Direction.DOWN);
                 scene.idle(5);
                     scene.world.showIndependentSection(util.select.fromTo(1, 5, 1, 3, 5, 3), Direction.DOWN);
                        scene.text(50, "Ballooners require sealed balloon hulls to keep the air in to produce upwards thrust.", [2.5, 5.3, 2.5])
                        
            .colored(PonderPalette.RED)
            .placeNearTarget();
            scene.addKeyframe();
              scene.idle(60);
               scene.addKeyframe();
                 scene.showControls(15, [2.5, 3.8, 2.5], "down").rightClick().withItem("create:brass_hand");
                 scene.idle(10);
                     scene.text(50, "Right click ballooners with brass hands to make them recalibrate the balloon hull.", [2.5, 3.3, 2.5])
            .colored(PonderPalette.RED)
            .placeNearTarget();
            });


            
 event.create("vs_clockwork:combustion_engine").scene("our_fibgfhghrst_scene", "How to use combustion engine", "ponderjs:combustionengine", (scene, util) => {
         scene.world.showSection([2, 3, 2], Facing.DOWN);

           scene.text(75, "The combustion engine is a block added by clockwork as a way to provide a power source with high stress capacity", [2.5, 3.3, 2.5])
            .colored(PonderPalette.RED)
            .placeNearTarget();
             scene.idle(85);
              scene.addKeyframe();
       
                scene.world.setKineticSpeed(util.select.position(1, 3, 2), 16);
                  scene.world.showIndependentSection(util.select.fromTo(4, 2, 2, 4, 5, 2), Direction.WEST);
                   scene.world.showIndependentSection(util.select.fromTo(3, 3, 2, 3, 2, 2), Direction.WEST);
                 scene.text(70, "Similarly to the after blazer the combusion engine accepts strawberry, chocolate, or vanilla frosting.", [3.5, 4.3, 2.5])
               
            .colored(PonderPalette.RED)
            .placeNearTarget();
   scene.addKeyframe();
              scene.idle(80);
            });
}) 
