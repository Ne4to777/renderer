export interface Props {
    onChangePositionX: any;
    onChangePositionY: any;
    onChangePositionZ: any;
    onChangeAOV: any;
    camera: any;
    cameraDefault: any;
}

export type View = React.FunctionComponent<Props>
