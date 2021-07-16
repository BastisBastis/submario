import Phaser from "phaser";
import Player from "./player";

export default class controller {
    player:Player;

    constructor (scene:Phaser.Scene, player:Player) {
        this.player = player;
        
        const leftArrow = scene.input.keyboard.addKey("LEFT");
        leftArrow.on("down", () {
            player.move(-1);
        })
    }
}