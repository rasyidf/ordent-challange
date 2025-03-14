import { remainder } from '../challenges/remainder';

describe('Remainder Function Tests', () => {
  test('should return correct remainder for positive numbers', () => {
    expect(remainder(17, 5)).toBe(2);
    expect(remainder(13, 72)).toBe(7);
    expect(remainder(5, 2)).toBe(1);
    expect(remainder(100, 7)).toBe(2);
    expect(remainder(7, 7)).toBe(0);
  });

  test('should handle cases where smaller number divides larger number evenly', () => {
    expect(remainder(10, 2)).toBe(0);
    expect(remainder(25, 5)).toBe(0);
    expect(remainder(12, 4)).toBe(0);
  });

  test('should handle cases where second number is larger than first', () => {
    expect(remainder(3, 10)).toBe(1); // 10/3 = 3 remainder 1
    expect(remainder(5, 13)).toBe(3); // 13/5 = 2 remainder 3
    expect(remainder(2, 5)).toBe(1);  // 5/2 = 2 remainder 1
  });

  test('should handle negative numbers', () => {
    expect(remainder(-10, 3)).toBe(1);
    expect(remainder(10, -3)).toBe(1);
    expect(remainder(-10, -3)).toBe(1);
    expect(remainder(-13, 5)).toBe(3);
    expect(remainder(-8, -3)).toBe(2);
  });

  test('should handle zero cases correctly', () => {
    expect(remainder(0, -1)).toBe(0); // As per example in problem statement
    expect(remainder(10, 0)).toBe('NaN'); // Division by zero
    expect(remainder(0, 0)).toBe('NaN'); // Division by zero
  });

  test('should return "NaN" for non-number inputs', () => {
    expect(remainder(NaN, 5)).toBe('NaN');
    expect(remainder(10, NaN)).toBe('NaN');
    expect(remainder(NaN, NaN)).toBe('NaN');
  });

  test('should handle edge cases with very large numbers', () => {
    expect(remainder(1000000, 7)).toBe(1);
    expect(remainder(999999, 10)).toBe(9);
  });
});