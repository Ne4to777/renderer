import {
    withLatestFrom,
    map,
} from 'rxjs/operators';
import {ofType} from 'redux-observable';

import type {Pipe, StepEpicFactory} from '../types/functions';
import {methodApply} from '../object';
import {drawImage} from '../../renderer';

export const pipe$: Pipe = fs => methodApply('pipe')(...fs);
