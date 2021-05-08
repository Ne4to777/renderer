import {GPU} from 'gpu.js';

import type {CreateKernel} from './utils/types';
import {moduleToArray} from '../utils/array';
import * as vector from './utils/vector';
import * as intersection from './utils/intersection';
import * as ray from './utils/ray';
import * as math from '../utils/math';
import {getSceneLights, getSceneObjects} from './utils';
import {getObjectLength} from '../utils/object';
import config from './config';
import {
    compute,
} from './computations';

const {
    image: {
        WIDTH, HEIGHT,
    },
    gpu: {
        mode,
    },
} = config;

const gpu = new GPU({mode});

const DEFAULT_PARAMS = {
    output: [WIDTH, HEIGHT],
    graphical: true,
    constants: {
        ...config.image,
        PLANE_CODE: config.codes.object.plane,
        SPHERE_CODE: config.codes.object.sphere,
        CUBE_CODE: config.codes.object.cube,
    },
    functions: [
        ...moduleToArray(math),
        ...moduleToArray(vector),
        ...moduleToArray(intersection),
        ...moduleToArray(ray),
    ],
};

export const createKernel: CreateKernel = scene => {
    const params = {
        ...DEFAULT_PARAMS,
        constants: {
            ...DEFAULT_PARAMS.constants,
            OBJECTS_COUNT: getObjectLength(getSceneObjects(scene)),
            LIGHTS_COUNT: getObjectLength(getSceneLights(scene)),
        },
    };

    return gpu.createKernel(compute, params);
};
