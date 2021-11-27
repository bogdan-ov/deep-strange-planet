import { Game } from "../engine"; // @ts-ignore
// I can't setup declare module :(
// > Player
import player_stay_img from "../../images/player/stay.png"; // @ts-ignore
import player_walk_0_img from "../../images/player/walk/0.png"; // @ts-ignore
import player_walk_1_img from "../../images/player/walk/1.png"; // @ts-ignore
import player_walk_2_img from "../../images/player/walk/2.png"; // @ts-ignore

// > Entities
import robot_stay_img from "../../images/entities/robot/robot-stay.png"; // @ts-ignore

// > Stones
import stone_img from "../../images/ores/stone.png"; // @ts-ignore
import stony_ground_img from "../../images/ores/stony-ground.png"; // @ts-ignore
import basalt_img from "../../images/ores/basalt.png"; // @ts-ignore
import deep_stone_img from "../../images/ores/deep-stone.png"; // @ts-ignore
import burnt_basalt_img from "../../images/ores/burnt-basalt.png"; // @ts-ignore
import destrony_img from "../../images/ores/destrony.png"; // @ts-ignore
import manty_img from "../../images/ores/manty.png"; // @ts-ignore
import fetus_stone_img from "../../images/ores/fetus-stone.png"; // @ts-ignore
// import stone_1_img from "../../images/ores/stone-1.png"; // @ts-ignore
// import stone_2_img from "../../images/ores/stone-2.png"; // @ts-ignore
// import stone_3_img from "../../images/ores/stone-3.png"; // @ts-ignore
// import stone_4_img from "../../images/ores/stone-4.png"; // @ts-ignore
import cracked_stone_img from "../../images/ores/cracked-stone.png"; // @ts-ignore

// > Ores
import cidium_img from "../../images/ores/cidium.png"; // @ts-ignore
import osmy_img from "../../images/ores/osmy.png"; // @ts-ignore
import antin_img from "../../images/ores/antin.png"; // @ts-ignore
import rady_img from "../../images/ores/rady.png"; // @ts-ignore
import nerius_img from "../../images/ores/nerius.png"; // @ts-ignore

// > Raw
import raw_cidium_img from "../../images/raw/raw-cidium.png"; // @ts-ignore
import raw_grade_cidium_img from "../../images/raw/raw-grade-cidium.png"; // @ts-ignore
import raw_osmy_img from "../../images/raw/raw-osmy.png"; // @ts-ignore
import raw_antin_img from "../../images/raw/raw-antin.png"; // @ts-ignore
import raw_rady_img from "../../images/raw/raw-rady.png"; // @ts-ignore
import raw_nerius_img from "../../images/raw/raw-nerius.png"; // @ts-ignore
import raw_manty_img from "../../images/raw/raw-manty.png"; // @ts-ignore

// > Plants
import fetus_vine_img from "../../images/flora/fetus-vine.png"; // @ts-ignore

import ground_img from "../../images/environment/ground.png"; // @ts-ignore
import dome_img from "../../images/environment/dome.png"; // @ts-ignore

// > Gear
import gear_storage_1_img from "../../images/gear/gear-storage-1.png"; // @ts-ignore
import gear_recycler_1_img from "../../images/gear/gear-recycler-1.png"; // @ts-ignore
import gear_storage_1_outline_img from "../../images/gear/gear-storage-1-outline.png"; // @ts-ignore
import gear_recycler_1_outline_img from "../../images/gear/gear-recycler-1-outline.png"; // @ts-ignore

// > UI
import interact_img from "../../images/ui/interact.png"; // @ts-ignore
import close_img from "../../images/ui/close.png"; // @ts-ignore
import button_img from "../../images/ui/button.png"; // @ts-ignore
import tools_img from "../../images/ui/tools.png"; // @ts-ignore
import bottle_img from "../../images/ui/bottle.png"; // @ts-ignore
import damage_img from "../../images/ui/damage.png"; // @ts-ignore
import level_up_img from "../../images/ui/level-up.png"; // @ts-ignore
import storage_ui_img from "../../images/ui/storage-ui.png"; // @ts-ignore
import recycler_ui_img from "../../images/ui/recycler-ui.png"; // @ts-ignore
import description_ui_img from "../../images/ui/description-ui.png"; // @ts-ignore

// > Audio
import stone_hit_mp from "../../audio/stone-hit.mp3"; // @ts-ignore
import stone_break1_mp from "../../audio/stone-break/stone-break-1.mp3"; // @ts-ignore
import stone_break2_mp from "../../audio/stone-break/stone-break-2.mp3"; // @ts-ignore
import stone_break3_mp from "../../audio/stone-break/stone-break-3.mp3"; // @ts-ignore
import step1_mp from "../../audio/steps/1.mp3"; // @ts-ignore
import step2_mp from "../../audio/steps/2.mp3"; // @ts-ignore
import step3_mp from "../../audio/steps/3.mp3"; // @ts-ignore
import storage_mp from "../../audio/storage.mp3"; // @ts-ignore
import store_mp from "../../audio/store.mp3"; // @ts-ignore
import craft_mp from "../../audio/craft.mp3"; // @ts-ignore
import motor_mp from "../../audio/robot/motor.mp3"; // @ts-ignore
import motor_start_mp from "../../audio/robot/motor-start.mp3"; // @ts-ignore

export function initAssets(game: Game) {
    
    // > Player
    game.loadAsset("player-stay", [player_stay_img]);
    game.loadAsset("player-walk", [
        player_walk_0_img,
        player_walk_1_img,
        player_walk_2_img,
        player_stay_img,
    ]);

    // > Entities
    game.loadAsset("robot-stay", [robot_stay_img]);

    // > Stones
    game.loadAsset("stone", [stone_img]);
    game.loadAsset("stony-ground", [stony_ground_img]);
    game.loadAsset("basalt", [basalt_img]);
    game.loadAsset("deep-stone", [deep_stone_img]);
    game.loadAsset("burnt-basalt", [burnt_basalt_img]);
    game.loadAsset("destrony", [destrony_img]);
    game.loadAsset("manty", [manty_img]);
    game.loadAsset("fetus-stone", [fetus_stone_img]);
    // game.loadAsset("stone-1", [stone_1_img]);
    // game.loadAsset("stone-2", [stone_2_img]);
    // game.loadAsset("stone-3", [stone_3_img]);
    // game.loadAsset("stone-4", [stone_4_img]);
    game.loadAsset("cracked-stone", [cracked_stone_img]);

    // > Ores
    game.loadAsset("cidium", [cidium_img]);
    game.loadAsset("osmy", [osmy_img]);
    game.loadAsset("antin", [antin_img]);
    game.loadAsset("rady", [rady_img]);
    game.loadAsset("nerius", [nerius_img]);

    // > Raws
    game.loadAsset("raw-cidium", [raw_cidium_img]);
    game.loadAsset("raw-grade-cidium", [raw_grade_cidium_img]);
    game.loadAsset("raw-osmy", [raw_osmy_img]);
    game.loadAsset("raw-antin", [raw_antin_img]);
    game.loadAsset("raw-rady", [raw_rady_img]);
    game.loadAsset("raw-nerius", [raw_nerius_img]);
    game.loadAsset("raw-manty", [raw_manty_img]);

    // > Plants
    game.loadAsset("fetus-vine", [fetus_vine_img]);
    
    game.loadAsset("ground", [ground_img])
    game.loadAsset("dome", [dome_img])

    // > Gear
    game.loadAsset("gear-storage-1", [gear_storage_1_img])
    game.loadAsset("gear-recycler-1", [gear_recycler_1_img])
    game.loadAsset("gear-storage-1-outline", [gear_storage_1_outline_img])
    game.loadAsset("gear-recycler-1-outline", [gear_recycler_1_outline_img])

    // > UI
    game.loadAsset("interact", [interact_img])
    game.loadAsset("close", [close_img])
    game.loadAsset("button", [button_img])
    game.loadAsset("tools", [tools_img])
    game.loadAsset("bottle", [bottle_img])
    game.loadAsset("damage", [damage_img])
    game.loadAsset("storage-ui", [storage_ui_img])
    game.loadAsset("level-up", [level_up_img])
    game.loadAsset("recycler-ui", [recycler_ui_img])
    game.loadAsset("description-ui", [description_ui_img])

    // > Audio
    game.loadAsset("stone-hit", stone_hit_mp, "audio")
    game.loadAsset("stone-break-1", stone_break1_mp, "audio")
    game.loadAsset("stone-break-2", stone_break2_mp, "audio")
    game.loadAsset("stone-break-3", stone_break3_mp, "audio")
    game.loadAsset("step-1", step1_mp, "audio")
    game.loadAsset("step-2", step2_mp, "audio")
    game.loadAsset("step-3", step3_mp, "audio")
    game.loadAsset("storage", storage_mp, "audio")
    game.loadAsset("store", store_mp, "audio")
    game.loadAsset("craft", craft_mp, "audio")
    game.loadAsset("motor", motor_mp, "audio")
    game.loadAsset("motor-start", motor_start_mp, "audio")

}