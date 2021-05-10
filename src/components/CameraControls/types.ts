export interface Props {
    onChangePositionX: any;
    onChangePositionY: any;
    onChangePositionZ: any;
    onChangeAngleAlpha: any;
    onChangeAngleBeta: any;
    onChangeAOV: any;
    camera: any;
    cameraDefault: any;
}

export type View = React.FunctionComponent<Props>
