import Phaser from "phaser";
import { SCENE_KEYS } from "./scene-keys";
import { BATTLE_ASSET_KEYS, BATTLE_BACKGROUND_ASSET_KEYS, HEALTH_BAR_ASSET_KEYS, MONSTER_ASSET_KEYS } from "../assets/asset-keys";

export class PreloadScene extends Phaser.Scene{
    constructor(){
        super({
            key: SCENE_KEYS.PRELOAD_SCENE,
        });
        console.log(SCENE_KEYS.PRELOAD_SCENE);
    }

    init(){
        console.log('init');
    }
    preload(){
        const monsterTamerAssetPath = 'assets/images/monster-tamer';
        const kenneysAssetsPath = 'assets/images/kenneys-assets';

        // Battle backgrounds
        this.load.image(
            BATTLE_BACKGROUND_ASSET_KEYS.FOREST, 
            `${monsterTamerAssetPath}/battle-backgrounds/forest-background.png`
        );

        // Battle assets
        this.load.image(
            BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND, 
            `${kenneysAssetsPath}/ui-space-expansion/custom-ui.png`
        );

        // Health bar assets
        this.load.image(
            HEALTH_BAR_ASSET_KEYS.RIGHT_CAP, 
            `${kenneysAssetsPath}/ui-space-expansion/barHorizontal_green_right.png`
        );
        this.load.image(
            HEALTH_BAR_ASSET_KEYS.MIDDLE, 
            `${kenneysAssetsPath}/ui-space-expansion/barHorizontal_green_mid.png`
        );
        this.load.image(
            HEALTH_BAR_ASSET_KEYS.LEFT_CAP, 
            `${kenneysAssetsPath}/ui-space-expansion/barHorizontal_green_left.png`
        );

        // Monster assets
        this.load.image(
            MONSTER_ASSET_KEYS.CARNODUSK, 
            `${monsterTamerAssetPath}/monsters/carnodusk.png`
        );
        this.load.image(
            MONSTER_ASSET_KEYS.IGUANIGNITE, 
            `${monsterTamerAssetPath}/monsters/iguanignite.png`
        );
    }
    create(){
        this.add.image(0, 0, BATTLE_BACKGROUND_ASSET_KEYS.FOREST).setOrigin(0);
    }
    update(){
        console.log('udpdate');
    }
}