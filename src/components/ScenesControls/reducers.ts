/* eslint-disable no-param-reassign */
import * as actions from './actions';

import {Reducers} from '.';

export default {
    [`${actions.updateState}`]: ({payload}: any) => ({...payload}),
    [`${actions.changeActiveSceneId}`]: ({state, payload}: any) => {
        state.activeSceneId = payload;
    },
    [`${actions.changeActiveCameraId}`]: ({state, payload}: any) => {
        state.scenes[state.activeSceneId].params.activeCameraId = payload;
    },
    [`${actions.changeCameraPositionX}`]: ({state, payload}: any) => {
        const scene = state.scenes[state.activeSceneId];
        scene.cameras[scene.params.activeCameraId].position.x = payload;
    },
    [`${actions.changeCameraPositionY}`]: ({state, payload}: any) => {
        const scene = state.scenes[state.activeSceneId];
        scene.cameras[scene.params.activeCameraId].position.y = payload;
    },
    [`${actions.changeCameraPositionZ}`]: ({state, payload}: any) => {
        const scene = state.scenes[state.activeSceneId];
        scene.cameras[scene.params.activeCameraId].position.z = payload;
    },
    [`${actions.changeCameraAngleAlpha}`]: ({state, payload}: any) => {
        const scene = state.scenes[state.activeSceneId];
        scene.cameras[scene.params.activeCameraId].angle.alpha = payload;
    },
    [`${actions.changeCameraAngleBeta}`]: ({state, payload}: any) => {
        const scene = state.scenes[state.activeSceneId];
        scene.cameras[scene.params.activeCameraId].angle.beta = payload;
    },
    [`${actions.changeCameraAOV}`]: ({state, payload}: any) => {
        const scene = state.scenes[state.activeSceneId];
        scene.cameras[scene.params.activeCameraId].params.aov = payload;
    },
    [`${actions.stepCameraPosition}`]: ({state, payload}: any) => {
        const scene = state.scenes[state.activeSceneId];
        const {position} = scene.cameras[scene.params.activeCameraId];
        position.x += payload.x ?? 0;
        position.y += payload.y ?? 0;
        position.z += payload.z ?? 0;
    },
    [`${actions.stepCameraAngle}`]: ({state, payload}: any) => {
        const scene = state.scenes[state.activeSceneId];
        const {angle} = scene.cameras[scene.params.activeCameraId];
        angle.alpha += payload.alpha ?? 0;
        angle.beta += payload.beta ?? 0;
        angle.gamma += payload.gamma ?? 0;
    },
    [`${actions.changeObjectPositionX}`]: ({state, payload}: any) => {
        const scene = state.scenes[state.activeSceneId];
        scene.objects[payload.id].position.x = payload.value;
    },
    [`${actions.changeObjectPositionY}`]: ({state, payload}: any) => {
        const scene = state.scenes[state.activeSceneId];
        scene.objects[payload.id].position.y = payload.value;
    },
    [`${actions.changeObjectPositionZ}`]: ({state, payload}: any) => {
        const scene = state.scenes[state.activeSceneId];
        scene.objects[payload.id].position.z = payload.value;
    },
    [`${actions.changeLightPositionX}`]: ({state, payload}: any) => {
        const scene = state.scenes[state.activeSceneId];
        scene.lights[payload.id].position.x = payload.value;
    },
    [`${actions.changeLightPositionY}`]: ({state, payload}: any) => {
        const scene = state.scenes[state.activeSceneId];
        scene.lights[payload.id].position.y = payload.value;
    },
    [`${actions.changeLightPositionZ}`]: ({state, payload}: any) => {
        const scene = state.scenes[state.activeSceneId];
        scene.lights[payload.id].position.z = payload.value;
    },
} as Reducers;
