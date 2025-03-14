import { generateAcronym } from '../challenges/acronymGenerator';

describe('Acronym Generator Tests', () => {
  test('should generate correct acronyms for simple names', () => {
    expect(generateAcronym('John Doe')).toBe('JD');
    expect(generateAcronym('Jane Smith')).toBe('JS');
    expect(generateAcronym('Robert Johnson')).toBe('RJ');
    expect(generateAcronym('Mary Williams')).toBe('MW');
  });

  test('should handle names with more than two words', () => {
    expect(generateAcronym('John Robert Doe')).toBe('JRD');
    expect(generateAcronym('Jane Mary Smith')).toBe('JMS');
    expect(generateAcronym('Michael Joseph Jackson')).toBe('MJJ');
    expect(generateAcronym('Thomas Alva Edison')).toBe('TAE');
  });

  test('should handle hyphenated names', () => {
    expect(generateAcronym('Ann-Marie Jones')).toBe('AMJ');
    expect(generateAcronym('Jean-Claude Van Damme')).toBe('JCVD');
    expect(generateAcronym('Olivia Newton-John')).toBe('ONJ');
    expect(generateAcronym('John-Paul Smith-Jones')).toBe('JPSJ');
  });

  test('should handle names with "von" correctly', () => {
    expect(generateAcronym('Ludwig von Beethoven')).toBe('LvB');
    expect(generateAcronym('Alexander von Humboldt')).toBe('AvH');
    expect(generateAcronym('Werner von Braun')).toBe('WvB');
    expect(generateAcronym('Richard von Meyer')).toBe('RvM');
  });

  test('should handle names with mixed case', () => {
    expect(generateAcronym('jOhN dOe')).toBe('JD');
    expect(generateAcronym('JANE SMITH')).toBe('JS');
    expect(generateAcronym('robert JOHNSON')).toBe('RJ');
  });

  test('should handle whitespace and trim input', () => {
    expect(generateAcronym('  John   Doe  ')).toBe('JD');
    expect(generateAcronym('\t Jane Smith \n')).toBe('JS');
    expect(generateAcronym('   Robert    Johnson   ')).toBe('RJ');
  });

  test('should handle empty, null or invalid inputs', () => {
    expect(generateAcronym('')).toBe('');
    expect(generateAcronym('   ')).toBe('');
    expect(generateAcronym(null as any)).toBe('');
    expect(generateAcronym(undefined as any)).toBe('');
  });

  test('should handle complex cases with multiple special scenarios', () => {
    expect(generateAcronym('Jean-Michel von Beethoven')).toBe('JMvB');
    expect(generateAcronym('Anna-Maria von Schmidt-Weber')).toBe('AMvSW');
    expect(generateAcronym('Karl-Heinz von Leyen')).toBe('KHvL');
    expect(generateAcronym('Hans von Müller')).toBe('HvM');
    expect(generateAcronym('Maria von Trapp')).toBe('MvT');
  });
});