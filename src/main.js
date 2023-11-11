import Phaser from "phaser";

class Player extends Phaser.Physics.Arcade.Image {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    scene.physics.world.enableBody(this);
    this.setPushable(false);
    this.setCollideWorldBounds(true);

    this.moveSpeed = 200;
  }
}

class Game extends Phaser.Scene {
  constructor() {
    super({ key: "Game" });
  }

  preload() {
    this.load.image("player", "player.png");
  }

  create() {
    this.player = new Player(this, 200, 200, "player");
    this.secondPlayer = new Player(this, 64, 64, "player");
    this.add.existing(this.player);
    this.add.existing(this.secondPlayer);

    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
  }

  update() {
    let localVelocity = new Phaser.Math.Vector2(
      this.keyD.isDown - this.keyA.isDown,
      this.keyS.isDown - this.keyW.isDown,
    ).normalize();

    this.player.setVelocity(
      localVelocity.x * this.player.moveSpeed,
      localVelocity.y * this.player.moveSpeed,
    );

    this.physics.collide(this.player, this.secondPlayer);
  }
}

const gameConfig = {
  type: Phaser.CANVAS,
  pixelArt: true,
  scale: {
    parent: "game-container",
    width: 800,
    height: 600,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  backgroundColor: "#5c5b5b",
  scene: [Game],
  physics: { default: "arcade" },
};

const game = new Phaser.Game(gameConfig);
