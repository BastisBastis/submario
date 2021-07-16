import Phaser, { Game } from "phaser";

export default class Player {
    sprite:Phaser.Physics.Arcade.Sprite;
    maxSpeedX:number;

    constructor(scene:Phaser.Scene, x:number, y:number) {
        this.sprite = scene.physics.add.sprite(x, y, "player", "");
        this.maxSpeedX = 100;
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
          });
        scene.anims.create({
            key:"stop",
            frames: [
                {key:"player", frame:"mariostop.png"}
            ]
        });
    }

    move(dir:number):void {
        this.sprite.play("run");
        this.sprite.setVelocityX(dir*this.maxSpeedX);
    }

    stop():void {
        this.sprite.setVelocityX(0);
        this.sprite.play("stop");
    }
}
