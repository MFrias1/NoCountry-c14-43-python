//Declaro e inicializo la variable
const config = {
    //height and width of the game
    width: 900,
    height: 600,
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
            debug: true
        }   
    }
}

let game = new Phaser.Game(config);

//1st - Load images, audio, videos so they can be used.
function preload(){
    //load background img
    this.load.image('background','./Juegos/PNG/Background/bg_layer1.png');
    //load platform img
    this.load.image('platform', './Juegos/PNG/Environment/cactus.png');
    this.load.image('colores', './Juegos/PNG/Environment/grass2.png');
    this.load.image('tacho','./Juegos/PNG/Environment/grass1.png');
    this.load.image('gameover', './Juegos/PNG/Environment/bg_layer3.png');
    this.load.image('tachoverde', './Juegos/PNG/Environment/tachoverde.png');
    this.load.image('tachorojo', './Juegos/PNG/Environment/tachorojo.png');
    this.load.image('tachoamarillo', './Juegos/PNG/Environment/tachoamarillo.png');
    this.load.image('tachonaranja', './Juegos/PNG/Environment/tachonaranja.png');
    this.load.image('tachoazul', './Juegos/PNG/Environment/tachoazul.png');
    this.load.image('puntoazul', './Juegos/PNG/Environment/puntoazul.png');
    this.load.image('puntonegro2', './Juegos/PNG/Environment/puntoamarillo.png');
    this.load.image('puntonegro', './Juegos/PNG/Environment/puntonegro.png');
    this.load.image('puntorojo', './Juegos/PNG/Environment/puntorojo.png');
    this.load.image('puntoverde', './Juegos/PNG/Environment/puntoverde.png');
    this.load.image('basetacho', './Juegos/PNG/Environment/basetacho.jpg');
}

//2nd - the loaded content is set on the game scene.
function create(){ 
    
    /*
    botonCoins.setInteractive({ useHandCursor: true });*/

    // x and y position, and key in preload()
    this.add.image(240, 320,'background'); //BACKGROUND img loaded to scene

    //colors img loaded to scene by using '.add'
    this.add.image(300,550, 'puntoverde').setScale(0.5); 
    this.add.image(350,550, 'puntoverde').setScale(0.5);
    this.add.image(400,550, 'puntonegro').setScale(0.5);
    this.add.image(450,550, 'puntonegro2').setScale(0.5);
    this.add.image(500,550, 'puntoazul').setScale(0.5);
    this.add.image(5500,550, 'puntorojo').setScale(0.5);
    
    //add '.physics' to the platform so the trash can be affected by gravity.
    this.platform= this.physics.add.image(240,-1,'platform').setGravityY(300)//add gravity so the trash falls down.
        .setScale(0.5);//reduce platform image half the size.
    this.platform2 = this.physics.add.image(500,-1,'platform').setGravityY(300)//add gravity so the trash falls down.
        .setScale(0.5);
    
    this.add.text(50, 2, "Monedas ganadas", {
        fontSize:"24",
        fill: "black",
    });

    this.gameoverimg = this.add.image(240, 320, 'gameover');
    this.gameoverimg.visible=false;
   
    //1 Leaf loaded to scene, add .physics so users can interact with the character using the keyboard.
    this.basetacho = this.physics.add.sprite(240, 490, 'basetacho').setImmovable();
    this.tacho = this.physics.add.sprite(250, 450, 'tachoverde').setScale(0.5);

    //access to user´s keyboard
    this.cursors = this.input.keyboard.createCursorKeys();

    this.physics.add.collider(this.platform, this.basetacho);
    this.physics.add.collider(this.platform2, this.basetacho);
}

function update(){ //loop

    /* fin del juego 
    if(this.platform.y>100){
        this.gameoverimg.visible=true;
        this.scene.pause();
    }*/

    this.tacho.setVelocity(0) && this.basetacho.setVelocity(0);

    if (this.cursors.left.isDown)
    {
        this.tacho.setVelocityX(-300) && this.basetacho.setVelocityX(-300);

    }else if (this.cursors.right.isDown)
    {
        this.tacho.setVelocityX(300) && this.basetacho.setVelocityX(300);
    };
    
}