import Phaser from 'phaser';
import { PreloadScene } from './scenes/preload-scene';
import { SCENE_KEYS } from './scenes/scene-keys';
import { SERVICE_KEYS, ServiceLocator} from './service-locator';
import { ProgresionManager } from './progresion-manager';
import { SoundManager } from './sound-manager';

const game = new Phaser.Game({
    type: Phaser.CANVAS,
    pixelArt: false,
    scale: {
        parent: 'game-container',
        width: 1024,
        height: 576,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    backgroundColor: '#000000',
});

let serviceLocator = new ServiceLocator();
serviceLocator.setService(SERVICE_KEYS.SOUND_MANAGER, new SoundManager())
    .initialize();
serviceLocator.setService(SERVICE_KEYS.PROGRESION_MANAGER, new ProgresionManager())
    .initialize();

game.scene.add(SCENE_KEYS.PRELOAD_SCENE, PreloadScene);

game.scene.start(SCENE_KEYS.PRELOAD_SCENE);
