import {
    withLatestFrom,
    map,
} from 'rxjs/operators';
import {Epic, ofType} from 'redux-observable';

import {drawImage} from '../../renderer';

import {actions} from '.';

export const drawEpic: Epic = (action$, state$) => action$.pipe(
    ofType('initCanvasRefGetter'),
    withLatestFrom(state$),
    map(([{payload}, {ScenesControls}]) => {
        drawImage({
            canvasRefGetter: payload,
            scene: ScenesControls.scenes[ScenesControls.activeSceneId],
        });
        return payload;
    }),
    map(actions.updateCanvasRefGetter)
);

// export const updateMouseEpic: Epic = (action$, state$) => action$.pipe(
//     ofType('updateMouse'),
//     withLatestFrom(state$),
//     map(([{payload}, state]) => {
//         'hoho';

//         // drawImage(state.Canvas.canvasRefGetter, {
//         //     ...state.Controls,
//         //     mouseX: payload.mouseX,
//         //     mouseY: payload.mouseY / 10,
//         // });
//         return {type: 'empty'};
//     })
// );
