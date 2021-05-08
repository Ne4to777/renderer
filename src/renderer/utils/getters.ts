import type {
    GetSceneId,
    GetSceneMeta,
    GetSceneTitle,
    GetSceneType,
    GetSceneCameras,
    GetSceneObjects,
    GetSceneLights,
    GetSceneParams,
    GetSceneActiveCameraId,
    GetSceneActiveCamera,
    GetCameraMeta,
    GetCameraId,
    GetCameraTitle,
    GetCameraType,
    GetCameraPosition,
    GetCameraPositionX,
    GetCameraPositionY,
    GetCameraPositionZ,
    GetCameraAngle,
    GetCameraAngleX,
    GetCameraAngleY,
    GetCameraAngleZ,
    GetCameraParams,
    GetCameraAOV,
    GetObjectMeta,
    GetObjectId,
    GetObjectTitle,
    GetObjectType,
    GetObjectPosition,
    GetObjectPositionX,
    GetObjectPositionY,
    GetObjectPositionZ,
    GetObjectAngle,
    GetObjectAngleX,
    GetObjectAngleY,
    GetObjectAngleZ,
    GetObjectParams,
    GetObjectSize,
    GetObjectIsVisible,
    GetLightMeta,
    GetLightId,
    GetLightTitle,
    GetLightType,
    GetLightPosition,
    GetLightPositionX,
    GetLightPositionY,
    GetLightPositionZ,
    GetLightAngle,
    GetLightAngleX,
    GetLightAngleY,
    GetLightAngleZ,
    GetLightParams,
} from '.';

export const getSceneMeta: GetSceneMeta = scene => scene.meta;
export const getSceneId: GetSceneId = scene => getSceneMeta(scene).id;
export const getSceneTitle: GetSceneTitle = scene => getSceneMeta(scene).title;
export const getSceneType: GetSceneType = scene => getSceneMeta(scene).type;
export const getSceneParams: GetSceneParams = scene => scene.params;
export const getSceneActiveCameraId: GetSceneActiveCameraId = scene => getSceneParams(scene)
    .activeCameraId;

export const getSceneCameras: GetSceneCameras = scene => scene.cameras;
export const getSceneActiveCamera: GetSceneActiveCamera = scene => getSceneCameras(scene)[
    getSceneActiveCameraId(scene)
];
export const getCameraMeta: GetCameraMeta = camera => camera.meta;
export const getCameraId: GetCameraId = camera => getCameraMeta(camera).id;
export const getCameraTitle: GetCameraTitle = camera => getCameraMeta(camera).title;
export const getCameraType: GetCameraType = camera => getCameraMeta(camera).type;
export const getCameraPosition: GetCameraPosition = camera => camera.position;
export const getCameraPositionX: GetCameraPositionX = camera => getCameraPosition(camera).x;
export const getCameraPositionY: GetCameraPositionY = camera => getCameraPosition(camera).y;
export const getCameraPositionZ: GetCameraPositionZ = camera => getCameraPosition(camera).z;
export const getCameraAngle: GetCameraAngle = camera => camera.angle;
export const getCameraAngleX: GetCameraAngleX = camera => getCameraAngle(camera).x;
export const getCameraAngleY: GetCameraAngleY = camera => getCameraAngle(camera).y;
export const getCameraAngleZ: GetCameraAngleZ = camera => getCameraAngle(camera).z;
export const getCameraParams: GetCameraParams = camera => camera.params;
export const getCameraAOV: GetCameraAOV = camera => getCameraParams(camera).aov;

export const getSceneObjects: GetSceneObjects = scene => scene.objects;
export const getObjectMeta: GetObjectMeta = object => object.meta;
export const getObjectId: GetObjectId = object => getObjectMeta(object).id;
export const getObjectTitle: GetObjectTitle = object => getObjectMeta(object).title;
export const getObjectType: GetObjectType = object => getObjectMeta(object).type;
export const getObjectPosition: GetObjectPosition = object => object.position;
export const getObjectPositionX: GetObjectPositionX = object => getObjectPosition(object).x;
export const getObjectPositionY: GetObjectPositionY = object => getObjectPosition(object).y;
export const getObjectPositionZ: GetObjectPositionZ = object => getObjectPosition(object).z;
export const getObjectAngle: GetObjectAngle = object => object.angle;
export const getObjectAngleX: GetObjectAngleX = object => getObjectAngle(object).x;
export const getObjectAngleY: GetObjectAngleY = object => getObjectAngle(object).y;
export const getObjectAngleZ: GetObjectAngleZ = object => getObjectAngle(object).z;
export const getObjectParams: GetObjectParams = object => object.params;
export const getObjectSize: GetObjectSize = object => object.params.size;
export const getObjectIsVisible: GetObjectIsVisible = object => Boolean(object.params.isVisible);

export const getSceneLights: GetSceneLights = scene => scene.lights;
export const getLightMeta: GetLightMeta = light => light.meta;
export const getLightId: GetLightId = light => getLightMeta(light).id;
export const getLightTitle: GetLightTitle = light => getLightMeta(light).title;
export const getLightType: GetLightType = light => getLightMeta(light).type;
export const getLightPosition: GetLightPosition = light => light.position;
export const getLightPositionX: GetLightPositionX = light => getLightPosition(light).x;
export const getLightPositionY: GetLightPositionY = light => getLightPosition(light).y;
export const getLightPositionZ: GetLightPositionZ = light => getLightPosition(light).z;
export const getLightAngle: GetLightAngle = light => light.angle;
export const getLightAngleX: GetLightAngleX = light => getLightAngle(light).x;
export const getLightAngleY: GetLightAngleY = light => getLightAngle(light).y;
export const getLightAngleZ: GetLightAngleZ = light => getLightAngle(light).z;
export const getLightParams: GetLightParams = light => light.params;
