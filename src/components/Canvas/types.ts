import type {RefObject, FunctionComponent} from 'react';

import type {PropsFromActions, ReducersFromActions} from '../../utils/types/object';

import {actions} from '.';

export type CanvasRefGetter = ()=> RefObject<HTMLCanvasElement> | null
export type UpdateMouse = {
    mouseX: number,
    mouseY: number,
}

export type State = {
    canvasRefGetter: CanvasRefGetter,
    mouseX: number,
    mouseY: number,
}

export type Props = PropsFromActions<State, typeof actions>

export type Reducers = ReducersFromActions<State, typeof actions>

export type View = FunctionComponent<Props>
