import type {CanvasRefGetter, Reducers} from './types';
import * as actions from './actions';

export default {
    [`${actions.updateState}`]: ({payload}: any) => ({...payload}),
    [`${actions.updateCanvasRefGetter}`]: ({payload}: {payload: CanvasRefGetter}) => ({
        canvasRefGetter: payload,
    }),
} as Reducers;
