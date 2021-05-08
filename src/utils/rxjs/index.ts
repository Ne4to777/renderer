import {
    withLatestFrom,
    map,
} from 'rxjs/operators';
import {ofType} from 'redux-observable';

import type {Pipe, StepEpicFactory} from '../types/functions';
import {methodApply} from '../object';
import {drawImage} from '../../renderer';

export const pipe$: Pipe = fs => methodApply('pipe')(...fs);

export const stepEpicFactory: StepEpicFactory = (
    name,
    prop,
    step,
    action
) => (action$, state$) => action$
    .pipe(
        ofType(name),
        withLatestFrom(state$),
        map(([, {Controls, Canvas}]) => {
            const data = {
                ...Controls,
                [prop]: Controls[prop] + step,
            };

            drawImage(Canvas.canvasRefGetter, [0, 0], data);

            return data;
        }),
        map(action)
    );
