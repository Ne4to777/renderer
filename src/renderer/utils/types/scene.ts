export type SceneId = string
export type SceneType = string
export type SceneTitle = string
export type SceneCameraId = string
export type SceneActiveCameraId = string
export type SceneCameraTitle = string
export type SceneCameraType = string
export type SceneObjectId = string
export type SceneObjectTitle = string
export type SceneObjectType = 'plane' | 'sphere' | 'cube'
export type SceneLightId = string
export type SceneLightTitle = string
export type SceneLightType = string

export interface SceneMeta {
    id: SceneId;
    title: SceneTitle;
    type: SceneType;
}

export interface SceneParams {
    activeCameraId: SceneActiveCameraId;
}
export interface SceneCameraMeta {
    id: SceneCameraId;
    title: SceneCameraTitle;
    type: SceneCameraType;
}
export interface Axes3D {
    x: number;
    y: number;
    z: number;
}

export interface SceneCameraParams {
    aov: number;
}

export interface SceneCamera {
    meta: SceneCameraMeta;
    position: Axes3D;
    angle: Axes3D;
    params: SceneCameraParams;
}
export interface SceneCameras {
    [key: string]: SceneCamera;
}

export interface SceneObjectPlaneParams {
    size: number;
    isVisible?: boolean;
}
export interface SceneObjectSphereParams {
    radius: number;
    isVisible?: boolean;
}
export interface SceneObjectCubeParams {
    size: number;
    isVisible?: boolean;
}
export type SceneObjectParams =
    & SceneObjectPlaneParams
    & SceneObjectSphereParams
    & SceneObjectCubeParams

export interface SceneObjectMeta {
    id: SceneObjectId;
    title: string;
    type: SceneObjectType;
}
export interface SceneObject {
    meta: SceneObjectMeta;
    position: Axes3D;
    angle: Axes3D;
    params: SceneObjectParams;
}
export interface SceneObjects {
    [key: string]: SceneObject;
}
export interface SceneLightMeta {
    id: SceneLightId;
    title: SceneLightTitle;
    type: SceneLightType;
}
export interface SceneLightParams {
    size: number;
    isVisible?: boolean;
}
export interface SceneLight {
    meta: SceneLightMeta;
    position: Axes3D;
    angle: Axes3D;
    params: SceneLightParams;
}
export interface SceneLights {
    [key: string]: SceneLight;
}

export interface Scene {
    meta: SceneMeta;
    params: SceneParams;
    cameras: SceneCameras;
    objects: SceneObjects;
    lights: SceneLights;
}

export type GetSceneId = (scene: Scene)=> SceneId
export type GetSceneMeta = (scene: Scene)=> SceneMeta
export type GetSceneTitle = (scene: Scene)=> SceneTitle
export type GetSceneType = (scene: Scene)=> SceneType
export type GetSceneParams = (scene: Scene)=> SceneParams
export type GetSceneActiveCameraId = (scene: Scene)=> SceneActiveCameraId
export type GetSceneActiveCamera = (scene: Scene)=> SceneCamera
export type GetSceneCameras = (scene: Scene)=> SceneCameras
export type GetSceneObjects = (scene: Scene)=> SceneObjects
export type GetSceneLights = (scene: Scene)=> SceneLights
export type GetCameraMeta = (camera: SceneCamera)=> SceneCameraMeta
export type GetCameraId = (camera: SceneCamera)=> SceneCameraId
export type GetCameraTitle = (camera: SceneCamera)=> SceneCameraTitle
export type GetCameraType = (camera: SceneCamera)=> SceneCameraType
export type GetCameraPosition = (camera: SceneCamera)=> Axes3D
export type GetCameraPositionX = (camera: SceneCamera)=> number
export type GetCameraPositionY = (camera: SceneCamera)=> number
export type GetCameraPositionZ = (camera: SceneCamera)=> number
export type GetCameraAngle = (camera: SceneCamera)=> Axes3D
export type GetCameraAngleX = (camera: SceneCamera)=> number
export type GetCameraAngleY = (camera: SceneCamera)=> number
export type GetCameraAngleZ = (camera: SceneCamera)=> number
export type GetCameraParams = (camera: SceneCamera)=> SceneCameraParams
export type GetCameraAOV = (camera: SceneCamera)=> number
export type GetObjectMeta = (object: SceneObject)=> SceneObjectMeta
export type GetObjectId = (object: SceneObject)=> SceneObjectId
export type GetObjectTitle = (object: SceneObject)=> SceneObjectTitle
export type GetObjectType = (object: SceneObject)=> SceneObjectType
export type GetObjectPosition = (object: SceneObject)=> Axes3D
export type GetObjectPositionX = (object: SceneObject)=> number
export type GetObjectPositionY = (object: SceneObject)=> number
export type GetObjectPositionZ = (object: SceneObject)=> number
export type GetObjectAngle = (object: SceneObject)=> Axes3D
export type GetObjectAngleX = (object: SceneObject)=> number
export type GetObjectAngleY = (object: SceneObject)=> number
export type GetObjectAngleZ = (object: SceneObject)=> number
export type GetObjectParams = (object: SceneObject)=> SceneObjectParams
export type GetObjectSize = (object: SceneObject)=> number
export type GetObjectIsVisible = (object: SceneObject)=> boolean
export type GetLightMeta = (light: SceneLight)=> SceneLightMeta
export type GetLightId = (light: SceneLight)=> SceneLightId
export type GetLightTitle = (light: SceneLight)=> SceneLightTitle
export type GetLightType = (light: SceneLight)=> SceneLightType
export type GetLightPosition = (light: SceneLight)=> Axes3D
export type GetLightPositionX = (light: SceneLight)=> number
export type GetLightPositionY = (light: SceneLight)=> number
export type GetLightPositionZ = (light: SceneLight)=> number
export type GetLightAngle = (light: SceneLight)=> Axes3D
export type GetLightAngleX = (light: SceneLight)=> number
export type GetLightAngleY = (light: SceneLight)=> number
export type GetLightAngleZ = (light: SceneLight)=> number
export type GetLightParams = (light: SceneLight)=> SceneLightParams
