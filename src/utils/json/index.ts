import type {AnyToAny} from '../types/functions';

export const stringify: AnyToAny = x => JSON.stringify(x, null, '\t');
