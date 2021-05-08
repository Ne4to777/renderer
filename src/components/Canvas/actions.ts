import {createAction} from '@reduxjs/toolkit';

import type {State, UpdateMouse, CanvasRefGetter} from '.';

export const updateState = createAction<Partial<State>>('updateState');
export const updateCanvasRefGetter = createAction<CanvasRefGetter>('updateCanvasRefGetter');
export const initCanvasRefGetter = createAction<CanvasRefGetter>('initCanvasRefGetter');
export const updateMouse = createAction<UpdateMouse>('updateMouse');
