import type {Compute} from '..';
import {
    v3D,
    normalize3D,
    getSphereIntersectionDistances,
    getPlaneIntersectionDistances,
    getCubeIntersectionDistances,
} from '..';
import {
    sub3D,
    getRay3D,
    getSphereDiffuse,
    getCubeDiffuse,
    dot3D,
    cross3D,
    multScalar3D,
    add3D,
    restore3D,
    getPlaneDiffuse,
    abs3D,
    max3D,
    min3D,
    invert3D,
    mult3D,
    negate3D,
    sign3D,
    step3D,
    multMatrix3D,
} from '../utils';
import {ceilToPrescision, floorToPrescision} from '../../utils/math';

export const compute: Compute = function (
    mouse,
    camera,
    objects,
    lights
) {
    let color = 0;
    const {x, y} = this.thread;
    const {
        WIDTH_HALF,
        HEIGHT_HALF,
        OBJECTS_COUNT,
        SPHERE_CODE,
        PLANE_CODE,
        CUBE_CODE,
    } = this.constants;

    const cameraX = camera[0];
    const cameraY = camera[1];
    const cameraZ = camera[2];
    const cameraAlpha = camera[3];
    const cameraBeta = camera[4];
    const cameraAOV = camera[5];

    const lightX = lights[0][0];
    const lightY = lights[0][1];
    const lightZ = lights[0][2];

    const roV = v3D(cameraX, cameraY, cameraZ);
    const ldV = normalize3D(v3D(lightX, lightY, lightZ));

    const tmpV = v3D(0, 1, 0);
    const toV = normalize3D(v3D(cameraAlpha, cameraBeta, 1));
    const forwardV = normalize3D(sub3D(toV, roV));
    const rightV = cross3D(normalize3D(tmpV), forwardV);
    const upV = cross3D(forwardV, rightV);

    const rayV = getRay3D(x, y, WIDTH_HALF, HEIGHT_HALF, cameraAOV);
    const rdV = normalize3D(
        // rayV
        multMatrix3D(rayV, rightV, upV, forwardV)
    );

    let lastNearIntersection = Infinity;
    for (let i = 0; i < OBJECTS_COUNT; i += 1) {
        const objectType = objects[i][0];
        const objectX = objects[i][1];
        const objectY = objects[i][2];
        const objectZ = objects[i][3];
        const objectSize = objects[i][4];
        const ooV = v3D(objectX, objectY, objectZ);

        if (objectType === SPHERE_CODE) {
            const intersections = getSphereIntersectionDistances(roV, rdV, ooV, objectSize);
            const nearIntersection = intersections[0];
            if (nearIntersection > 0 && nearIntersection < lastNearIntersection) {
                lastNearIntersection = nearIntersection;
                color = getSphereDiffuse(roV, rdV, ooV, ldV, nearIntersection);
            }
        } else if (objectType === PLANE_CODE) {
            const intersections = getPlaneIntersectionDistances(roV, rdV, ooV);
            const nearIntersection = intersections[0];
            if (nearIntersection > 0 && nearIntersection < lastNearIntersection) {
                lastNearIntersection = nearIntersection;
                color = getPlaneDiffuse(ldV);
            }
        } else if (objectType === CUBE_CODE) {
            const m = invert3D(rdV);
            const n = mult3D(m, sub3D(roV, ooV));
            const k = multScalar3D(abs3D(m), objectSize);

            const t1 = sub3D(negate3D(n), k);
            const t2 = add3D(negate3D(n), k);

            const tN = floorToPrescision(max3D(t1), 5);
            const tF = ceilToPrescision(min3D(t2), 5);

            const nearIntersection = tN;

            if (tN > 0 && tN <= tF && nearIntersection < lastNearIntersection) {
                lastNearIntersection = nearIntersection;

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
                color = dot3D(nV, ldV);
            }
        }
        this.color(color, color, color);
    }
};
