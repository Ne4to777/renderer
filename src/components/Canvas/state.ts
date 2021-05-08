import {State} from '.';

const DEFAULTS: Partial<State> = {
    canvasRefGetter: () => null,
    mouseX: 0,
    mouseY: 0,
};

export default {
    canvasRefGetter: DEFAULTS.canvasRefGetter,
    mouseX: DEFAULTS.mouseX,
    mouseY: DEFAULTS.mouseY,
} as State;
