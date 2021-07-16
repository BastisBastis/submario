import Phaser from "phaser";
import Player from "./player";

export default class controller {
    player:Player;

    constructor (scene:Phaser.Scene, player:Player) {
        this.player = player;
        
        /*scene.input.keyboard.on('keydown', (key:any) => {
            console.log("key");
        })
        */
    }
}