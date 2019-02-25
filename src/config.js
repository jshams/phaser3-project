import Phaser from 'phaser'
import GameScene from './GameScene'

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: GameScene
};

export { config }
