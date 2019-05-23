import { add } from './index';

describe('add js Curry', () => {
  test('magicFunction(1, 2, 3)', () => expect(add(1,2,3)).toEqual(6));

  test('magicFunction(1, 2)(3)', () => expect(add(1,2)(3)).toEqual(6));

  test('magicFunction(1)(2, 3)', () => expect(add(1)(2,3)).toEqual(6));

  test('magicFunction(1)(2)(3)', () => expect(add(1)(2)(3)).toEqual(6));
});
