import Phaser from "../lib/phaser.js"

export default class Game extends Phaser.Scene{
    constructor(){
        super('game') //unique key for a scene
    }

    preload(){
        this.load.image('background','assets/bg_layer1.png')
        this.load.image('platform','assets/ground_grass.png')
    }

    create(){
        this.add.image(240,320,'background')
        this.add.image(240,320,'platform').setScale(0.5)
    }
}