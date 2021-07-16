import Phaser from "phaser";
import Player from "./player";

export default class controller {
    player:Player;

    constructor (scene:Phaser.Scene, player:Player) {
        this.player = player;
        
        const cursors: Phaser.Types.Input.Keyboard.CursorKeys = scene.input.keyboard.createCursorKeys();
        console.log(cursors);
        if (cursors.left.isDown) {
            player.move(-1);
        }
        
    }
}