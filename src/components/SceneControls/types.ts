export interface State {
    onChangeActiveCameraId: any;
    onChangeCameraPositionX: any;
    onChangeCameraPositionY: any;
    onChangeCameraPositionZ: any;
    onChangeCameraAOV: any;
    onChangeObjectPositionX: any;
    onChangeObjectPositionY: any;
    onChangeObjectPositionZ: any;
    onChangeLightPositionX: any;
    onChangeLightPositionY: any;
    onChangeLightPositionZ: any;
    sceneId: any;
    sceneDefault: any;
    scene: any;
}

export type Props = State

export type View = React.FunctionComponent<Props>
