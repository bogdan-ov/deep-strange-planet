import { Game } from "../engine"; // @ts-ignore
// I can't setup declare module :(
import player_stay_img from "../../images/player/stay.png"; // @ts-ignore
import player_walk_0_img from "../../images/player/walk/0.png"; // @ts-ignore
import player_walk_1_img from "../../images/player/walk/1.png"; // @ts-ignore
import player_walk_2_img from "../../images/player/walk/2.png"; // @ts-ignore

import stone_img from "../../images/ores/stone.png"; // @ts-ignore
import deep_stone_img from "../../images/ores/deep-stone.png"; // @ts-ignore
import destrony_img from "../../images/ores/destrony.png"; // @ts-ignore
import stone_1_img from "../../images/ores/stone-1.png"; // @ts-ignore
import stone_2_img from "../../images/ores/stone-2.png"; // @ts-ignore
import stone_3_img from "../../images/ores/stone-3.png"; // @ts-ignore
import stone_4_img from "../../images/ores/stone-4.png"; // @ts-ignore
import cracked_stone_img from "../../images/ores/cracked-stone.png"; // @ts-ignore
import cidium_img from "../../images/ores/cidium.png"; // @ts-ignore

import raw_cidium_img from "../../images/raw/raw-cidium.png"; // @ts-ignore

import ground_img from "../../images/environment/ground.png"; // @ts-ignore
import dome_img from "../../images/environment/dome.png"; // @ts-ignore

import storage_1_img from "../../images/gear/storage-1.png"; // @ts-ignore
import recycler_1_img from "../../images/gear/recycler-1.png"; // @ts-ignore
import storage_1_outline_img from "../../images/gear/storage-1-outline.png"; // @ts-ignore
import recycler_1_outline_img from "../../images/gear/recycler-1-outline.png"; // @ts-ignore

import interact_img from "../../images/ui/interact.png"; // @ts-ignore

export function initAssets(game: Game) {
    
    // > Player
    game.loadAsset("player-stay", [player_stay_img]);
    game.loadAsset("player-walk", [
        player_walk_0_img,
        player_walk_1_img,
        player_walk_2_img,
        player_stay_img,
    ]);

    // > Ores
    game.loadAsset("stone", [stone_img]);
    game.loadAsset("deep-stone", [deep_stone_img]);
    game.loadAsset("destrony", [destrony_img]);
    game.loadAsset("stone-1", [stone_1_img]);
    game.loadAsset("stone-2", [stone_2_img]);
    game.loadAsset("stone-3", [stone_3_img]);
    game.loadAsset("stone-4", [stone_4_img]);
    game.loadAsset("cracked-stone", [cracked_stone_img]);
    game.loadAsset("cidium", [cidium_img]);

    game.loadAsset("raw-cidium", [raw_cidium_img]);

    game.loadAsset("ground", [ground_img])
    game.loadAsset("dome", [dome_img])

    game.loadAsset("storage-1", [storage_1_img])
    game.loadAsset("recycler-1", [recycler_1_img])
    game.loadAsset("storage-1-outline", [storage_1_outline_img])
    game.loadAsset("recycler-1-outline", [recycler_1_outline_img])

    game.loadAsset("interact", [interact_img])

}