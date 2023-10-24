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
};

let game = new Phaser.Game(config);

//1st - Load images, audio, videos so they can be used.
function preload(){
    //load background img
    this.load.image('background','./Juegos/PNG/Background/bg_layer1.png');
    //load basura img
    this.load.image('platform', './Juegos/PNG/Environment/ground_grass.png');
    this.load.image('basura', './Juegos/PNG/Environment/cactus.png')
    this.load.image('colores', './Juegos/PNG/Environment/grass2.png');
    this.load.image('tacho','./Juegos/PNG/Environment/grass1.png');
    this.load.image('gameover', './Juegos/PNG/Background/bg_layer3.png');
    this.load.image('start','./Juegos/PNG/Background/bg_layer2.png')
    //tachos de basura
    this.load.image('tachoverde', './Juegos/PNG/Environment/tachoverde.png');
    this.load.image('tachorojo', './Juegos/PNG/Environment/tachorojo.png');
    this.load.image('tachomarron', './Juegos/PNG/Environment/tachomarron.png');
    this.load.image('tachonegro', './Juegos/PNG/Environment/tachonegro.png');
    this.load.image('tachoamarillo', './Juegos/PNG/Environment/tachoamarillo.png');
    this.load.image('tachonaranja', './Juegos/PNG/Environment/tachonaranja.png');
    this.load.image('tachoazul', './Juegos/PNG/Environment/tachoazul.png');
    this.load.image('basetacho', './Juegos/PNG/Environment/basetacho.jpg');
    //colores de tachos
    this.load.image('puntoazul', './Juegos/PNG/Environment/puntoazul.png');
    this.load.image('puntoamarillo', './Juegos/PNG/Environment/puntoamarillo.png');
    this.load.image('puntomarron', './Juegos/PNG/Environment/puntomarron.png');
    this.load.image('puntonegro', './Juegos/PNG/Environment/puntonegro.png');
    this.load.image('puntorojo', './Juegos/PNG/Environment/puntorojo.png');
    this.load.image('puntoverde', './Juegos/PNG/Environment/puntoverde.png');
};

//2nd - the loaded content is set on the game scene.
function create(){ 

    // x and y position, and key in preload().//BACKGROUND img loaded to scene
    this.add.image(240, 320,'background'); 

    // Creamos y configuramos los objetos que caen.
    const randomX = Phaser.Math.Between(100, 800); // Posición aleatoria en el eje X
    //add '.physics' to the platform so the trash can be affected by gravity.
    this.platform= this.physics.add.sprite(randomX,-1,'platform').setGravityY(300).setScale(0.3);// Ajusta el nombre del objeto que desees usar
    this.basura= this.physics.add.sprite(randomX,-1,'basura').setGravityY(300).setScale(0.5);
    const randomSpeedY = Phaser.Math.Between(90, 300); // Velocidad vertical aleatoria
    this.platform.setVelocity(0, randomSpeedY);
    
    let monedasText;
    monedasText = this.add.text(16, 16, 'TotalMonedas:0', {
        fontSize:'22px',
        fill:'#000'
    })

    //1 trashbin loaded to scene, add .physics so users can interact with the character using the keyboard.
    this.basetacho = this.physics.add.sprite(290, 490, 'basetacho').setImmovable();
    this.tacho = this.physics.add.sprite(290, 450, 'tachoverde').setScale(0.5);

    this.physics.add.collider(this.platform, this.basetacho);
    this.physics.add.collider(this.basura, this.basetacho);
    
    //colors img loaded to scene by using '.add'
    const black= this.add.image(300,550, 'puntonegro').setScale(0.5);
    const brown= this.add.image(350,550, 'puntomarron').setScale(0.5); 
    const green= this.add.image(400,550, 'puntoverde').setScale(0.5);
    const yellow= this.add.image(450,550, 'puntoamarillo').setScale(0.5);
    const blue= this.add.image(500,550, 'puntoazul').setScale(0.5);
    const red= this.add.image(550,550, 'puntorojo').setScale(0.5);
    /*
    this.start = this.add.image(240, 320, 'start');
    this.start.visible=true;
    this.scene.pause();*/
    /*
    this.gameover = this.add.image(240, 320, 'gameover');
    this.start.visible=false;*/

    red.setInteractive({ useHandCursor:true }); //cambia el cursor al estar encima del color
    green.setInteractive({ useHandCursor:true });
    black.setInteractive({ useHandCursor:true });
    blue.setInteractive({ useHandCursor:true });
    brown.setInteractive({ useHandCursor:true });
    yellow.setInteractive({ useHandCursor:true });

    red.on("pointerup", ()=>{ //evento
        // Verifica si ya existe un basurero en la escena y lo destruye.
        if (this.basetacho && this.tacho) {
            this.basetacho.destroy();
            this.tacho.destroy();   
        }
        //crea un nuevo basurero correspondiente al color seleccionado.
        this.basetacho = this.physics.add.sprite(250, 490, 'basetacho').setImmovable();
        this.tacho = this.physics.add.sprite(250, 450, 'tachorojo').setScale(0.5);  
    })
    green.on("pointerup", ()=>{
        // Verifica si ya existe un basurero en la escena y, en ese caso, destrúyelo.
        if (this.basetacho && this.tacho) {
            this.basetacho.destroy();
            this.tacho.destroy();
        }
        this.basetacho = this.physics.add.sprite(250, 490, 'basetacho').setImmovable();
        this.tacho = this.physics.add.sprite(250, 450, 'tachoverde').setScale(0.5);
    })
    black.on("pointerup", ()=>{
        if (this.basetacho && this.tacho) {
            this.basetacho.destroy();
            this.tacho.destroy();
        }
        this.basetacho = this.physics.add.sprite(250, 490, 'basetacho').setImmovable();
        this.tacho = this.physics.add.sprite(250, 450, 'tachonegro').setScale(0.5);
    })
    blue.on("pointerup", ()=>{
        if (this.basetacho && this.tacho) {
            this.basetacho.destroy();
            this.tacho.destroy();
        }
        this.basetacho = this.physics.add.sprite(250, 490, 'basetacho').setImmovable();
        this.tacho = this.physics.add.sprite(250, 450, 'tachoazul').setScale(0.5);
    })
    brown.on("pointerup", ()=>{
        if (this.basetacho && this.tacho) {
            this.basetacho.destroy();
            this.tacho.destroy();
        }
        this.basetacho = this.physics.add.sprite(250, 490, 'basetacho').setImmovable();
        this.tacho = this.physics.add.sprite(250, 450, 'tachomarron').setScale(0.5);
    })
    yellow.on("pointerup", ()=>{
        if (this.basetacho && this.tacho) {
            this.basetacho.destroy();
            this.tacho.destroy();
        }
        this.basetacho = this.physics.add.sprite(250, 490, 'basetacho').setImmovable();
        this.tacho = this.physics.add.sprite(250, 450, 'tachoamarillo').setScale(0.5);
    })

    //access to user´s keyboard
    this.cursors = this.input.keyboard.createCursorKeys();
};

function update(){ //loop
    /*
    if(this.cursors.enter.isDown){
        this.start.visible=false;
    }*/

    this.tacho.setVelocity(0) && this.basetacho.setVelocity(0);
    if (this.cursors.left.isDown)
    {
        this.tacho.setVelocityX(-300) && this.basetacho.setVelocityX(-300);

    }else if (this.cursors.right.isDown)
    {
        this.tacho.setVelocityX(300) && this.basetacho.setVelocityX(300);
    };
};

/*

*/ 