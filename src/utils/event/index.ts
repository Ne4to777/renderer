import type {AnyToAny} from '../types/functions';
import {B, C} from '../combinators';

const persistEvent: AnyToAny = e => e.persist() || e;
export const composeWithPersist = C(B)(persistEvent);
