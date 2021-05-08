import type {AnyToAny} from '../types/functions';

const UPPERCASE_SPLIT_RE = /([A-Z][a-z0-9]+)/;
const LOW_DASH = '_';

const toUpperCase: AnyToAny = x => x.toUpperCase();

export const camelCaseToUpperCase: AnyToAny = x => x.split(UPPERCASE_SPLIT_RE).filter(Boolean).map(toUpperCase).join(LOW_DASH);
