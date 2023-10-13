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
    this.load.image('colores', './PNG/Environment/grass2.png');
    this.load.image('tacho','./PNG/Environment/grass1.png')
}

//2nd - the loaded content is set on the game scene.
function create(){
    
    // x and y position, and key in preload()
    this.add.image(240, 320,'background');

    this.add.image(50,250, 'colores').setScale(0.6);
    this.add.image(50,300, 'colores').setScale(0.6);
    this.add.image(50,350, 'colores').setScale(0.6);
    this.add.image(50,400, 'colores').setScale(0.6);

    this.tacho=this.add.image(250, 450, 'tacho');

    //add physics to the platform
    this.physics.add.image(240,-1,'platform')
        .setScale(0.5);//reduce platform at half the size.


this.cursors = this.input.keyboard.createCursorKeys(); //have access to user keyboard

}
function update(){

    if(this.cursors.left.isDown){
        this.tacho.setVelocityX(-200)
    }else if(this.cursors.right.isDown){
        this.tacho.setVelocityX(200);
    }else{
        this.tacho.setVelocityX(0);
    }
}