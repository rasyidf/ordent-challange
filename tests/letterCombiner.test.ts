import { combineLetters } from '../challenges/letterCombiner';

describe('Letter Combiner Tests', () => {
  test('should correctly combine letters from three strings of equal length', () => {
    expect(combineLetters('abc', '123', 'xyz')).toBe('a1xb2yc3z');
    expect(combineLetters('red', 'fox', 'had')).toBe('rfheoadxd');
    expect(combineLetters('AAA', 'BBB', 'CCC')).toBe('ABCABCABC');
  });

  test('should handle single character strings', () => {
    expect(combineLetters('a', '1', 'x')).toBe('a1x');
  });

  test('should handle empty strings', () => {
    expect(() => combineLetters('', '123', 'xyz')).toThrow();
    expect(() => combineLetters('abc', '', 'xyz')).toThrow();
    expect(() => combineLetters('abc', '123', '')).toThrow();
    expect(() => combineLetters('', '', '')).toThrow();
  });

  test('should throw error when strings are of different lengths', () => {
    expect(() => combineLetters('ab', '123', 'xyz')).toThrow();
    expect(() => combineLetters('abc', '12', 'xyz')).toThrow();
    expect(() => combineLetters('abc', '123', 'xy')).toThrow();
    expect(() => combineLetters('a', '12', 'xyz')).toThrow();
  });

  test('should handle null or undefined inputs', () => {
    expect(() => combineLetters(null as any, '123', 'xyz')).toThrow();
    expect(() => combineLetters('abc', undefined as any, 'xyz')).toThrow();
    expect(() => combineLetters('abc', '123', null as any)).toThrow();
  });

  test('should handle special characters and spaces', () => {
    expect(combineLetters('a b', '1-2', 'x y')).toBe('a1x - b2y');
  });

  test('should handle numbers as strings', () => {
    expect(combineLetters('123', '456', '789')).toBe('147258369');
  });
});