export type Unrepeat = (cache?: any)=> (f: any)=> (x?: any)=> any

export const unrepeatCached: Unrepeat = cache => f => x => {
    if (cache === x) return undefined;
    cache = x;
    return f(cache);
};

export const unrepeat = unrepeatCached();
