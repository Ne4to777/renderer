import type {AnyToAny} from '../types/functions';

export const log: AnyToAny = x => (console.log(x), x);
