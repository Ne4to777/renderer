export interface State {
    onChangePositionX: any;
    onChangePositionY: any;
    onChangePositionZ: any;
    lights: any;
    lightsDefault: any;
}

export type Props = State

export type View = React.FunctionComponent<Props>
