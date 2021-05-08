import type {
    NewCamera,
    NewObject,
    NewLight,
    NewScene,
    NewSphere,
    NewPlane,
    NewCube,
} from '..';
import codes from '../config/codes';

export const newCamera: NewCamera = ({
    type = codes.camera.default, x, y, z, aov,
}) => new Map([
    ['name', codes.item.camera],
    ['type', type],
    ['x', x],
    ['y', y],
    ['z', z],
    ['aov', aov],
]);

export const newObject: NewObject = ({
    type, x, y, z, size,
}) => new Map([
    ['name', codes.item.object],
    ['type', type],
    ['x', x],
    ['y', y],
    ['z', z],
    ['size', size],
]);

export const newSphere: NewSphere = ({
    x, y, z, radius,
}) => new Map([
    ['name', codes.item.object],
    ['type', codes.object.sphere],
    ['x', x],
    ['y', y],
    ['z', z],
    ['size', radius],
]);

export const newPlane: NewPlane = ({
    x, y, z, length,
}) => new Map([
    ['name', codes.item.object],
    ['type', codes.object.plane],
    ['x', x],
    ['y', y],
    ['z', z],
    ['size', length],
]);

export const newCube: NewCube = ({
    x, y, z, size,
}) => new Map([
    ['name', codes.item.object],
    ['type', codes.object.cube],
    ['x', x],
    ['y', y],
    ['z', z],
    ['size', size],
]);

export const newLight: NewLight = ({
    type = codes.light.default, x, y, z,
}) => new Map([
    ['name', codes.item.light],
    ['type', type],
    ['x', x],
    ['y', y],
    ['z', z],
]);

export const newScene: NewScene = ({
    type = codes.scene.default, cameras, objects, lights,
}) => new Map([
    ['name', [codes.item.scene]],
    ['type', [type]],
    ['cameras', cameras],
    ['objects', objects],
    ['lights', lights],
] as any);
