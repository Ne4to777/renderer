export interface State {
    onChangeActiveCameraId: any;
    sceneId: any;
    cameras: any;
    activeCameraIdDefault: any;
    activeCameraId: any;
}

export type Props = State

export type View = React.FunctionComponent<Props>
