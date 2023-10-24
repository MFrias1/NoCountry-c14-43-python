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
    
    // x and y position, and key in preload()
    this.add.image(240, 320,'background'); //BACKGROUND img loaded to scene

    //colors img loaded to scene by using '.add'
    const green2= this.add.image(300,550, 'puntoverde').setScale(0.5); 
    const green= this.add.image(350,550, 'puntoverde').setScale(0.5);
    const black= this.add.image(400,550, 'puntonegro').setScale(0.5);
    const black2= this.add.image(450,550, 'puntonegro2').setScale(0.5);
    const blue= this.add.image(500,550, 'puntoazul').setScale(0.5);
    const red= this.add.image(550,550, 'puntorojo').setScale(0.5);

    botonCoins.setInteractive({ useHandCursor: true });
    
    //1 trash can loaded to scene, add .physics so users can interact with the character using the keyboard.
    red.setInteractive({ useHandCursor:true }); //cambia el cursor al estar encima del color
    red.on("pointerup", ()=>{ //evento
        // Verifica si ya existe un basurero en la escena y lo destruye.
        if (this.basetacho && this.tacho) {
            this.basetacho.destroy();
            this.tacho.destroy();
        }
        //crea un nuevo basurero correspondiente al color seleccionado.
        this.basetacho = this.physics.add.sprite(240, 490, 'basetacho').setImmovable();
        this.tacho = this.physics.add.sprite(250, 450, 'tachorojo').setScale(0.5);
        
    });
    green.setInteractive({ useHandCursor:true });
    green.on("pointerup", ()=>{
        // Verifica si ya existe un basurero en la escena y, en ese caso, destrúyelo.
        if (this.basetacho && this.tacho) {
            this.basetacho.destroy();
            this.tacho.destroy();
        }
        this.basetacho = this.physics.add.sprite(240, 490, 'basetacho').setImmovable();
        this.tacho = this.physics.add.sprite(250, 450, 'tachoverde').setScale(0.5);
    });
    black.setInteractive({ useHandCursor:true });
    black.on("pointerup", ()=>{
        if (this.basetacho && this.tacho) {
            this.basetacho.destroy();
            this.tacho.destroy();
        }
        this.basetacho = this.physics.add.sprite(240, 490, 'basetacho').setImmovable();
        this.tacho = this.physics.add.sprite(250, 450, 'tachoamarillo').setScale(0.5);
    });
    blue.setInteractive({ useHandCursor:true });
    blue.on("pointerup", ()=>{
        if (this.basetacho && this.tacho) {
            this.basetacho.destroy();
            this.tacho.destroy();
        }
        this.basetacho = this.physics.add.sprite(240, 490, 'basetacho').setImmovable();
        this.tacho = this.physics.add.sprite(250, 450, 'tachoazul').setScale(0.5);
    });
    black2.setInteractive({ useHandCursor:true });
    black2.on("pointerup", ()=>{
        if (this.basetacho && this.tacho) {
            this.basetacho.destroy();
            this.tacho.destroy();
        }
        this.basetacho = this.physics.add.sprite(240, 490, 'basetacho').setImmovable();
        this.tacho = this.physics.add.sprite(250, 450, 'tachoamarillo').setScale(0.5);
    });
    green2.setInteractive({ useHandCursor:true });
    green2.on("pointerup", ()=>{
        if (this.basetacho && this.tacho) {
            this.basetacho.destroy();
            this.tacho.destroy();
        }
        this.basetacho = this.physics.add.sprite(240, 490, 'basetacho').setImmovable();
        this.tacho = this.physics.add.sprite(250, 450, 'tachonaranja').setScale(0.5);
    });

    // Creamos y configuramos los objetos que caen
    for (let i = 0; i < 5; i++) {
        const randomX = Phaser.Math.Between(100, 800); // Posición aleatoria en el eje X
        this.platform= this.physics.add.image(randomX,-1,'platform').setGravityY(300);// Ajusta el nombre del objeto que desees usar
        const randomSpeedY = Phaser.Math.Between(100, 300); // Velocidad vertical aleatoria
        this.platform.setVelocity(0, randomSpeedY);

    }

    this.basetacho = this.physics.add.sprite(240, 490, 'basetacho').setImmovable();
    this.tacho = this.physics.add.sprite(250, 450, 'tachoverde').setScale(0.5);

    //access to user´s keyboard
    this.cursors = this.input.keyboard.createCursorKeys();

    this.physics.add.collider(this.platform, this.basetacho);
}

function update(){ //loop
    this.tacho.setVelocity(0) && this.basetacho.setVelocity(0);
    if (this.cursors.left.isDown)
    {
        this.tacho.setVelocityX(-300) && this.basetacho.setVelocityX(-300);

    }else if (this.cursors.right.isDown)
    {
        this.tacho.setVelocityX(300) && this.basetacho.setVelocityX(300);
    };
}