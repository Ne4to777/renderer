import type {
    ToPrescision,
    FloorToN,
    RoundToN,
    CeilToN,
} from '../types/functions';

export const ceilToPrescision: ToPrescision = function ceilToPrescision(x, n) {
    const factor = 10 ** n;
    return Math.ceil(x * factor) / factor;
};
export const floorToPrescision: ToPrescision = function floorToPrescision(x, n) {
    const factor = 10 ** n;
    return Math.floor(x * factor) / factor;
};
export const roundToPrescision: ToPrescision = function roundToPrescision(x, n) {
    const factor = 10 ** n;
    return Math.round(x * factor) / factor;
};

// export const ceilTo6: CeilToN = function ceilTo6(x) {
//     const factor = 1e6;
//     return Math.ceil(x * factor) / factor;
// };
// export const floorTo6: FloorToN = function floorTo6(x) {
//     const factor = 1e6;
//     return Math.floor(x * factor) / factor;
// };
// export const roundTo6: RoundToN = function roundTo6(x) {
//     const factor = 1e6;
//     return Math.round(x * factor) / factor;
// };
// export const roundTo2 = roundToPrescision(100);

// export const memoize = ((cache: any) => <T>(f: (x: T)=> T) => (x: T): T => {
//     if (cache[x] !== undefined) return cache[x];
//     const value = f(x);
//     // eslint-disable-next-line no-param-reassign
//     cache[x] = value;
//     return value;
// })({});

// export const normalizeOriginX = (x: number): number => roundTo2(-(0.97 ** x) - 3);
// export const normalizeOriginXCached = memoize(normalizeOriginX);
