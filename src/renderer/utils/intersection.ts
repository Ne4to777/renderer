import type {
    GetSphereIntersectionDistances,
    GetCircleIntersections,
    GetCubeIntersectionDistances,
    GetPlaneIntersectionDistances,
} from '..';
import {
    v2D,
    dot3D,
    dot2D,
    abs3D,
    add3D,
    div3D,
    max3D,
    min3D,
    mult3D,
    multScalar3D,
    sub3D,
    v3D,
    // invert3D,
    negate3D,
    invert3D,
} from './vector';

export const getCircleIntersection: GetCircleIntersections = function getCircleIntersection(
    origin2D,
    direction2D,
    radius
) {
    const b = dot2D(origin2D, direction2D);
    let h = b ** 2 - dot2D(origin2D, origin2D) + radius ** 2;
    if (h < 0) return v2D(-1, -1);
    h = Math.sqrt(h);
    return v2D(-b - h, -b + h);
};

export const getSphereIntersectionDistances = (function getSphereIntersectionDistances(
    rayOriginV,
    rayDirectionV,
    sphereOriginV,
    sphereRadius
) {
    const ray2centerV = sub3D(sphereOriginV, rayOriginV);
    // ray origin to sphere center projection length
    const ray2centerPL = dot3D(ray2centerV, rayDirectionV);
    if (ray2centerPL < 0) return v2D(0, 0);
    // square of sphere radius
    const sphereRadius2 = sphereRadius ** 2;
    // square of sphere center to ray direction projection length
    const center2rayL2 = dot3D(ray2centerV, ray2centerV) - ray2centerPL ** 2;
    if (sphereRadius2 < center2rayL2) return v2D(0, 0);
    // intersection point to center projection length
    const radius2rayPL = Math.sqrt(sphereRadius2 - center2rayL2);
    return v2D(ray2centerPL - radius2rayPL, ray2centerPL - radius2rayPL);
} as GetSphereIntersectionDistances);

export const getPlaneIntersectionDistances = (function getPlaneIntersectionDistances(
    rayOriginV,
    rayDirectionV,
    planeOriginV
) {
    const N = v3D(0, 1, 0);
    return v2D(-dot3D(sub3D(rayOriginV, planeOriginV), N) / dot3D(rayDirectionV, N), 0);
} as GetPlaneIntersectionDistances);

export const getCubeIntersectionDistances = (function getCubeIntersectionDistances(
    rayOriginV,
    rayDirectionV,
    cubeOriginV,
    cubeSize
) {
    const m = invert3D(rayDirectionV);
    const n = mult3D(m, sub3D(rayOriginV, cubeOriginV));
    const k = multScalar3D(abs3D(m), cubeSize);

    const t1 = sub3D(negate3D(n), k);
    const t2 = add3D(negate3D(n), k);

    return v2D(max3D(t1), min3D(t2));
} as GetCubeIntersectionDistances);
