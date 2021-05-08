import React from 'react';

import SliderControl from '../SliderControl';

import {View} from '.';

import 'fontsource-roboto';
import './style.styl';

export default React.memo((({
    onChangePositionX,
    onChangePositionY,
    onChangePositionZ,
    onChangeAOV,
    camera,
    cameraDefault,
}) => {
    // eslint-disable-next-line no-console
    console.log('CameraControls');

    return (
        <div className="camera-controls-wrapper">
            {/* <Typography>Camera</Typography> */}
            <div className="camera-controls">
                <SliderControl
                    itemName="camera"
                    propName="x"
                    propType="position"
                    value={camera}
                    valueDefault={cameraDefault}
                    onChange={onChangePositionX}
                />
                <SliderControl
                    itemName="camera"
                    propName="y"
                    propType="position"
                    value={camera}
                    valueDefault={cameraDefault}
                    onChange={onChangePositionY}
                />
                <SliderControl
                    itemName="camera"
                    propName="z"
                    propType="position"
                    value={camera}
                    valueDefault={cameraDefault}
                    onChange={onChangePositionZ}
                />
                <SliderControl
                    itemName="camera"
                    propName={'aov'}
                    propType="params"
                    value={camera}
                    valueDefault={cameraDefault}
                    onChange={onChangeAOV}
                />
            </div>
        </div>
    );
}) as View,
(prev, next) => JSON.stringify(prev.camera) === JSON.stringify(next.camera));
