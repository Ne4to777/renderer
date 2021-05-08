import type {AnyToAny4, AnyToAny2, AnyToAny3} from '../types/functions';

const expectToBe: AnyToAny2 = controlData => async testData => expect(await testData).toBe(await controlData);

export const toBe: AnyToAny3 = sample => controlHandler => testHandler => expectToBe(controlHandler(sample))(testHandler(sample));

export const testToBe: AnyToAny4 = name => sample => controlHandler => testHandler => test(name, () => toBe(sample)(controlHandler)(testHandler));
