import { Color } from "../../config";
import { Game } from "../../engine";
import { Vector2 } from "../../engine/utils/math";
import { Player } from "../entities/Player";
import { RawRady } from "../raws/RawRady";
import { Ore } from "./Ore";

export class Rady extends Ore {
    constructor(position: Vector2) {
        super("rady", position);

        this.particlesColors = [Color.GREY, Color.GREEN];
    }

    hit(game: Game, damage: number, player: Player) {
        super.hit(game, damage, player);

        if (!player.hasBottle)
            player.hit(game, 1);
    }
    onBreak(game: Game) {
        super.onBreak(game);

        this.dropRawOre(game, RawRady);
    }
}