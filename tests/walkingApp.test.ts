import { isValidWalk } from '../challenges/walkingApp';

describe('Walking App Tests', () => {
  test('should return true for valid walks that take exactly 10 minutes and return to start', () => {
    expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])).toBe(true);
    expect(isValidWalk(['e','w','e','w','e','w','e','w','e','w'])).toBe(true);
    expect(isValidWalk(['n','e','s','w','n','e','s','w','n','s'])).toBe(true);
    expect(isValidWalk(['n','w','s','e','n','w','s','e','n','s'])).toBe(true);
  });

  test('should return false for walks that do not take exactly 10 minutes', () => {
    // Too short
    expect(isValidWalk(['n','s','n','s'])).toBe(false);
    expect(isValidWalk(['n','s','n','s','n','s','n','s','n'])).toBe(false);
    
    // Too long
    expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s','n'])).toBe(false);
    expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s','n','s'])).toBe(false);
  });

  test('should return false for walks that do not return to starting point', () => {
    expect(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])).toBe(false);
    expect(isValidWalk(['n','s','n','s','n','s','n','s','e','w'])).toBe(true);
    expect(isValidWalk(['n','s','e','w','n','s','e','w','e','e'])).toBe(false);
    expect(isValidWalk(['n','s','e','e','e','e','e','w','w','w'])).toBe(false);
  });

  test('should handle mixed directional walks correctly', () => {
    expect(isValidWalk(['n','e','n','e','s','w','s','w','n','s'])).toBe(true);
    expect(isValidWalk(['n','e','n','e','n','e','n','e','n','e'])).toBe(false);
    expect(isValidWalk(['s','e','s','e','s','e','s','e','s','e'])).toBe(false);
    expect(isValidWalk(['n','e','s','w','w','e','n','s','e','w'])).toBe(true);
  });
});