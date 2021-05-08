import type {ComputeWithAnimation} from '..';
import {config} from '..';

const {canvas: {width, height}} = config;

export const computeWithAnimation: ComputeWithAnimation = function (
    frameNumber,
    framesTotal
) {
    const k = frameNumber / framesTotal;
    const x = k * width;
    const y = k * height;
    if (
        this.thread.x > x
        && this.thread.x < x + 10
        && this.thread.y > y
        && this.thread.y < y + 10
    ) {
        this.color(0, 0, 0);
    } else {
        this.color(0, 1, 1);
    }
};
