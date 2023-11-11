import Phaser from "phaser";

class Game extends Phaser.Scene {
  constructor() {
    super({ key: "Game" });
  }

  preload() {}

  create() {}
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
