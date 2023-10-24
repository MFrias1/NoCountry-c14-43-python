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
    //monedas de recompensa
    let monedas=0;
    let monedasText;
    monedasText = this.add.text(16, 16, 'TotalMonedas:0', {
        fontSize:'22px',
        fill:'#000'
    })
    //grupo dinamico con basura
    const basuras = this.physics.add.group({
        key: 'basura',
        repeat: 11,
    });
    
    // Itera sobre los elementos del grupo y configura cada basura
    basuras.children.iterate(function(basura) {
        basura.setScale(0.5); // Escala la basura
        const randomX = Phaser.Math.Between(100, 800); // Posición aleatoria en el eje X
        basura.x = randomX; // Configura la posición X de la basura
    
        // Proporciona una velocidad inicial en el eje Y para hacer que caiga
        const randomSpeedY = Phaser.Math.Between(100, 300); // Velocidad vertical aleatoria
        basura.setVelocity(0, randomSpeedY);
    });

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
    });

    this.basetacho = this.physics.add.sprite(250, 490, 'basetacho').setImmovable();
    this.tacho = this.physics.add.sprite(250, 450, 'tachoamarillo').setScale(0.5);

    // La función de colisión se ejecutará cuando ocurra una colisión
    this.physics.add.collider(basuras, this.basetacho, (basura)=> {
        // Desactiva la gravedad de la basura
        basura.setGravityY(0);
        // con cada colision incrementa monedas
        monedas++;
        monedasText.setText('Total Monedas: ' + monedas);
    });

    this.physics.add.collider(basuras, this.basetacho, (basura) => {
        // Establece la basura en la variable de colisión
        colisionBasura = basura; 
    });

    //this.physics.gravity.y = 400;
    //this.physics.add.collider(basura, this.basetacho);
    //access to user´s keyboard
    this.cursors = this.input.keyboard.createCursorKeys();
};

function update(){ //loop
    this.tacho.setVelocity(0) && this.basetacho.setVelocity(0);
    if (this.cursors.left.isDown)
    {
        this.tacho.setVelocityX(-300) && this.basetacho.setVelocityX(-300);

    }else if (this.cursors.right.isDown)
    {
        this.tacho.setVelocityX(300) && this.basetacho.setVelocityX(300);
    };
};