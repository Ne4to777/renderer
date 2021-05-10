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
    GetCameraAngleAlpha,
    GetCameraAngleBeta,
    GetCameraAngleGamma,
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
    GetObjectAngleAlpha,
    GetObjectAngleBeta,
    GetObjectAngleGamma,
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
    GetLightAngleAlpha,
    GetLightAngleBeta,
    GetLightAngleGamma,
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
export const getCameraAngleAlpha: GetCameraAngleAlpha = camera => getCameraAngle(camera).alpha;
export const getCameraAngleBeta: GetCameraAngleBeta = camera => getCameraAngle(camera).beta;
export const getCameraAngleGamma: GetCameraAngleGamma = camera => getCameraAngle(camera).gamma;
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
export const getObjectAngleAlpha: GetObjectAngleAlpha = object => getObjectAngle(object).alpha;
export const getObjectAngleBeta: GetObjectAngleBeta = object => getObjectAngle(object).beta;
export const getObjectAngleGamma: GetObjectAngleGamma = object => getObjectAngle(object).gamma;
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
export const getLightAngleAlpha: GetLightAngleAlpha = light => getLightAngle(light).alpha;
export const getLightAngleBeta: GetLightAngleBeta = light => getLightAngle(light).beta;
export const getLightAngleGamma: GetLightAngleGamma = light => getLightAngle(light).gamma;
export const getLightParams: GetLightParams = light => light.params;
