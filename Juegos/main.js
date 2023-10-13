//Declaro e inicializo la variable
const config = {
    //height and width of the game
    width: 500,
    height: 500,
    //let Phaser decide to use Canvas or WebGl to render the game depending on the browser and the device.
    type: Phaser.AUTO,

    //creating a game scene
    scene:{
        //let us specify multimedia content to be loaded before starting the scene
        preload: preload,
        //is called once the assets from the scene have been loaded.
        create: create,
        update: update
    },

    //adding physics
    physics:{
        default:'arcade',
        arcade: {
            gravity:{
                y:200
            },
            debug: true
        }
    }

}

let game = new Phaser.Game(config)

//1st - Load images, audio, videos so they can be used.
function preload(){
    //load background img
    this.load.image('background','./PNG/Background/bg_layer1.png');
    //load platform img
    this.load.image('platform', './PNG/Environment/ground_grass.png');
}

//2nd - the loaded content is set on the game scene.
function create(){
    // x and y position, and key in preload()
    this.add.image(240, 320,'background');

    //add physics to the platform
    this.platform = this.physics.add.image(240,320,'platform')
        .setScale(0.5); //reduce platform at half the size.
    //adding collision
    this.physics.add.collider(this.platform)


}

function update(){

}