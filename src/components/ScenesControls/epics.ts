import {
    withLatestFrom,
    map,
} from 'rxjs/operators';
import {Epic, ofType} from 'redux-observable';

import {drawImage} from '../../renderer';
import {stepEpicFactory} from '../../utils/rxjs';
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
        'changeCameraAOV',
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

export const stepLeftEpic: Epic = stepEpicFactory('stepLeft', 'cameraX', -0.1, actions.updateState);
export const stepRightEpic: Epic = stepEpicFactory('stepRight', 'cameraX', 0.1, actions.updateState);
export const stepUpEpic: Epic = stepEpicFactory('stepUp', 'cameraY', 0.1, actions.updateState);
export const stepDownEpic: Epic = stepEpicFactory('stepDown', 'cameraY', -0.1, actions.updateState);
export const stepForwardEpic: Epic = stepEpicFactory('stepForward', 'cameraZ', 0.1, actions.updateState);
export const stepBackwardEpic: Epic = stepEpicFactory('stepBackward', 'cameraZ', -0.1, actions.updateState);
