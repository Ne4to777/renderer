type ModuleToArray = <T>(module: Record<string, T>)=> T[]
export const moduleToArray: ModuleToArray = module => Object.values(module);
