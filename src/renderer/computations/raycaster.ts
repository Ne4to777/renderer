import type {Compute} from '..';
import {
    v2D,
    normalize2D,
    getCircleIntersection,
    add2D,
    multScalar2D,
    dot2D,
} from '..';

export const compute: Compute = function (mouseX, mouseY) {
    const {x, y} = this.thread;
    const {width, height} = this.constants;
    const origin2D = v2D(-10, -(mouseY / height - 0.5) * height);
    const direction2D = normalize2D(v2D(1, y / height - 0.5));
    const ray2D = getCircleIntersection(origin2D, direction2D, 1);
    let color = 0;
    if (ray2D[0] >= 0) {
        // const position2D = add2D(origin2D, multScalar2D(direction2D, ray2D[0]));
        // const lightXYZ = v2D(-direction2D[0], -direction2D[1]);
        // const light2DNorm = normalize2D(lightXYZ);
        color = 1;// dot2D(light2DNorm, position2D);
    }
    this.color(color, color, color);
};
