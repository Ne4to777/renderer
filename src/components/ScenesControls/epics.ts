import {
    withLatestFrom,
    map,
} from 'rxjs/operators';
import {Epic, ofType} from 'redux-observable';

import {drawImage} from '../../renderer';
import * as actions from './actions';

export const changeActiveSceneIdEpic: Epic = (action$, state$) => action$.pipe(
    ofType('changeActiveSceneId'),
    withLatestFrom(state$),
    map(([{payload = {}}, {ScenesControls}]) => {
        drawImage({
            scene: ScenesControls.scenes[payload],
        });
        return payload;
    }),
    map(actions.doNothing)
);

export const changeActiveCameraIdEpic: Epic = (action$, state$) => action$.pipe(
    ofType('changeActiveCameraId'),
    withLatestFrom(state$),
    map(([{payload = {}}, {ScenesControls}]) => {
        drawImage({
            scene: ScenesControls.scenes[ScenesControls.activeSceneId],
        });
        return payload;
    }),
    map(actions.doNothing)
);

export const changeCameraPositionXEpic: Epic = (action$, state$) => action$.pipe(
    ofType(
        'changeCameraPositionX',
        'changeCameraPositionY',
        'changeCameraPositionZ',
        'changeCameraAngleAlpha',
        'changeCameraAngleBeta',
        'changeCameraAOV',
        'stepCameraPosition',
        'stepCameraAngle',
        'changeObjectPositionX',
        'changeObjectPositionY',
        'changeObjectPositionZ',
        'changeLightPositionX',
        'changeLightPositionY',
        'changeLightPositionZ'
    ),
    withLatestFrom(state$),
    map(([{payload = {}}, {ScenesControls}]) => {
        drawImage({
            scene: ScenesControls.scenes[ScenesControls.activeSceneId],
        });
        return payload;
    }),
    map(actions.doNothing)
);
