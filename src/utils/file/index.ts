import type {AnyToAny, AnyToAny2} from '../types/functions';
import {
    parallel, K, I, pipe,
} from '../combinators';
import {methodApply, climb} from '../object';
import {newPromise} from '../promise';
// import {log} from '../supervisors';

export const extractBase64: AnyToAny = x => x.split(',').pop();

export const newFileReader: AnyToAny = () => new FileReader();

export const readAsDataURL: AnyToAny2 = factory => file => parallel(K)([I, methodApply('readAsDataURL')(file)])(factory());

export const chargeFileReaderHandlers: AnyToAny2 = reader => ({
    resolve,
    reject,
}) => {
    reader.onload = pipe([climb(['target', 'result']), extractBase64, resolve]);
    reader.onerror = reject;
};

export const fileToBase64 = pipe([
    readAsDataURL(newFileReader),
    chargeFileReaderHandlers,
    newPromise,
]);
