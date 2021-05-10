import {createAction} from '@reduxjs/toolkit';

import {StateActionParams} from '.';

export const doNothing = createAction<StateActionParams>('doNothing');
export const updateState = createAction<StateActionParams>('updateState');
export const draw = createAction<StateActionParams>('draw');
export const drawScene = createAction<StateActionParams>('drawScene');
export const changeActiveSceneId = createAction<any>('changeActiveSceneId');
export const changeActiveCameraId = createAction<any>('changeActiveCameraId');
export const changeCameraPositionX = createAction<any>('changeCameraPositionX');
export const changeCameraPositionY = createAction<any>('changeCameraPositionY');
export const changeCameraPositionZ = createAction<any>('changeCameraPositionZ');
export const changeCameraAngleAlpha = createAction<any>('changeCameraAngleAlpha');
export const changeCameraAngleBeta = createAction<any>('changeCameraAngleBeta');
export const changeObjectPositionX = createAction<any>('changeObjectPositionX');
export const changeObjectPositionY = createAction<any>('changeObjectPositionY');
export const changeObjectPositionZ = createAction<any>('changeObjectPositionZ');
export const changeLightPositionX = createAction<any>('changeLightPositionX');
export const changeLightPositionY = createAction<any>('changeLightPositionY');
export const changeLightPositionZ = createAction<any>('changeLightPositionZ');
export const changeCameraAOV = createAction<any>('changeCameraAOV');
export const stepCameraPosition = createAction<any>('stepCameraPosition');
export const stepCameraAngle = createAction<any>('stepCameraAngle');
