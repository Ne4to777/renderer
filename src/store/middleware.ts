import immutableStateMiddleware from 'redux-immutable-state-invariant';
import {createEpicMiddleware} from 'redux-observable';

export const epicMiddleware = createEpicMiddleware();

export const middleware = [
    immutableStateMiddleware(),
    epicMiddleware,
];
