import React, {useEffect} from 'react';

import SceneControls from '../SceneControls';
import ScenesSelector from '../ScenesSelector';

import type {View} from '.';

import 'fontsource-roboto';
import './style.styl';

const keysMapTranslation = {
    87: {
        axis: 'z',
        step: 0.1,
    },
    83: {
        axis: 'z',
        step: -0.1,
    },
    68: {
        axis: 'x',
        step: 0.1,
    },
    65: {
        axis: 'x',
        step: -0.1,
    },
    32: {
        axis: 'y',
        step: 0.1,
    },
    17: {
        axis: 'y',
        step: -0.1,
    },
    0: {
        axis: '',
        step: 0,
    },
};

const keysMapRotation = {
    39: {
        angle: 'alpha',
        step: 0.1,
    },
    37: {
        angle: 'alpha',
        step: -0.1,
    },
    40: {
        angle: 'beta',
        step: 0.1,
    },
    38: {
        angle: 'beta',
        step: -0.1,
    },
};

const pressedKeys = {} as Record<string, Record<string, any>>;
const keyDownEffect = ({stepCameraPosition, stepCameraAngle}: any) => {
    const onKeyDown = (e: any) => {
        e.preventDefault();
        const {keyCode} = e;
        // console.log(keyCode);
        const position = {} as Record<string, number>;
        const angles = {} as Record<string, number>;
        const translation = keysMapTranslation[keyCode as keyof typeof keysMapTranslation] ?? 0;
        if (translation.axis) {
            pressedKeys[keyCode] = {axis: translation.axis, step: translation.step};
        }
        for (const key in pressedKeys) {
            const pressedKey = pressedKeys[key];
            position[pressedKey.axis] = pressedKey.step;
        }
        stepCameraPosition(position);

        const rotation = keysMapRotation[keyCode as keyof typeof keysMapRotation] ?? 0;

        if (rotation.angle) {
            pressedKeys[keyCode] = {angle: rotation.angle, step: rotation.step};
        }
        for (const key in pressedKeys) {
            const pressedKey = pressedKeys[key];
            angles[pressedKey.angle] = pressedKey.step;
        }
        stepCameraAngle(angles);
    };
    const onKeyUp = ({keyCode}: {keyCode: number}) => {
        // console.log(keyCode);
        const translation = keysMapTranslation[keyCode as keyof typeof keysMapTranslation] ?? 0;
        if (translation) {
            delete pressedKeys[keyCode];
        }
        const rotation = keysMapRotation[keyCode as keyof typeof keysMapRotation] ?? 0;
        if (rotation) {
            delete pressedKeys[keyCode];
        }
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);
    return () => {
        document.removeEventListener('keydown', onKeyDown);
        document.removeEventListener('keyup', onKeyUp);
    };
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
    changeCameraAngleAlpha,
    changeCameraAngleBeta,
    stepCameraPosition,
    stepCameraAngle,
    changeCameraAOV,
    changeObjectPositionX,
    changeObjectPositionY,
    changeObjectPositionZ,
    changeLightPositionX,
    changeLightPositionY,
    changeLightPositionZ,
    scenesDefault,
    scenes,
    activeSceneIdDefault,
    activeSceneId,
}) => {
    // eslint-disable-next-line no-console
    console.log('ScenesControls');

    useEffect(() => keyDownEffect({stepCameraPosition, stepCameraAngle}));

    return (
        <div className="scenes-controls-wrapper">
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
                    sceneDefault={scenesDefault[activeSceneId]}
                    onChangeActiveCameraId={changeActiveCameraId}
                    onChangeCameraPositionX={changeCameraPositionX}
                    onChangeCameraPositionY={changeCameraPositionY}
                    onChangeCameraPositionZ={changeCameraPositionZ}
                    onChangeCameraAngleAlpha={changeCameraAngleAlpha}
                    onChangeCameraAngleBeta={changeCameraAngleBeta}
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
