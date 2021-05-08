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
    [`${actions.changeCameraAOV}`]: ({state, payload}: any) => {
        const scene = state.scenes[state.activeSceneId];
        scene.cameras[scene.params.activeCameraId].params.aov = payload;
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
