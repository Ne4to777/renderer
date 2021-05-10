import React from 'react';

import {
    getSceneActiveCameraId,
    getSceneCameras,
    getSceneId,
    getSceneLights,
    getSceneObjects,
} from '../../renderer/utils';
import CameraControls from '../CameraControls';
import CamerasSelector from '../CamerasSelector';
import ObjectsControls from '../ObjectsControls';
import LightsControls from '../LightsControls';

import type {View} from '.';

import 'fontsource-roboto';
import './style.styl';

export default (({
    onChangeActiveCameraId,
    onChangeCameraPositionX,
    onChangeCameraPositionY,
    onChangeCameraPositionZ,
    onChangeCameraAngleAlpha,
    onChangeCameraAngleBeta,
    onChangeCameraAOV,
    onChangeObjectPositionX,
    onChangeObjectPositionY,
    onChangeObjectPositionZ,
    onChangeLightPositionX,
    onChangeLightPositionY,
    onChangeLightPositionZ,
    sceneDefault,
    scene,
}) => {
    // eslint-disable-next-line no-console
    console.log('SceneControls');
    const sceneId = getSceneId(scene);
    const activeCameraId = getSceneActiveCameraId(scene);
    const activeCameraIdDefault = getSceneActiveCameraId(sceneDefault);
    const cameras = getSceneCameras(scene);
    const camerasDefault = getSceneCameras(sceneDefault);
    const objects = getSceneObjects(scene);
    const objectsDefault = getSceneObjects(sceneDefault);
    const lights = getSceneLights(scene);
    const lightsDefault = getSceneLights(sceneDefault);

    return (
        <div className="scene-controls-wrapper">
            {/* <Typography>Scene</Typography> */}
            <div className="scene-controls">
                <div className="scene-controls__camera">
                    <CamerasSelector
                        sceneId={sceneId}
                        onChangeActiveCameraId={onChangeActiveCameraId}
                        cameras={cameras}
                        activeCameraIdDefault={activeCameraIdDefault}
                        activeCameraId={activeCameraId}
                    />
                    <CameraControls
                        camera={cameras[activeCameraId]}
                        cameraDefault={camerasDefault[activeCameraIdDefault]}
                        onChangePositionX={onChangeCameraPositionX}
                        onChangePositionY={onChangeCameraPositionY}
                        onChangePositionZ={onChangeCameraPositionZ}
                        onChangeAngleAlpha={onChangeCameraAngleAlpha}
                        onChangeAngleBeta={onChangeCameraAngleBeta}
                        onChangeAOV={onChangeCameraAOV}
                    />
                </div>
                <div className="scene-controls__objects">
                    <ObjectsControls
                        objects={objects}
                        objectsDefault={objectsDefault}
                        onChangePositionX={onChangeObjectPositionX}
                        onChangePositionY={onChangeObjectPositionY}
                        onChangePositionZ={onChangeObjectPositionZ}
                    />
                </div>
                <div className="scene-controls__lights">
                    <LightsControls
                        lights={lights}
                        lightsDefault={lightsDefault}
                        onChangePositionX={onChangeLightPositionX}
                        onChangePositionY={onChangeLightPositionY}
                        onChangePositionZ={onChangeLightPositionZ}
                    />
                </div>
            </div>
        </div>
    );
}) as View;
