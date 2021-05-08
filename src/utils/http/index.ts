import axios from 'axios';

import type {AnyToAny, AnyToAny2} from '../types/functions';
import {climb} from '../object';
import {pipe} from '../combinators';

const HTTP_METHODS = ['get', 'post', 'delete'];

const throwError: AnyToAny = x => {
    throw new Error(x);
};

const getHttpMethod: AnyToAny2 = x => (url, params = {}) => ((axios as any)[x])(url, params)
    .then(climb(['data', 'data']))
    .catch(pipe([climb(['response', 'data', 'error']), throwError]));

const reducer: AnyToAny = (acc, x) => {
    acc[x] = getHttpMethod(x);
    return acc;
};

export default HTTP_METHODS.reduce(reducer, {});
