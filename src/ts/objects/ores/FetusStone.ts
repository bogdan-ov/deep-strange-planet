import { Color, Config } from "../../config";
import { SpawnParticles } from "../../engine/components/Particles";
import { asImage, chance, clamp, random, randomInt, Vector2 } from "../../engine/utils/math";
import { Player } from "../entities/Player";
import { HealingFetus } from "../food/HealingFetus";
import { Ore } from "./Ore";

export class FetusStone extends Ore {
    player!: Player
    
    vineLength: number | null
    maxVineLength: number
    allowGrow: boolean
    playerIsNear: boolean
    grabbedCount: number | null
    canGrab: boolean
    
    constructor(position: Vector2, data?: { length?: number, maxLength?: number, grabbedCount?: number }) {
        super("fetus-stone", position);
    
        this.randomRotate = false;

        this.playerIsNear = false;
        this.vineLength = data ? (data?.length || null) : null;
        this.maxVineLength = data ? (data?.maxLength || 1) : 1;
        this.allowGrow = true;
        this.grabbedCount = data ? (data?.grabbedCount || null) : null;
        this.canGrab = false;

        this.breakAudioNames = ["plant-break"];
        this.hitAudioName = "plant-hit";
    }

    init() {
        super.init();

        this.player = this.game.getChildById("player")!;

        if (this.vineLength === null) {
            this.maxVineLength = randomInt(Config.VINE_MIN_LENGTH, Config.VINE_MAX_LENGTH);
            this.vineLength = clamp(randomInt(1, 4), 0, this.maxVineLength);
            this.saveData();
        }
        if (this.grabbedCount == null) {
            this.grabbedCount = clamp(randomInt(-2, 4), 0, 4);
            this.saveData()
        }
            
        this.checkEmptySpace();
        if (!this.allowGrow)
            this.vineLength = 0;

        // Trigger
        this.game.gamepad.onKeyDown(this.id, "enter", ()=> {
            if (!this.canGrab || (this.grabbedCount || 0) >= (this.vineLength || 0)) return;
            
            this.grab();
        })
    }
    update() {
        super.update();

        this.tryGrab();

        if (!this.allowGrow) return;
        if (this.game.tick(Config.VINE_GROW_TICK))
            if (chance(Config.VINE_GROW_CHANCE))
                this.grow();
        if (this.game.tick(Config.VINE_GROW_TICK * 2))
            if (chance(Config.VINE_GROW_CHANCE * .3) && this.grabbedCount != null) {
                this.grabbedCount --;
                this.grabbedCount = clamp(this.grabbedCount, 0, this.vineLength || 0)
            }
    }

    render() {
        super.render();
        
        if (this.allowGrow)
            this.renderVine();
    }

    tryGrab() {

        const vineHeight = (this.vineLength || 0) * Config.SPRITE_SIZE;
        const collides = (this.vineLength || 0) > 0 && (this.grabbedCount || 0) < (this.vineLength || 0) && this.game.physics.collideWithRect({
            id: this.player.id,
            position: this.player.position,
            width: this.player.collider.width,
            height: this.player.collider.height,
        }, {
            id: this.id,
            position: this.position.add(new Vector2(0, vineHeight / 2)),
            width: this.collider.width / 2,
            height: this.collider.height + vineHeight,
        }).any;
        
        this.canGrab = collides;
        if (collides) {
            this.player.expectedActionType = { name: "grab", priority: 2 };
        }
        
    }
    grab() {
        if (this.grabbedCount == null || this.grabbedCount >= (this.vineLength || 0)) return;
        
        this.grabbedCount ++;
        this.grabbedCount = clamp(this.grabbedCount, 0, this.vineLength || 0)

        this.dropItem(HealingFetus, 100, new Vector2(0, Config.SPRITE_SIZE * this.grabbedCount));
    }

    onBreak() {
        super.onBreak();
        if (!this.vineLength) return;
        const size = Config.SPRITE_SIZE;

        SpawnParticles(this.game, this.position, {
            count: 4,
            colors: [Color.ORANGE],
            velocity: ()=> new Vector2(random(1, 1.5)),
            gravity: .01,
            opacity: 0,
            downOpacity: -.01,
            downSize: .008,
            rotationVelocity: ()=> random(-.01, .01),
            box: ()=> new Vector2(random(-size*.4, size*.4), random(0, size * (this.vineLength || 1)))
        });
    }

    renderVine() {
        if (!this.vineLength) return;
        const size = Config.SPRITE_SIZE;
        
        for (let i = 0; i < this.vineLength; i ++) {
            let frame = 0

            if (i == 0)
                frame = 0;
            if (i > 0)
                frame = 1;
            if (i == this.vineLength - 1)
                frame = 2;
            
            const pos = this.position.add(new Vector2(0, size + i * size));
                
            const t = 1 - this.game.camera.position.y / 200;
            const d = (this.game.camera.position.distance(pos) - 200);
            const darkenFactor = (d > 96 ? 1 : d / 96) + (t > 0 ? t : 0);
            
            if (darkenFactor < 1 || !Config.ALLOW_DARK)
                this.game.renderer.drawSprite({
                    texture: asImage(this.game.getAssetByName(`fetus-vine`)),
                    position: pos.add(new Vector2(Math.sin(this.game.clock.elapsed / 40 + this.position.x / Config.SPRITE_SIZE) * i * 1.5)),
                    frame: new Vector2(
                        +(i < (this.grabbedCount || 0)),
                        frame
                    ),
                    flip: { x: i % 2 == 0 || i % 3 == 0, y: false },
                    opacity: Config.ALLOW_DARK ? 1 - darkenFactor : 1
                });
        }
        
        // Spawn particles
        if (this.game.tick(40) || this.game.tick(120))
            SpawnParticles(this.game, this.position, {
                count: 1,
                colors: [Color.ORANGE],
                velocity: ()=> new Vector2(random(.2, .5)),
                gravity: .01,
                opacity: 0,
                downOpacity: -.01,
                downSize: .008,
                rotationVelocity: ()=> random(-.01, .01),
                box: ()=> new Vector2(random(-size*.4, size*.4), random(0, size * (this.vineLength || 1)))
            });
        
    }
    grow() {
        if (this.vineLength === null || !this.allowGrow) return;

        let needLength = this.vineLength;
        let height = 0;
        
        if (needLength + 1 < this.maxVineLength)
            needLength ++;

        for (let i = 1; i < 8; i ++) {
            height ++;
            if (this.checkBlockIn(new Vector2(0, i)))
                break;
        }

        if (this.checkBlockIn(new Vector2(0, needLength)))
            needLength --;

        this.vineLength = clamp(needLength, 0, height);

        this.saveData();
    }

    saveData() {
        this.game.generator.modifyOre(this.inChunkId, {
            length: this.vineLength,
            grabbedCount: this.grabbedCount,
            maxLength: this.maxVineLength
        });
    }
    checkEmptySpace() {
        this.allowGrow = !this.checkBlockIn(new Vector2(0, 1));
    }
}