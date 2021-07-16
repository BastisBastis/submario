import Phaser from "phaser";
import Player from "./player";

export default class controller {
    player:Player;

    constructor (scene:Phaser.Scene, player:Player) {
        this.player = player;
        
        const leftArrow = scene.input.keyboard.addKey("LEFT");
        leftArrow.on("down", () => {
            player.move(-1);
        });
        leftArrow.on("up"), () => {
            player.stop();
        }
        const rightArrow = scene.input.keyboard.addKey("RIGHT");
        rightArrow.on("down", () => {
            player.move(1);
        });
        rightArrow.on("up", () => {
            player.stop() 
        });


    }
}