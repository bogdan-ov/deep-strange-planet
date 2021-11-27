import { Color } from "../../config";
import { Game } from "../../engine";
import { Vector2 } from "../../engine/utils/math";
import { RawCidium } from "../raws/RawCidium";
import { Ore } from "./Ore";

export class Cidium extends Ore {
    constructor(position: Vector2) {
        super("cidium", position);

        // this.hp = 20;
        this.particlesColors = [Color.BLACK, Color.YELLOW];
    }

    onBreak() {
        super.onBreak();

        this.dropRawOre(RawCidium);
    }
}