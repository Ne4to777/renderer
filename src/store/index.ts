import {
    combineReducers,
    configureStore,
} from '@reduxjs/toolkit';
import {combineEpics} from 'redux-observable';

import reducer from './reducers';
import {
    middleware,
    epicMiddleware,
} from './middleware';
import epics from './epics';

export default configureStore({
    reducer: combineReducers(reducer),
    middleware,
});

epicMiddleware.run(combineEpics(...epics));
