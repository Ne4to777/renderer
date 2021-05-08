import {connect as connectRedux} from 'react-redux';
import {Action} from 'redux-actions';
import immer from 'immer';

import type {AnyToAny2, AnyToAny} from '../types/functions';
import {B} from '../combinators';
import {mapObject, climb} from '../object';

export const createReducer = (cases: Record<string, AnyToAny>) => (init: any): any => immer(
    (draft, {type, payload}) => cases[type]?.({state: draft, payload}),
    init
);

// export const createReducer = (cases: Record<string, AnyToAny>) => <S>(init: S) => (
//     state = init,
//     {type, payload}: Action<any>
// ): any => ({
//     ...state,
//     ...cases[type]?.({state, payload}),
// });

export const mapDispatchToProps: AnyToAny2 = o => dispatch => mapObject(B(dispatch))(o);

export const connect: AnyToAny = ({statePath, actions, view}) => connectRedux(
    climb(statePath),
    mapDispatchToProps(actions)
)(view);
