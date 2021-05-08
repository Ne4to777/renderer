import {
    V2D,
    Add2D,
    Dot2D,
    Length2D,
    MultScalar2D,
    DivScalar2D,
    Normalize2D,
} from '../..';

export const v2D: V2D = function v2D(x, y) {
    return [x, y];
};
export const add2D: Add2D = function add2D(a, b) {
    return [a[0] + b[0], a[1] + b[1]];
};
export const length2D: Length2D = function length2D(a) {
    return Math.sqrt(a[0] ** 2 + a[1] ** 2);
};
export const multScalar2D: MultScalar2D = function multScalar2D(a, value) {
    return [a[0] * value, a[1] * value];
};
export const divScalar2D: DivScalar2D = function divScalar2D(a, value) {
    return [a[0] / value, a[1] / value];
};
export const dot2D: Dot2D = function dot2D(a, b) {
    return a[0] * b[0] + a[1] * b[1];
};
export const normalize2D: Normalize2D = function normalize2D(a) {
    return divScalar2D(a, length2D(a));
};
