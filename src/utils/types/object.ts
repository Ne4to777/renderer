import type {AnyToAny, StateToProps} from './functions';

export type ObjectOfAnyToAny = Record<string, AnyToAny>;

export interface Meta {
    name: string;
}

export type Payload<State> = Partial<State>

export type ReducerParams<State> = {payload: Payload<State>, state?: State}

export type Reducer<State> = ({payload, state}: ReducerParams<State>)=> State

export type ReducersFromActions<State, Actions> = {
    [key in keyof Actions]: Reducer<State>
}

export type PropsFromActions<State, Actions> = {
    [key in keyof Actions]: StateToProps<any>
} & State
