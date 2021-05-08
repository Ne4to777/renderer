import {combineEpics} from 'redux-observable';
import {connect} from 'react-redux';

import * as epics from './epics';
import state from './state';
import view from './view';
import reducers from './reducers';
import {moduleToArray} from '../../utils/array';
import {createReducer} from '../../utils/redux';
import {mapStateToProps, mapDispatchToProps} from './mappers';

export * as actions from './actions';
export * from './types';

export {default as state} from './state';
export {default as view} from './view';
export {default as reducers} from './reducers';
export {default as meta} from './meta';

export const createReducerForState = createReducer(reducers);
export const reducer = createReducerForState(state);
export const epic = combineEpics(...moduleToArray(epics));

export const connectWithView = connect(mapStateToProps, mapDispatchToProps);

export default connectWithView(view);
