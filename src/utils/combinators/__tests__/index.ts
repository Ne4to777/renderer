import type {AnyToAny, AnyToAny2} from '../../types/functions';
import {
    pipeAsync, pipe, bipipeAsync, parallel, I, K, B, C,
} from '..';
import {testToBe} from '../../test';
import {OBJECT_DUMMY} from '../../dummies';

const returnIdentity: AnyToAny = x => x;
const test: AnyToAny2 = name => testToBe(name)(OBJECT_DUMMY)(returnIdentity);

const returnConstant: AnyToAny = x => K(x)();
const returnCompose: AnyToAny = B(I)(I);
const returnFlip: AnyToAny = x => C(K)(x)(x);
const returnPipe: AnyToAny = pipe([I, I]);
const returnPipeAsync: AnyToAny = pipeAsync([I, I]);
const returnBipipeAsync: AnyToAny = bipipeAsync([[I], [I]]);
const returnParallel: AnyToAny = parallel(K)([I, I]);

describe('Combinators', () => {
    test('I')(I);
    test('K')(returnConstant);
    test('B')(returnCompose);
    test('C')(returnFlip);
    test('pipe')(returnPipe);
    test('pipeAsync')(returnPipeAsync);
    test('bipipeAsync')(returnBipipeAsync);
    test('parallel')(returnParallel);
});
