import { expect } from '@jest/globals';

declare module 'expect' {
  interface Matchers<R> {
    toBeBetween(min: number, max: number): R;
  }
}
const toBeBetween = (actual: number, min: number, max: number) => {
  if (
    typeof actual !== 'number' ||
    typeof min !== 'number' ||
    typeof max !== 'number'
  ) {
    throw new Error('These must be of type number!');
  }

  return actual >= min && actual <= max
    ? {
        message: () => `expected value is within range`,
        pass: true,
      }
    : {
        message: () => `expected value is not within range`,
        pass: false,
      };
};

expect.extend({
  toBeBetween,
});

describe('expect.extend', () => {
  test('7 is gte 5 and lte 10', async () => {
    expect(7).toBeBetween(5, 10);
  });
});
