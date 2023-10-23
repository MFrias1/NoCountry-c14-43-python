export class GameOver extends Phase.Scene{

    constructor(){
        super({ key: 'GameOver' })
    }

    preload(){

        this.load.image('gameover', './Juegos/PNG/Enviroment/negro.png');

    }

    create(){
        const gameoverimg = this.add.image(240,320,'gameover');
        gameoverimg.visible=false;

        const botonCoins = thid.add.text(100, 100, "Monedas ganadas");
        botonCoins.visible=false;

        botonCoins.setInteractive({ useHandCursor: true });

        botonCoins.on("pointerup", ()=>{

        })
    }

    update(){}
}