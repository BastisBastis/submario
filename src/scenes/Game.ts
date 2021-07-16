import Phaser from 'phaser';
 
export default class Demo extends Phaser.Scene {
 
  map: Phaser.Tilemaps.Tilemap | undefined;
  player:Phaser.Physics.Arcade.Sprite | undefined;
  cursors: number[];
  groundLayer: Phaser.Tilemaps.TilemapLayer | undefined;
  coinLayer: number[];
  text: string;


  constructor() {
    super('GameScene');
    
    
    this.cursors = [];
    this.coinLayer = [];
    this.text = "";
  }

  preload() {
    //Load tilemap and tiles
    this.load.tilemapTiledJSON("map","assets/tilemaps/testlevel.json");
    this.load.spritesheet("tiles", "assets/smbstiles.png", {frameWidth:16, frameHeight:16});
    this.load.multiatlas("player", "assets/sprites/player.json", "assets/sprites");

  }

  create() {
    this.cameras.main.setSize(400,300).setViewport(0,0,400,300);
    this.map = this.make.tilemap({key: "map"});
    const groundTiles:Phaser.Tilemaps.Tileset = this.map.addTilesetImage("submariotiles", "tiles"); 
    this.groundLayer = this.map.createLayer("World", groundTiles, 0, 0);
    this.groundLayer.setCollisionByExclusion([-1]);

    this.physics.world.bounds.width = this.groundLayer.width;
    this.physics.world.bounds.height = this.groundLayer.height;

    this.player = this.physics.add.sprite(20,20, "player", "mariostop.png");
    this.player.setCollideWorldBounds(true);

    this.physics.add.collider(this.groundLayer, this.player);

    /*this.player = this.add.sprite(20,20,"player", "mariostop.png");
    this.anims.create({
      key: "run",
      frames: [
        {key:"player", frame:"mariostop.png"},
        {key:"player", frame:"run1.png"},
        {key:"player", frame:"run2.png"},
      ],
      repeat: -1,
      yoyo: true,
      frameRate: 4
    })
    this.player.play("run");
    */

  }
}
