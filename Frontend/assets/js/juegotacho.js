//Declaro e inicializo la variable
const config = {
    //height and width of the game
    width: 1300,
    height: 625,
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
    this.load.image('background','./Juegos/PNG/Background/bg_juego.png');
    this.load.image('franjaTachos','./Juegos/PNG/Background/franjaTachos.png');
    this.load.image('gameover', './Juegos/PNG/Background/game_over.png')
    //load basura img
    this.load.image('banano', './Juegos/PNG/Environment/banano.png');
    this.load.image('celular', './Juegos/PNG/Environment/celular.png')
    this.load.image('bolsaPlastica', './Juegos/PNG/Environment/bolsa_plastica.png');
    this.load.image('vidrio','./Juegos/PNG/Environment/botella_de_vidrio.png');
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
let monedasText;
let monedas=0;
let juegoGanado = false;
//2nd - the loaded content is set on the game scene.
function create(){ 
    // x and y position, and key in preload().//BACKGROUND img loaded to scene
    this.add.image(600, 200,'background'); 
    //monedas de recompensa
    this.gameover = this.add.image(240, 320, 'gameover');
    this.gameover.visible=false;
    this.gameover.setDepth(1); // Establecer la profundidad a 1

    monedasText = this.add.text(config.width -156, 16, 'TotalMonedas:0', {
        fontSize:'12px',
        fill:'#000'
    })
    // Crear un botón de "Salir"
    const salirButton = this.add.rectangle(config.width - 1205, 25, 90, 20, 0xffffff); // Crear un rectángulo blanco
    salirButton.setInteractive({ useHandCursor: true }); // Cambiar el cursor 
    const salirText = this.add.text(config.width - 1205, 25, 'SALIR', { fontSize: '12px', fill: '#000000' }); // Agregar texto "Salir"
    salirText.setOrigin(0.5, 0.5); // Establecer el punto de origen en el centro
    salirText.setDepth(1); // Establecer la profundidad para que esté encima del botón

    // Evento de clic para redirigir a otra página
    salirButton.on('pointerup', () => {
        // Redireccionar a la otra página
        window.location.href = './login.html';
    });

    for (let i = 0; i<5; i++) {
        this.time.delayedCall(4000 * i, () => {
            // Grupo de basuras 2
            let reciclable = this.physics.add.group({
                key: 'banano',
                repeat: 3,
            });
    
            reciclable.children.iterate(function (basurareciclable) {
                basurareciclable.setScale(0.1);
                const randomX = Phaser.Math.Between(100, 1200);
                basurareciclable.x = randomX;
                const randomSpeedY = Phaser.Math.Between(300, 800);
                basurareciclable.setVelocity(0, randomSpeedY);
            });
    
            // La función de colisión se ejecutará cuando ocurra una colisión
            this.physics.add.collider(reciclable, this.basetacho, (basura) => {
                // Desactiva la gravedad de la basura
                basura.setGravityY(0);
                // con cada colisión incrementa monedas
                monedas++;
                monedasText.setText('Total Monedas: ' + monedas);
            });
    
        }, [], this);
        this.time.delayedCall(5500 * i, () => {
            // Grupo de basuras 2
            let reciclable = this.physics.add.group({
                key: 'celular',
                repeat: 3,
            });
    
            reciclable.children.iterate(function (basurareciclable) {
                basurareciclable.setScale(0.1);
                const randomX = Phaser.Math.Between(100, 1200);
                basurareciclable.x = randomX;
                const randomSpeedY = Phaser.Math.Between(300, 800);
                basurareciclable.setVelocity(0, randomSpeedY);
            });
    
            // La función de colisión se ejecutará cuando ocurra una colisión
            this.physics.add.collider(reciclable, this.basetacho, (basura) => {
                // Desactiva la gravedad de la basura
                basura.setGravityY(0);
                // con cada colisión incrementa monedas
                monedas++;
                monedasText.setText('Total Monedas: ' + monedas);
            });
    
        }, [], this);
        this.time.delayedCall(7500 * i, () => {
            // Grupo de basuras 2
            let reciclable = this.physics.add.group({
                key: 'bolsaPlastica',
                repeat: 3,
            });
    
            reciclable.children.iterate(function (basurareciclable) {
                basurareciclable.setScale(0.1);
                const randomX = Phaser.Math.Between(100, 1200);
                basurareciclable.x = randomX;
                const randomSpeedY = Phaser.Math.Between(300, 800);
                basurareciclable.setVelocity(0, randomSpeedY);
            });
    
            // La función de colisión se ejecutará cuando ocurra una colisión
            this.physics.add.collider(reciclable, this.basetacho, (basura) => {
                // Desactiva la gravedad de la basura
                basura.setGravityY(0);
                // con cada colisión incrementa monedas
                monedas++;
                monedasText.setText('Total Monedas: ' + monedas);
            });
    
        }, [], this);
        this.time.delayedCall(9500 * i, () => {
            // Grupo de basuras 2
            let reciclable = this.physics.add.group({
                key:  'vidrio',
                repeat: 3,
            });
    
            reciclable.children.iterate(function (basurareciclable) {
                basurareciclable.setScale(0.1);
                const randomX = Phaser.Math.Between(100, 1200);
                basurareciclable.x = randomX;
                const randomSpeedY = Phaser.Math.Between(300, 800);
                basurareciclable.setVelocity(0, randomSpeedY);
            });
    
            // La función de colisión se ejecutará cuando ocurra una colisión
            this.physics.add.collider(reciclable, this.basetacho, (basura) => {
                // Desactiva la gravedad de la basura
                basura.setGravityY(0);
                // con cada colisión incrementa monedas
                monedas++;
                monedasText.setText('Total Monedas: ' + monedas);
            });
    
        }, [], this);
    }
    
    //colors img loaded to scene by using '.add'
    const black= this.add.image(450,592, 'puntonegro').setScale(0.5);
    const brown= this.add.image(550,592, 'puntomarron').setScale(0.5); 
    const green= this.add.image(650,592, 'puntoverde').setScale(0.5);
    const yellow= this.add.image(750,592, 'puntoamarillo').setScale(0.5);
    const blue= this.add.image(850,592, 'puntoazul').setScale(0.5);
    const red= this.add.image(950,592, 'puntorojo').setScale(0.5);
    /*
    this.start = this.add.image(240, 320, 'start');
    this.start.visible=true;
    this.scene.pause();*/
    
    /*
    function mostrarMensajeVictoria() {
        juegoGanado = true;
        this.physics.pause();

        // Agregar un fondo negro semi transparente
        const fondoNegro = this.add.graphics();
        fondoNegro.fillStyle(0x000000, 0.7);
        fondoNegro.fillRect(0, 0, config.width, config.height);

        // Agregar el mensaje de victoria
        const mensajeVictoria = this.add.text(400, 300, '¡Has ganado el juego!', { fontSize: '32px', fill: '#fff' });
    }*/


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
        this.basetacho = this.physics.add.sprite(245, 510, 'basetacho').setImmovable();
        this.tacho = this.physics.add.sprite(250, 458, 'tachorojo').setScale(0.5);
        // Habilita la colisión del mundo para tacho
        this.tacho.setCollideWorldBounds(true);
        // Habilita la colisión del mundo para basetacho
        this.basetacho.setCollideWorldBounds(true);
        colisiones(this.tacho, this.basetacho);
    })
    green.on("pointerup", ()=>{
        // Verifica si ya existe un basurero en la escena y, en ese caso, destrúyelo.
        if (this.basetacho && this.tacho) {
            this.basetacho.destroy();
            this.tacho.destroy();
        }
        this.basetacho = this.physics.add.sprite(245, 510, 'basetacho').setImmovable();
        this.tacho = this.physics.add.sprite(250, 458, 'tachoverde').setScale(0.5);
        // Habilita la colisión del mundo para basetacho
        this.basetacho.setCollideWorldBounds(true);
        colisiones(this.tacho, this.basetacho);
    })
    black.on("pointerup", ()=>{
        if (this.basetacho && this.tacho) {
            this.basetacho.destroy();
            this.tacho.destroy();
        }
        this.basetacho = this.physics.add.sprite(245, 510, 'basetacho').setImmovable();
        this.tacho = this.physics.add.sprite(250, 458, 'tachonegro').setScale(0.5);
        // Habilita la colisión del mundo para tacho
        this.tacho.setCollideWorldBounds(true);
        // Habilita la colisión del mundo para basetacho
        this.basetacho.setCollideWorldBounds(true);
        colisiones(this.tacho, this.basetacho);
    })
    blue.on("pointerup", ()=>{
        if (this.basetacho && this.tacho) {
            this.basetacho.destroy();
            this.tacho.destroy();
        }
        this.basetacho = this.physics.add.sprite(245, 510, 'basetacho').setImmovable();
        this.tacho = this.physics.add.sprite(250, 458, 'tachoazul').setScale(0.5);
        // Habilita la colisión del mundo para tacho
        this.tacho.setCollideWorldBounds(true);
        // Habilita la colisión del mundo para basetacho
        this.basetacho.setCollideWorldBounds(true);
        colisiones(this.tacho, this.basetacho);
    })
    brown.on("pointerup", ()=>{
        if (this.basetacho && this.tacho) {
            this.basetacho.destroy();
            this.tacho.destroy();
        }
        this.basetacho = this.physics.add.sprite(245, 510, 'basetacho').setImmovable();
        this.tacho = this.physics.add.sprite(250, 458, 'tachomarron').setScale(0.5);
        // Habilita la colisión del mundo para tacho
        this.tacho.setCollideWorldBounds(true);
        // Habilita la colisión del mundo para basetacho
        this.basetacho.setCollideWorldBounds(true);
        colisiones(this.tacho, this.basetacho);
    })
    yellow.on("pointerup", ()=>{
        if (this.basetacho && this.tacho) {
            this.basetacho.destroy();
            this.tacho.destroy();
        }
        this.basetacho = this.physics.add.sprite(245, 510, 'basetacho').setImmovable();
        this.tacho = this.physics.add.sprite(250, 458, 'tachoamarillo').setScale(0.5);
        // Habilita la colisión del mundo para basetacho
        this.basetacho.setCollideWorldBounds(true);
        colisiones(this.tacho, this.basetacho);
    });
    
    this.franjaTacho = this.add.image(650,458, 'franjaTachos').setScale(0.9);
    this.basetacho = this.physics.add.sprite(245, 510, 'basetacho').setImmovable();
    this.tacho = this.physics.add.sprite(250, 458, 'tachoamarillo').setScale(0.5);
    
    // Habilita la colisión del mundo para tacho
    this.tacho.setCollideWorldBounds(true);
    // Habilita la colisión del mundo para basetacho
    this.basetacho.setCollideWorldBounds(true);

    function colisiones(tacho, basetacho){
        // Habilita la colisión del mundo para tacho
        tacho.setCollideWorldBounds(true);
        // Configura el área de colisión personalizada para el tacho
        const tachoWidth = tacho.width * 0.5; // Reducimos el ancho a la mitad
        const tachoHeight = tacho.height * 0.5; // Reducimos la altura a la mitad
        tacho.body.setSize(tachoWidth, tachoHeight, true);
        // Habilita la colisión del mundo para basetacho
        basetacho.setCollideWorldBounds(true);
    }

    //this.physics.add.collider(basura, this.basetacho);
    //access to user´s keyboard
    this.cursors = this.input.keyboard.createCursorKeys();
};

function update(){ //loop
    this.tacho.setVelocity(0) && this.basetacho.setVelocity(0);
    if (monedas >= 10) { // Cambia 10 por la cantidad de monedas requerida para ganar
       // mostrarMensajeVictoria.call(this);
       this.gameover.visible=true;
       this.gameover.setScale(2)
       this.gameover.setPosition(config.width / 2, config.height / 2);
       monedasText.setText('Total Monedas: ' + monedas);
       monedasText.setOrigin(0.5); // Establecer el punto de origen en el centro
       monedasText.setPosition(config.width / 2, config.height / 2);
       monedasText.setDepth(2); // Establecer la profundidad a 2 para que esté encima de la imagen de "Game Over"
       this.scene.pause();
    } else {
        if (this.cursors.left.isDown)
        {
            this.tacho.setVelocityX(-550) && this.basetacho.setVelocityX(-550);

        }else if (this.cursors.right.isDown)
        {
            this.tacho.setVelocityX(550) && this.basetacho.setVelocityX(550);
        };
    }
};
