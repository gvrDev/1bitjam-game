import Phaser from "phaser";

class Game extends Phaser.Scene {
  constructor() {
    super({ key: "Game" });
  }

  preload() {}

  create() {
    let hello_text = this.add.text(
      this.sys.game.config.width / 2,
      this.sys.game.config.height / 2,
      "Hello world!",
      { fontSize: "64px", color: "#ffffff" },
    );

    hello_text.setOrigin(0.5, 0.5);
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
};

const game = new Phaser.Game(gameConfig);
