import type {AnyToAny, AnyToAny2, AnyToAny3} from '../types/functions';

export const I: AnyToAny = x => x;
export const K: AnyToAny2 = x => () => x;
export const A: AnyToAny2 = f => (...xs) => f(...xs);
export const B: AnyToAny3 = f => g => (...xs) => f(g(...xs));
export const C: AnyToAny3 = f => (...xs) => (...ys) => f(...ys)(...xs);

export const pipeReducerAsync: AnyToAny2 = (acc, f) => async (...xs) => f(await acc(...xs));
export const pipeAsync: AnyToAny = fs => fs.reduce(pipeReducerAsync, I);

const pipeReducer: AnyToAny2 = (acc, f) => (...xs) => f(acc(...xs));
export const pipe: AnyToAny = fs => fs.reduce(pipeReducer, I);

const bipipeReducerAsync: AnyToAny2 = (acc, [f, g]) => async (...xs) => {
    try {
        return await f(await acc(...xs));
    } catch (err) {
        if (g) throw await g(err);
        throw err;
    }
};
export const bipipeAsync: AnyToAny = fs => {
    try {
        return fs.reduce(bipipeReducerAsync, I);
    } catch (err) {
        return err;
    }
};

const parallelRedcer: AnyToAny2 = (...xs) => (acc, f) => acc(f(...xs));

export const parallel: AnyToAny3 = joiner => fs => (...xs) => fs.reduce(parallelRedcer(...xs), joiner);

export const lazify: AnyToAny3 = f => (...xs) => () => f(...xs);
