import type {ConfigControls} from '..';

export default ({
    camera: {
        position: {
            x: {
                min: -10,
                max: 10,
                step: 0.01,
            },
            y: {
                min: -10,
                max: 10,
                step: 0.01,
            },
            z: {
                min: -100,
                max: 10,
                step: 0.01,
            },
        },
        angle: {
            alpha: {
                min: -100,
                max: 100,
                step: 0.1,
            },
            beta: {
                min: -100,
                max: 100,
                step: 0.1,
            },
            gamma: {
                min: -100,
                max: 100,
                step: 0.1,
            },
        },
        params: {
            aov: {
                min: 0,
                max: 180,
                step: 0.01,
            },
        },
    },
    object: {
        position: {
            x: {
                min: -10,
                max: 10,
                step: 0.01,
            },
            y: {
                min: -10,
                max: 10,
                step: 0.01,
            },
            z: {
                min: -10,
                max: 10,
                step: 0.01,
            },
        },
        size: {
            min: 0,
            max: 10,
            step: 0.1,
        },
    },
    light: {
        position: {
            x: {
                min: -10,
                max: 10,
                step: 0.1,
            },
            y: {
                min: -10,
                max: 10,
                step: 0.1,
            },
            z: {
                min: -10,
                max: 10,
                step: 0.1,
            },
        },
    },
}) as ConfigControls;
