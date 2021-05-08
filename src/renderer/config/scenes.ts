import type {ConfigScenes} from '..';
import {getSceneId} from '../utils/getters';

const modules = require.context('../../../scenes', false, /\.json$/);

export default modules
    .keys()
    .reduce((acc, fileName: string) => {
        const scene = modules(fileName);
        const sceneId = getSceneId(scene);
        for (const key in scene) {
            const item = scene[key];
            if (Array.isArray(item)) {
                scene[key] = item.reduce((itemsMap, itemEl) => {
                    // eslint-disable-next-line no-param-reassign
                    itemsMap[itemEl.meta.id] = itemEl;
                    return itemsMap;
                }, {} as Record<string, any>);
            }
        }
        acc[sceneId] = scene;
        return acc;
    }, {} as Record<string, any>) as ConfigScenes;
