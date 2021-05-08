import type {AnyToAny} from '../types/functions';

export const newPromise: AnyToAny = f => new Promise((resolve, reject) => f({resolve, reject}));
