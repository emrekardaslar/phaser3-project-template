import Phaser from "phaser";
/* import logoImg from "./assets/logo.png"; */

class MyGame extends Phaser.Scene {
  platforms;
  player;
  constructor() {
    super();
  }

  preload() {
    //  This is an example of a bundled image:
    /*     this.load.image("logo", logoImg); */

    //  This is an example of loading a static image from the public folder:
    this.load.image("sky", "assets/sky.png");
    this.load.image("ground", "assets/platform.png");
    this.load.image("star", "assets/star.png");
    this.load.image("bomb", "assets/bomb.png");
    this.load.spritesheet("dude", "assets/dude.png", {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  create() {
    this.add.image(400, 300, "sky");
    this.add.image(400, 500, "ground");
    this.add.image(300, 200, "ground");
    this.add.image(300, 470, "star");
    this.add.image(400, 460, "dude");

    this.platforms = this.physics.add.staticGroup();

    this.platforms.create(400, 568, "ground").setScale(2).refreshBody();

    this.platforms.create(600, 400, "ground");
    this.platforms.create(50, 250, "ground");
    this.platforms.create(750, 220, "ground");
  }
}

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: MyGame,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
};

const game = new Phaser.Game(config);
