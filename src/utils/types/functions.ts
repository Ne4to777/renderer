import type {Action} from 'redux';
import type {Observable, OperatorFunction} from 'rxjs';
import type {Epic} from 'redux-observable';

export type AnyToAny = (...xs: any)=> any;
export type AnyToAny2 = (...xs: any)=> AnyToAny;
export type AnyToAny3 = (...xs: any)=> AnyToAny2;
export type AnyToAny4 = (...xs: any)=> AnyToAny3;

export type Pipe = (
    fs: (
        | ((source: Observable<Action<any>>)=> Observable<Action<any>>)
        | OperatorFunction<any, unknown>
    )[],
)=> Epic;

export type StateToProps<T> = (params: T)=> Action<T>
export type StepEpicFactory = (name: string, prop: string, step: number, action: any)=> Epic
export type FloorToPrescision = (x: number, n: number)=> number
export type RoundToPrescision = (x: number, n: number)=> number
export type ToPrescision = (x: number, n: number)=> number
export type FloorToN = (x: number)=> number
export type RoundToN = (x: number)=> number
export type CeilToN = (x: number)=> number
