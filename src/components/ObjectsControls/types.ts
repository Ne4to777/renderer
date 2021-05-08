export interface State {
    onChangePositionX: any;
    onChangePositionY: any;
    onChangePositionZ: any;
    objects: any;
    objectsDefault: any;
}

export type Props = State

export type View = React.FunctionComponent<Props>
