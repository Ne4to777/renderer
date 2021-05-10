/* eslint-disable no-plusplus */
import {GPU} from 'gpu.js';
import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';

import store from './store';
import CanvasGPU from './components/Canvas';
import ScenesControls from './components/ScenesControls';
import './declarations';

render(
    <Provider store={store}>
        <CanvasGPU />
        <ScenesControls />
    </Provider>,
    document.getElementById('root')
);
