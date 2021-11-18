import { Config } from "../../config";
import { Game, ISpriteProps, Sprite } from "../../engine";
import { UI, Button } from "../../engine/components/UI";
import { Renderer } from "../../engine/Renderer";
import { asImage, assetIsValid, lerp, Vector2 } from "../../engine/utils/math";
import { GearNames } from "../../names";
import { Player } from "../entities/Player";

export type GearType = 
    "storage" | "recycler" | "upgrader";
export type Level = 1 | 2 | 3;

export class Gear extends Sprite {
    ui: UI
    interactButton: Button

    gearType: GearType;
    level: Level
    playerIsNear: boolean
    allowInteract: boolean
    interactText: string
    closeText: string
    
    constructor(type: GearType, level: Level, props?: ISpriteProps) {
        super(type, [type, level].join("-"), props);

        this.width = 
        this.height = 2;

        this.ui = new UI();
        this.interactButton = new Button();
        
        this.gearType = type;
        this.level = level;
        this.playerIsNear = false;
        this.allowInteract = true;
        this.layer = "bg";
        this.interactText = "";
        this.closeText = "закрыть";
    }

    init(game: Game) {
        super.init(game);

        this.ui.init(game);
        this.ui.enabled = false;

        game.gamepad.onKeyDown("enter", ()=> {
            if (!this.playerIsNear) return;

            const player = game.getChildById<Player>("player");
            if (player)
                this.onInteract(game, player);
        });
    }

    update(game: Game) {
        super.update(game);

        const player = game.getChildById<Player>("player");
        if (!player) return;
        
        player.allowMove = !this.ui.enabled;
        this.checkInteract(player);
    }

    render(game: Game, renderer: Renderer) {
        super.render(game, renderer);

        this.renderUI(game, renderer);

        if (this.playerIsNear && this.allowInteract) {
            const outlineAsset = game.getAssetByName([this.gearType, this.level, "outline"].join("-"));

            // Draw gear outline
            renderer.drawSprite({
                texture: asImage(outlineAsset),
                width: 2, height: 2,
                position: this.position,
                layer: this.layer,
                flip: this.flip
            });

            renderer.drawText({
                text: this.interactText,
                font: "22px Pixel",
                position: this.position.add(new Vector2(0, -70))
            });
                
        }
    }
    renderUI(game: Game, renderer: Renderer) {
        this.ui.render();

        if (this.ui.enabled) {
            const size = Config.SPRITE_SIZE;
            const windowCenter = new Vector2(innerWidth / 2, innerHeight / 2).apply(Math.floor);

            renderer.drawRect({
                color: "rgba(0, 0, 0, .6)",
                width: innerWidth / Config.SPRITE_SIZE,
                height: innerHeight / Config.SPRITE_SIZE,
                position: new Vector2(innerWidth / 2, innerHeight / 2),
                layer: "ui"
            });

            // Container
            renderer.drawSprite({
                texture: asImage(game.getAssetByName([this.gearType, "ui"].join("-"))),
                position: new Vector2(0, -size).add(windowCenter),
                width: 7,
                height: 5,
                layer: "ui"
            });
            // Preview
            renderer.drawSprite({
                texture: asImage(game.getAssetByName([this.gearType, this.level].join("-"))),
                position: new Vector2(-size * 2, -size - 15).add(windowCenter),
                width: 2,
                height: 2,
                layer: "ui"
            });
            // Title
            renderer.drawText({
                text: `${ GearNames[this.name].name } ${ this.level }ур.`,
                position: new Vector2(-size * 1.2, -size - 15).add(windowCenter),
                centered: false,
                layer: "ui"
            });
            // Close
            renderer.drawText({
                text: `[OK] - ${ this.closeText }`,
                position: new Vector2(-size * 3 + 20, -size * 2 - 40).add(windowCenter),
                layer: "ui",
                centered: false
            })

        }
        
        // Draw interact button
        if (this.playerIsNear && !this.ui.enabled) {
            this.interactButton.position = this.position.add(new Vector2(0, -110));
            this.interactButton.render(game);
        }
    }

    checkInteract(player: Player | undefined) {
        if (!player) return;

        this.playerIsNear = player.position.distance(this.position) < Config.GEAR_INTERACT_DISTANCE;
    }

    onInteract(game: Game, player: Player) {
        this.interactButton.click();
    }
    
}