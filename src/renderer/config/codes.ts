import type {ConfigCodes} from '..';

export default ({
    item: {
        scene: 10,
        camera: 11,
        object: 12,
        light: 13,
    },
    scene: {
        default: 20,
    },
    camera: {
        default: 30,
    },
    object: {
        sphere: 40,
        plane: 41,
        cube: 42,
    },
    light: {
        default: 50,
    },
}) as ConfigCodes;
