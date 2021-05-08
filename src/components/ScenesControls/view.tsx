import React, {useEffect} from 'react';

import SceneControls from '../SceneControls';
import ScenesSelector from '../ScenesSelector';

import type {View} from '.';

import 'fontsource-roboto';
import './style.styl';

const keysMap = {
    87: 'stepForward',
    83: 'stepBackward',
    65: 'stepLeft',
    68: 'stepRight',
    81: 'stepUp',
    90: 'stepDown',
    0: 'empty',
};

const keyDownHandler = (steps: any) => ({keyCode}: {keyCode: number}) => {
    // console.log(keyCode);
    const command = keysMap[keyCode as keyof typeof keysMap ?? 0];
    if (command) steps[command]?.();
};

const keyDownEffect = ({
    stepForward,
    stepBackward,
    stepLeft,
    stepRight,
    stepUp,
    stepDown,
}: any) => {
    const onKeyDown = keyDownHandler({
        stepForward,
        stepBackward,
        stepLeft,
        stepRight,
        stepUp,
        stepDown,
    });
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
};
const ScenesSelectorMemo = React.memo(
    ScenesSelector,
    (prev, next) => prev.activeSceneId === next.activeSceneId
);

export default (({
    changeActiveSceneId,
    changeActiveCameraId,
    changeCameraPositionX,
    changeCameraPositionY,
    changeCameraPositionZ,
    changeCameraAOV,
    changeObjectPositionX,
    changeObjectPositionY,
    changeObjectPositionZ,
    changeLightPositionX,
    changeLightPositionY,
    changeLightPositionZ,
    stepForward,
    stepBackward,
    stepLeft,
    stepRight,
    stepUp,
    stepDown,
    scenesDefault,
    scenes,
    activeSceneIdDefault,
    activeSceneId,
}) => {
    // eslint-disable-next-line no-console
    console.log('ScenesControls');

    useEffect(() => keyDownEffect({
        stepForward,
        stepBackward,
        stepLeft,
        stepRight,
        stepUp,
        stepDown,
    }));

    return (
        <div className="scenes-controls-wrapper">
            {/* <Typography>Scenes</Typography> */}
            <div className="scenes-controls">
                <ScenesSelectorMemo
                    scenes={scenes}
                    activeSceneId={activeSceneId}
                    activeSceneIdDefault={activeSceneIdDefault}
                    onChangeActiveSceneId={changeActiveSceneId}
                />
                <SceneControls
                    sceneId={activeSceneId}
                    scene={scenes[activeSceneId]}
                    sceneDefault={scenesDefault[activeSceneIdDefault]}
                    onChangeActiveCameraId={changeActiveCameraId}
                    onChangeCameraPositionX={changeCameraPositionX}
                    onChangeCameraPositionY={changeCameraPositionY}
                    onChangeCameraPositionZ={changeCameraPositionZ}
                    onChangeCameraAOV={changeCameraAOV}
                    onChangeObjectPositionX={changeObjectPositionX}
                    onChangeObjectPositionY={changeObjectPositionY}
                    onChangeObjectPositionZ={changeObjectPositionZ}
                    onChangeLightPositionX={changeLightPositionX}
                    onChangeLightPositionY={changeLightPositionY}
                    onChangeLightPositionZ={changeLightPositionZ}
                />
            </div>
        </div>
    );
}) as View;
