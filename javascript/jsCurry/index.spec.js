import { add } from './index';

describe('test', () => {
  test('function test', () => expect(add(1,2,3)).toEqual(6));

  test('function test', () => expect(add(1,2)(3)).toEqual(6));

  test('function test', () => expect(add(1)(2,3)).toEqual(6));

  test('function test', () => expect(add(1)(2)(3)).toEqual(6));
});
