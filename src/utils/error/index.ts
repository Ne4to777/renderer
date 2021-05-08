import type {AnyToAny} from '../types/functions';

export const throwError: AnyToAny = x => {
    throw new Error(x);
};
