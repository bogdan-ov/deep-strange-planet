import { Vector2 } from "../../engine/utils/math";
import { Item } from "./Item";

export class RobotItem extends Item {
    constructor(position: Vector2) {
        super("item-robot", position, {
            scale: Vector2.all(.8)
        });
    }
}