import Phaser, { Game } from "phaser";

export default class Player {
    sprite:Phaser.Physics.Arcade.Sprite;

    constructor(scene:Phaser.Scene, x:number, y:number) {
        this.sprite = scene.physics.add.sprite(x, y, "player", "");

        scene.anims.create({
            key: "run",
            frames: [
              {key:"player", frame:"mariostop.png"},
              {key:"player", frame:"run1.png"},
              {key:"player", frame:"run2.png"},
            ],
            repeat: -1,
            yoyo: true,
            frameRate: 8
          })
    }

    move(dir:number):void {
        this.sprite.play("run");
    }
}
