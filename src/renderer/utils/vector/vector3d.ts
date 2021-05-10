import type {
    V3D,
    Add3D,
    Sub3D,
    Mult3D,
    Div3D,
    Dot3D,
    Cross3D,
    Length3D,
    MultScalar3D,
    DivScalar3D,
    Normalize3D,
    Sign3D,
    Step3D,
    Abs3D,
    Max3D,
    Min3D,
    Restore3D,
    Invert3D,
    Negate3D,
    MultMatrix3D,
} from '../..';
import {ceilToPrescision, floorToPrescision} from '../../../utils/math';

export const v3D: V3D = function v3D(x, y, z) {
    return [x, y, z];
};
export const add3D: Add3D = function add3D(a, b) {
    return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
};
export const sub3D: Sub3D = function sub3D(a, b) {
    return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
};
export const mult3D: Mult3D = function mult3D(a, b) {
    return [a[0] * b[0], a[1] * b[1], a[2] * b[2]];
};
export const div3D: Div3D = function div3D(a, b) {
    return [
        a[0] / b[0],
        a[1] / b[1],
        a[2] / b[2],
    ];
};
export const abs3D: Abs3D = function abs3D(a) {
    return [Math.abs(a[0]), Math.abs(a[1]), Math.abs(a[2])];
};
export const max3D: Max3D = function max3D(a) {
    return Math.max(a[0], Math.max(a[1], a[2]));
};
export const min3D: Min3D = function min3D(a) {
    return Math.min(a[0], Math.min(a[1], a[2]));
};
export const length3D: Length3D = function length3D(a) {
    return Math.sqrt(a[0] ** 2 + a[1] ** 2 + a[2] ** 2);
};
export const multScalar3D: MultScalar3D = function multScalar3D(a, value) {
    return [a[0] * value, a[1] * value, a[2] * value];
};
export const divScalar3D: DivScalar3D = function divScalar3D(a, value) {
    return [
        a[0] / value,
        a[1] / value,
        a[2] / value,
    ];
};
export const normalize3D: Normalize3D = function normalize3D(a) {
    const length = Math.sqrt(a[0] ** 2 + a[1] ** 2 + a[2] ** 2);
    return [
        ceilToPrescision(a[0] / length, 6),
        ceilToPrescision(a[1] / length, 6),
        ceilToPrescision(a[2] / length, 6),
    ];
};
export const invert3D: Invert3D = function invert3D(a) {
    const MAX_SAFE_INT = 9007199254740991;
    return [
        a[0] === 0 ? MAX_SAFE_INT : floorToPrescision(1 / a[0], 6),
        a[1] === 0 ? MAX_SAFE_INT : floorToPrescision(1 / a[1], 6),
        a[2] === 0 ? MAX_SAFE_INT : floorToPrescision(1 / a[2], 6),
    ];
};
export const negate3D: Negate3D = function negate3D(a) {
    return [-a[0], -a[1], -a[2]];
};
export const dot3D: Dot3D = function dot3D(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
};
export const cross3D: Cross3D = function cross3D(a, b) {
    return v3D(a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]);
};
export const restore3D: Restore3D = function restore3D(dV, length, offsetV) {
    return add3D(
        offsetV,
        multScalar3D(dV, length)
    );
};
export const sign3D: Sign3D = function sign3D(a) {
    return v3D(a[0] >= 0 ? 1 : -1, a[1] >= 0 ? 1 : -1, a[2] >= 0 ? 1 : -1);
};
export const step3D: Step3D = function step3D(a, b) {
    return v3D(b[0] < a[0] ? 0 : 1, b[1] < a[1] ? 0 : 1, b[2] < a[2] ? 0 : 1);
};
export const multMatrix3D: MultMatrix3D = function multMatrix3D(a, b, c, d) {
    return v3D(
        a[0] * b[0] + a[1] * c[0] + a[2] * d[0],
        a[0] * b[1] + a[1] * c[1] + a[2] * d[1],
        a[0] * b[2] + a[1] * c[2] + a[2] * d[2]
    );
};
