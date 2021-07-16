import Phaser from 'phaser';

export default class Demo extends Phaser.Scene {

  map: number[];
  player:string;
  cursors: number[];
  groundLayer: number[];
  coinLayer: number[];
  text: string;


  constructor() {
    super('GameScene');
    this.map = [];
    this.player= "";
    this.cursors = [];
    this.groundLayer = [];
    this.coinLayer = [];
    this.text = "";
  }

  preload() {
    //Load tilemap and tiles
    this.load.tilemapTiledJSON("map","assets/tilemaps/tilemaptest1.json");
    this.load.spritesheet("tiles", "assets/sbmstiles.png");
    this.load.atlas("player", "assets/smbsheet1.gif", "assets/spritemap/pcsnpcs.json");
    
  }

  create() {
    const logo = this.add.image(400, 70, 'logo');

    this.tweens.add({
      targets: logo,
      y: 350,
      duration: 1500, 
      ease: 'Sine.inOut',
      yoyo: true,
      repeat: -1
    });
  }
}
