import type {
    GetMousePoint,
    DrawImage,
    // Animate,
    GetCachedKernelByScene,
    SceneToKernelData,
    GetCachedCanvasRefGetter,
    CameraToKernelData,
    ObjectToKernelData,
    LightToKernelData,
} from '..';
import {createKernel} from '..';
import {reduceObjectToArray} from '../../utils/object';
import config from '../config';
import {
    getCameraPositionX,
    getCameraPositionY,
    getCameraPositionZ,
    getObjectPositionX,
    getObjectPositionY,
    getObjectPositionZ,
    getLightPositionX,
    getLightPositionY,
    getLightPositionZ,
    getSceneActiveCamera,
    getSceneActiveCameraId,
    getSceneId,
    getSceneLights,
    getSceneObjects,
    getCameraAOV,
    getObjectSize,
    getObjectType,
} from './getters';

const {image: {HEIGHT}} = config;

export const getMousePoint: GetMousePoint = e => {
    const {target, clientX, clientY} = e;
    const x = clientX - (target as HTMLCanvasElement).offsetLeft;
    const y = HEIGHT - clientY + (target as HTMLCanvasElement).offsetTop;
    return [x, y];
};

export const cameraToKernelData: CameraToKernelData = (id, camera) => [
    getCameraPositionX(camera),
    getCameraPositionY(camera),
    getCameraPositionZ(camera),
    getCameraAOV(camera),
];
export const objectToKernelData: ObjectToKernelData = (id, object) => [
    config.codes.object[getObjectType(object)],
    getObjectPositionX(object),
    getObjectPositionY(object),
    getObjectPositionZ(object),
    getObjectSize(object) ?? 0,
];
export const lightToKernelData: LightToKernelData = (id, light) => [
    getLightPositionX(light),
    getLightPositionY(light),
    getLightPositionZ(light),
];

export const sceneToKernelData: SceneToKernelData = scene => {
    const camera = getSceneActiveCamera(scene);
    const objects = getSceneObjects(scene);
    const lights = getSceneLights(scene);
    return [
        cameraToKernelData(getSceneActiveCameraId(scene), camera),
        reduceObjectToArray(objectToKernelData)(objects),
        reduceObjectToArray(lightToKernelData)(lights),
    ];
};

export const getCachedKernelByScene: GetCachedKernelByScene = kernelsMap => scene => {
    const sceneId = getSceneId(scene);
    // eslint-disable-next-line no-return-assign
    return kernelsMap[sceneId]
    ?? (
        // eslint-disable-next-line no-param-reassign
        kernelsMap[sceneId] = createKernel(scene) || kernelsMap[sceneId]
    );
};

const getKernelByScene = getCachedKernelByScene({});
const getCachedCanvasRefGetter = (cachedCanvasRefGetter => canvasRefGetter => {
    // eslint-disable-next-line no-param-reassign
    if (canvasRefGetter) cachedCanvasRefGetter = canvasRefGetter;
    return cachedCanvasRefGetter;
}) as GetCachedCanvasRefGetter;

const getCanvasRefGetter = getCachedCanvasRefGetter(() => null);

export const drawImage: DrawImage = ({
    canvasRefGetter,
    mouse = [0, 0],
    scene,
}) => {
    // console.log(mouse, ...sceneToKernelData(scene));
    const kernel = getKernelByScene(scene);
    kernel(mouse, ...sceneToKernelData(scene));
    getCanvasRefGetter(canvasRefGetter)()
        ?.current
        ?.getContext('2d')
        ?.drawImage(kernel.canvas, 0, 0);
};

// export const animate: Animate = ({
//     args,
//     from = 0,
//     to = 100,
// }) => {
//     let frameNumber = from;
//     const finish = from > to ? from : to;
//     requestAnimationFrame(function next() {
//         const kernel = createKernel();

//         kernel(frameNumber, finish, ...args);
//         if (frameNumber >= finish) return;
//         frameNumber += 1;
//         requestAnimationFrame(next);
//     });
// };
