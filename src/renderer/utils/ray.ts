import type {
    GetDiffused,
    GetInterPosition,
    GetReflected,
    GetSpecular,
    GetRay3D,
    GetPlaneDiffuse,
    GetCubeDiffuse,
    GetSphereDiffuse,
} from '..';
import {
    v3D,
    multScalar3D,
    add3D,
    sub3D,
    dot3D,
    abs3D,
    mult3D,
    normalize3D,
    restore3D,
    sign3D,
    step3D,
    // invert3D,
    negate3D,
} from '..';
import {invert3D} from './vector';

export const getRay3D: GetRay3D = function getRay3D(x, y, WIDTH_HALF, HEIGHT_HALF, cameraAOV) {
    const offsetX = x - WIDTH_HALF;
    const offsetY = y - HEIGHT_HALF;
    const offsetZ = HEIGHT_HALF / Math.tan(cameraAOV * (Math.PI / 360));
    return v3D(offsetX, offsetY, offsetZ);
};

export const getInterPosition: GetInterPosition = function getInterPosition(
    cameraOrigin,
    cameraDirection,
    intersectionDistance
) {
    return add3D(
        cameraOrigin,
        multScalar3D(cameraDirection, intersectionDistance)
    );
};

export const getDiffused: GetDiffused = function getDiffused(lightDirection, position, dimmer) {
    return Math.max(
        0,
        dot3D(lightDirection, position)
    ) / dimmer;
};

export const getSphereDiffuse = (function getSphereDiffuse(roV, rdV, ooV, ldV, near) {
    return -dot3D(ldV, normalize3D(restore3D(rdV, near, sub3D(roV, ooV))));
} as GetSphereDiffuse);

export const getPlaneDiffuse = (function getPlaneDiffuse(ldV) {
    return -dot3D(ldV, v3D(0, 1, 0));
} as GetPlaneDiffuse);

export const getCubeDiffuse = (function getCubeDiffuse(roV, rdV, ooV, ldV, cubeSize) {
    const m = invert3D(rdV);
    const n = mult3D(m, sub3D(roV, ooV));
    const k = multScalar3D(abs3D(m), cubeSize);

    const t1 = sub3D(negate3D(n), k);
    const nV = mult3D(
        negate3D(
            sign3D(rdV)
        ),
        mult3D(
            step3D(
                v3D(t1[1], t1[2], t1[0]),
                v3D(t1[0], t1[1], t1[2])
            ),
            step3D(
                v3D(t1[2], t1[0], t1[1]),
                v3D(t1[0], t1[1], t1[2])
            )
        )
    );
    return -dot3D(nV, ldV);
} as GetCubeDiffuse);

export const getReflected: GetReflected = function getReflected(
    cameraDirection,
    instersectionPosition
) {
    return sub3D(
        cameraDirection,
        multScalar3D(instersectionPosition, 2 * dot3D(instersectionPosition, cameraDirection))
    );
};

export const getSpecular: GetSpecular = function getSpecular(reflected, lightDirection, dimmer) {
    return Math.max(
        0,
        dot3D(reflected, lightDirection)
    ) ** dimmer;
};
