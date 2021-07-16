import Phaser from "phaser";
import Player from "./player";

export default class controller {
    player:Player;
    constructor (player:Player) {
        this.player = player;
        this.player.move(1);
    }
}