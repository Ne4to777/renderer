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
export const changeObjectPositionX = createAction<any>('changeObjectPositionX');
export const changeObjectPositionY = createAction<any>('changeObjectPositionY');
export const changeObjectPositionZ = createAction<any>('changeObjectPositionZ');
export const changeLightPositionX = createAction<any>('changeLightPositionX');
export const changeLightPositionY = createAction<any>('changeLightPositionY');
export const changeLightPositionZ = createAction<any>('changeLightPositionZ');
export const changeCameraAOV = createAction<any>('changeCameraAOV');
export const stepForward = createAction<void>('stepForward');
export const stepBackward = createAction<void>('stepBackward');
export const stepLeft = createAction<void>('stepLeft');
export const stepRight = createAction<void>('stepRight');
export const stepUp = createAction<void>('stepUp');
export const stepDown = createAction<void>('stepDown');
