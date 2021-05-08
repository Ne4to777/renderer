import React, {useRef, useEffect} from 'react';

import {config} from '../../renderer';

import type {View, Props} from '.';

import './style.styl';

const {image: {WIDTH, HEIGHT}} = config;

export default (({initCanvasRefGetter, updateMouse}: Props) => {
    // eslint-disable-next-line no-console
    console.log('Canvas');

    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        initCanvasRefGetter(() => canvasRef);
    }, []);

    return (
        <canvas
            width={WIDTH}
            height={HEIGHT}
            ref={canvasRef}
            onMouseDown={e => {
                // eslint-disable-next-line no-console
                console.log(e.clientX - 8, e.clientY - 8);
            } }
            onMouseMove={e => {
                updateMouse({
                    mouseX: e.clientX,
                    mouseY: e.clientY,
                });
            }}
        />
    );
}) as View;
