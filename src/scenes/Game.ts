import Phaser from 'phaser';
 
export default class Demo extends Phaser.Scene {
 
  map: Phaser.Tilemaps.Tilemap | undefined;
  player:string;
  cursors: number[];
  groundLayer: Phaser.Tilemaps.TilemapLayer | undefined;
  coinLayer: number[];
  text: string;


  constructor() {
    super('GameScene');
    
    this.player= "";
    this.cursors = [];
    this.coinLayer = [];
    this.text = "";
  }

  preload() {
    //Load tilemap and tiles
    this.load.tilemapTiledJSON("map","assets/tilemap1.json");
    this.load.spritesheet("tiles", "assets/smbstiles.png", {frameWidth:16, frameHeight:16});
    //this.load.atlas("player", "assets/smbsheet1.gif", "assets/spritemap/pcsnpcs.json");

  }

  create() {
    this.map = this.make.tilemap({key: "map"});
    const groundTiles:Phaser.Tilemaps.Tileset = this.map.addTilesetImage("tiles");
    this.groundLayer = this.map.createLayer("World", groundTiles, 0, 0);
    this.groundLayer.setCollisionByExclusion([-1]);

    this.physics.world.bounds.width = this.groundLayer.width;
    this.physics.world.bounds.height = this.groundLayer.height;

  }
}
