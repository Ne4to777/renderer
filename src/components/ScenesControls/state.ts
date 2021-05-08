import {config} from '../../renderer';

import {State} from '.';

const DEFAULTS: Partial<State> = {
    scenes: config.scenes,
    activeSceneId: config.project.activeSceneId,
};

export default {
    scenesDefault: DEFAULTS.scenes,
    scenes: DEFAULTS.scenes,
    activeSceneIdDefault: DEFAULTS.activeSceneId,
    activeSceneId: DEFAULTS.activeSceneId,
} as State;
