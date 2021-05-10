import React from 'react';
import {GPUMode, GPUInternalMode, IKernelRunShortcut} from 'gpu.js';

import type {
    Scene,
    SceneCamera,
    SceneLight,
    SceneObject,
    SceneCameraId,
    SceneObjectId,
    SceneLightId,
} from './scene';
import {CanvasRefGetter} from '../../../components/Canvas';

export type ComputeWithAnimation = (
    this: any,
    frameNumber: number,
    framesTotal: number,
    width: number,
    height: number
)=> void

export type Compute = (this: any, ...args: any[])=> void

export type Animate = ({
    render,
    args,
    from,
    to,
}: {
    render: any,
    args: any[],
    from: number,
    to: number,
})=> void

export type DrawImage = ({
    canvasRefGetter,
    mouse,
    scene,
}: {
    canvasRefGetter?: any,
    mouse?: any,
    scene: any,
})=> void

export type GetCachedCanvasRefGetter =(
    cachedCanvasRefGetter: CanvasRefGetter
)=> (
    canvasRefGetter: CanvasRefGetter
)=> CanvasRefGetter

export type GetMousePoint = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>)=> [number, number]

export interface ConfigCodes {
    item: {
        scene: number,
        camera: number,
        object: number,
        light: number,
    };
    scene: {
        default: number,
    };
    camera: {
        default: number,
    };
    object: {
        sphere: number,
        plane: number,
        cube: number,
    };
    light: {
        default: number,
    };
}

export interface ConfigGPU {
    mode?: GPUMode | GPUInternalMode;
}

export interface ConfigImage {
    WIDTH: number;
    HEIGHT: number;
    WIDTH_HALF: number;
    HEIGHT_HALF: number;
}
export interface ConfigControls {
    [key: string]: any;
}
export interface ConfigScenes {
    [key: string]: Scene;
}
export interface ConfigProject {
    [key: string]: any;
}

export interface Config {
    gpu: ConfigGPU;
    image: ConfigImage;
    controls: ConfigControls;
    codes: ConfigCodes;
    scenes: ConfigScenes;
    project: ConfigProject;
}

export type Vector2D = [number, number]
export type Vector3D = [number, number, number]
export type Matrix3D = [
    [number, number, number],
    [number, number, number],
    [number, number, number],
]
export type V2D = (x: number, y: number)=> Vector2D
export type V3D = (x: number, y: number, z: number)=> Vector3D
export type Add2D = (a: Vector2D, b: Vector2D)=> Vector2D
export type Add3D = (a: Vector3D, b: Vector3D)=> Vector3D
export type Sub3D = (a: Vector3D, b: Vector3D)=> Vector3D
export type Mult3D = (a: Vector3D, b: Vector3D)=> Vector3D
export type Div3D = (a: Vector3D, b: Vector3D)=> Vector3D
export type Abs3D = (a: Vector3D)=> Vector3D
export type Max3D = (a: Vector3D)=> number
export type Min3D = (a: Vector3D)=> number
export type Dot2D = (a: Vector2D, b: Vector2D)=> number
export type Dot3D = (a: Vector3D, b: Vector3D)=> number
export type Cross3D = (a: Vector3D, b: Vector3D)=> Vector3D
export type Length2D = (a: Vector2D)=> number
export type Length3D = (a: Vector3D)=> number
export type MultScalar2D = (a: Vector2D, n: number)=> Vector2D
export type MultScalar3D = (a: Vector3D, n: number)=> Vector3D
export type DivScalar2D = (a: Vector2D, n: number)=> Vector2D
export type DivScalar3D = (a: Vector3D, n: number)=> Vector3D
export type Normalize2D = (a: Vector2D)=> Vector2D
export type Normalize3D = (a: Vector3D)=> Vector3D
export type Invert3D = (a: Vector3D)=> Vector3D
export type Negate3D = (a: Vector3D)=> Vector3D
export type Sign3D = (a: Vector3D)=> Vector3D
export type Step3D = (a: Vector3D, b: Vector3D)=> Vector3D
export type MultMatrix3D = (a: Vector3D, b: Vector3D, c: Vector3D, d: Vector3D)=> Vector3D

export type Restore3D=(directionV: Vector3D, length: number, offsetV: Vector3D)=> Vector3D

export type CastRay = (a: Vector3D, b: Vector3D)=> number

export type GetCircleIntersections = (a: Vector2D, b: Vector2D, r: number)=> Vector2D
export type GetSphereIntersectionDistances = (
    rayOriginV: Vector3D,
    rayDirectionV: Vector3D,
    sphereOriginV: Vector3D,
    sphereRadius: number
)=> Vector2D

export type GetPlaneIntersectionDistances = (
    rayOriginV: Vector3D,
    rayDirectionV: Vector3D,
    planeOriginV: Vector3D
)=> Vector2D

export type GetCubeIntersectionDistances = (
    rayOriginV: Vector3D,
    rayDirectionV: Vector3D,
    cubeOriginV: Vector3D,
    cubeSize: number
)=> Vector2D

export type GetInterPosition = (
    cameraOrigin: Vector3D,
    cameraDirection: Vector3D,
    intersectionDistance: number
)=> Vector3D

export type GetDiffused = (
    lightDirection: Vector3D,
    position: Vector3D,
    dimmer: number
)=> number

export type GetSphereDiffuse=(
    rayORigin: Vector3D,
    rayDirection: Vector3D,
    sphereOrigin: Vector3D,
    lightDirection: Vector3D,
    intersectionDistance: number
)=> number

export type GetPlaneDiffuse=(
    lightDirection: Vector3D,
)=> number

export type GetCubeDiffuse=(
    rayOrigin: Vector3D,
    rayDirection: Vector3D,
    cubeOrigin: Vector3D,
    lightDirection: Vector3D,
    cubeSize: number
)=> number

export type GetReflected = (
    cameraDirection: Vector3D,
    instersectionPosition: Vector3D,
)=> Vector3D

export type GetSpecular = (
    reflected: Vector3D,
    lightDirection: Vector3D,
    dimmer: number
)=> number

export type GetRay3D=(
    this: any,
    x: number,
    y: number,
    WIDTH_HALF: number,
    HEIGHT_HALF: number,
    cameraAOV: number
)=> Vector3D

export type CameraMap = Map<string, any>
export type ObjectMap = Map<string, any>
export type LightMap = Map<string, any>
export type SceneMap = Map<string, CameraMap[] | ObjectMap[] | LightMap[]>

export type NewCamera = ({
    type,
    x,
    y,
    z,
    aov,
}: {
    type?: number,
    x: number,
    y: number,
    z: number,
    aov: number,
})=> CameraMap

export type NewObject = ({
    type,
    x,
    y,
    z,
    size,
}: {
    type: number,
    x: number,
    y: number,
    z: number,
    size: number,
})=> ObjectMap

export type NewSphere = ({
    x,
    y,
    z,
    radius,
}: {
    x: number,
    y: number,
    z: number,
    radius: number,
})=> ObjectMap

export type NewPlane = ({
    x,
    y,
    z,
    length,
}: {
    x: number,
    y: number,
    z: number,
    length: number,
})=> ObjectMap

export type NewCube = ({
    x,
    y,
    z,
    size,
}: {
    x: number,
    y: number,
    z: number,
    size: number,
})=> ObjectMap

export type NewLight = ({
    type,
    x,
    y,
    z,
}: {
    type?: number,
    x: number,
    y: number,
    z: number,
})=> LightMap

export type NewScene = ({
    type,
    cameras,
    objects,
    lights,
}: {
    type?: number,
    cameras: CameraMap[],
    objects: ObjectMap[],
    lights: LightMap[],
})=> SceneMap

export type CreateKernel = (scene: Scene)=> IKernelRunShortcut
export type GetCachedKernelByScene = (kernelsMap: any)=> (scene: Scene)=> IKernelRunShortcut
export type SceneToKernelData = (scene: Scene)=> any[]
export type CameraToKernelData = (id: SceneCameraId, camera: SceneCamera)=> any[]
export type ObjectToKernelData = (id: SceneObjectId, object: SceneObject)=> any[]
export type LightToKernelData = (id: SceneLightId, light: SceneLight)=> any[]
