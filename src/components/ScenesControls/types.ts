import type {PropsFromActions, ReducersFromActions} from '../../utils/types/object';

import {actions} from '.';

export interface State {
    scenesDefault: any;
    scenes: any;
    activeSceneIdDefault: any;
    activeSceneId: any;
}

export type StateActionParams = Partial<State>

export type Props = PropsFromActions<State, typeof actions>

export type Reducers = ReducersFromActions<State, typeof actions>

export type View = React.FunctionComponent<Props>
