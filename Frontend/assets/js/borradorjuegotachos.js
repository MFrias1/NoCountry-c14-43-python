/*export class JuegoTachos extends Phase.Scene{

    constructor(){
        super({ key: 'JuegoTachos' })
    }


    //1st - Load images, audio, videos so they can be used.
    preload(){
        //load background img
        this.load.image('background','./Juegos/PNG/Background/bg_layer1.png');
        //load platform img
        this.load.image('platform', './Juegos/PNG/Environment/cactus.png');
        this.load.image('colores', './Juegos/PNG/Environment/grass2.png');
        this.load.image('tacho','./Juegos/PNG/Environment/grass1.png');
        this.load.image('gameover', './Juegos/PNG/Enviroment/negro.png');
    }

    //2nd - the loaded content is set on the game scene.
    create(){ 
        
        const gameoverimg = this.add.image(240,320,'gameover');
        gameoverimg.visible=false;
        
        // x and y position, and key in preload()
        this.add.image(240, 320,'background'); //BACKGROUND img loaded to scene

        //4 leaves img loaded to scene by using '.add'
        this.add.image(300,550, 'colores').setScale(0.6); 
        this.add.image(350,550, 'colores').setScale(0.6);
        this.add.image(400,550, 'colores').setScale(0.6);
        this.add.image(450,550, 'colores').setScale(0.6);
        this.add.image(500,550, 'colores').setScale(0.6);
        this.add.image(550,550, 'colores').setScale(0.6);
        
        //add '.physics' to the platform so the trash can be affected by gravity.
        this.platform= this.physics.add.image(240,-1,'platform').setGravityY(300)//add gravity so the trash falls down.
            .setScale(0.5);//reduce platform image half the size.
        this.platform2 = this.physics.add.image(500,-1,'platform').setGravityY(300)//add gravity so the trash falls down.
            .setScale(0.5);
    
        //1 Leaf loaded to scene, add .physics so users can interact with the character using the keyboard.
        this.tacho = this.physics.add.sprite(250, 450, 'tacho').setImmovable();

        //access to user´s keyboard
        this.cursors = this.input.keyboard.createCursorKeys();

        this.physics.add.collider(this.platform, this.tacho);
        this.physics.add.collider(this.platform2, this.tacho);
    }

    update(){ //loop

        /* fin del juego 
        if(this.platform.y>100){
            gameoverimg.visible=true;
            this.scene.pause();
        }

        this.tacho.setVelocity(0);

        if (this.cursors.left.isDown)
        {
            this.tacho.setVelocityX(-300);

        }else if (this.cursors.right.isDown)
        {
            this.tacho.setVelocityX(300);
        };
        
    }
}*/