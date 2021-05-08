export interface State {
    onChangeActiveSceneId: any;
    scenes: any;
    activeSceneIdDefault: any;
    activeSceneId: any;
}

export type Props = State

export type View = React.FunctionComponent<Props>
