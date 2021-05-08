import type {Compute} from '..';

export const compute: Compute = function (x, y) {
    if (
        this.thread.x >= x && this.thread.x <= x + 10
        && this.thread.y >= y && this.thread.y <= y + 10
    ) {
        this.color(0, 0, 0);
    } else {
        this.color(0, 1, 1);
    }
};
