import {AnyToAny3, AnyToAny2, AnyToAny} from '../types/functions';

type ClimbReducer = <T>(acc: Record<string, T>, x: string)=> T | void
const climbReducer: ClimbReducer = (acc, x) => acc[x];
type Climb = (props: string[])=> (o: Record<string, any>)=> any
export const climb: Climb = props => o => props.reduce(climbReducer, o);

export const methodApply: AnyToAny3 = m => (...args) => o => o[m](...args);
export const methodEmptyApply: AnyToAny2 = m => o => methodApply(m)()(o);

type MapObject = (f: AnyToAny)=> <T, K>(o: Record<string, T>)=> Record<string, K>
export const mapObject: MapObject = f => o => {
    const result: Record<string, any> = {};
    for (const key in o) {
        const item = o[key];
        result[key] = f(item);
    }
    return result;
};
type MapObjectByKey = (f: AnyToAny)=> <T, K>(o: Record<string, T>)=> Record<string, K>
export const mapObjectByKey: MapObjectByKey = f => o => {
    const result: Record<string, any> = {};
    for (const key in o) {
        const item = o[key];
        result[f(key, item)] = item;
    }
    return result;
};
type MapObjectByKeyAndValue = (
    f: AnyToAny,
    g: AnyToAny
)=> <T, K>(o: Record<string, T>)=> Record<string, K>
export const mapObjectByKeyAndValue: MapObjectByKeyAndValue = (f, g) => o => {
    const result: Record<string, any> = {};
    for (const key in o) {
        const item = o[key];
        const keyNew = f(key, item);
        result[keyNew] = g(keyNew, item);
    }
    return result;
};
type ReduceObjectToArray = (f: AnyToAny)=> <T, K>(o: Record<string, T>)=> K[]
export const reduceObjectToArray: ReduceObjectToArray = f => o => {
    const result: any[] = [];
    for (const key in o) {
        const item = o[key];
        result.push(f(key, item));
    }
    return result;
};
type GetObjectKeysLength = (o: Record<string, any>)=> number
export const getObjectLength: GetObjectKeysLength = o => Object.keys(o).length;
