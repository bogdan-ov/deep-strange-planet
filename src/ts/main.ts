import { initAssets } from "./managers/assets";
import { Game } from "./engine";
import { Player } from "./objects/entities/Player";
import { SpawnParticles } from "./engine/components/Particles";
import { initLevel } from "./managers/level";
import { Stone } from "./objects/ores/Stone";
import { CrackedStone } from "./objects/ores/CrackedStone";
import { Config, GeneratorConfig } from "./config";
import { DeepStone } from "./objects/ores/DeepStone";
import { Cidium } from "./objects/ores/Cidium";
import { initDome } from "./managers/dome";
import { Osmy } from "./objects/ores/Osmy";
import { Basalt } from "./objects/ores/Basalt";
import { Vector2 } from "./engine/utils/math";
import { Antin } from "./objects/ores/Antin";
import { Rady } from "./objects/ores/Rady";
import { BurntBasalt } from "./objects/ores/BurntBasalt";

const game = new Game();

const player = game.add<Player>(new Player());
const level = initLevel(game);

let lastLoop = Date.now();
let fps = 0;

game.addInit(()=> {
    
    initAssets(game);
    initDome(game);
    
    game.generator.settings = [
        // > Stones
        {
            value: [0, 1],
            height: [0, 43],
            ore: Stone,
        },
        {
            value: [.5, .6],
            height: [5, 90],
            divider: 5,
            ore: CrackedStone
        },

        // > Deepest stones
        // Deep stone blend layer
        {
            value: [.8, 1],
            height: [30, 43],
            divider: 2,
            ore: DeepStone
        },
        // Deep stone layer
        {
            value: [0, 1],
            height: [42, GeneratorConfig.BASALT_LAYER_HEIGHT],
            ore: DeepStone
        },

        // Basalt blend layer
        {
            value: [.7, 1],
            height: [GeneratorConfig.BASALT_LAYER_HEIGHT - GeneratorConfig.LAYERS_BLEND_HEIGHT, GeneratorConfig.BASALT_LAYER_HEIGHT],
            divider: 3,
            ore: Basalt
        },
        // Basalt layer
        {
            value: [0, 1],
            height: [GeneratorConfig.BASALT_LAYER_HEIGHT, GeneratorConfig.BURNT_BASALT_LAYER_HEIGHT],
            ore: Basalt
        },

        // Burnt basalt blend layer
        {
            value: [.8, 1],
            height: [GeneratorConfig.BURNT_BASALT_LAYER_HEIGHT - GeneratorConfig.LAYERS_BLEND_HEIGHT, GeneratorConfig.BURNT_BASALT_LAYER_HEIGHT],
            divider: 3,
            ore: BurntBasalt
        },
        // Burnt basalt layer
        {
            value: [0, 1],
            height: [GeneratorConfig.BURNT_BASALT_LAYER_HEIGHT, Config.WORLD_HEIGHT],
            ore: BurntBasalt
        },
        
        // > Ores
        {
            value: [.85, 1],
            // height: [12, Config.WORLD_HEIGHT - 10],
            height: [0, 140],
            divider: 5,
            ore: Cidium
        },
        {
            value: [.95, 1],
            height: [46, 140],
            divider: .8,
            ore: Osmy
        },
        {
            value: [0, .35],
            // height: [0, Config.WORLD_HEIGHT - 40],
            height: [160, Config.WORLD_HEIGHT - 22],
            divider: .9,
            ore: Antin
        },
        {
            value: [0, .3],
            height: [200, Config.WORLD_HEIGHT - 5],
            divider: 2,
            ore: Rady
        },

        // > Holes
        {
            value: [0, .5],
            height: [5, 150],
            ore: null,
        },
        {
            value: [0, .4],
            height: [155, Config.WORLD_HEIGHT - 40],
            divider: 5,
            ore: null,
        },
    ];
    game.camera.follow(player.position);
    
});
game.addUpdate(()=> {
    const thisLoop = Date.now();
    if (game.clock.elapsed % 30 == 0)
        fps = +(1000 / (thisLoop - lastLoop)).toFixed(1);
    lastLoop = thisLoop;

    level.update(player);
    
    game.camera.follow(player.position, .1);
    game.generator.generateChunksAt(player.position);
});
game.addRender(renderer=> {

    renderer.drawText(fps.toString(), "#fff", "20px Pixel", new Vector2(40, 40), 0, undefined, 1, "ui");
    renderer.drawText(`Height: ${ Math.floor(player.position.y / Config.SPRITE_SIZE + 1) }`, "#fff", "20px Pixel", new Vector2(70, 80), 0, undefined, 1, "ui");

});

game.init();

// ! Debug
window.addEventListener("keydown", e=> {
    
    if (e.code == "KeyG")
        console.log(game);
    if (e.code == "KeyP")
        SpawnParticles(game, game.camera.position);
    if (e.code == "KeyM")
        console.log(player);

});
