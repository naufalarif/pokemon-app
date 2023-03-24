import { dateUtils, extractNumber, firstUpperCase, removeSymbol } from "utils";

describe('text format utils', () => {
  it('should make first letter upper case', () => {
    expect(firstUpperCase("pokemon")).toBe("Pokemon");
  });

  it('should remove a symbol', () => {
    expect(removeSymbol("pokemon-plus#one")).toBe("pokemon plus one");
  });

  it('should return number format 002', () => {
    expect(extractNumber(2)).toBe('002');
  });

  it('should return number format 021', () => {
    expect(extractNumber(21)).toBe('021');
  });

  it('should return number format 212', () => {
    expect(extractNumber(212)).toBe(212);
  });

  const current = new Date();
  it('shoulde be able to return Today date format', () => {
    expect(dateUtils(current)).toBe("Today");
  });

  it('should be able to return Yesterday date format', () => {
    const yesterday = current - 86400000;
    expect(dateUtils(yesterday)).toBe("Yesterday");
  });

  it('should be able to return date format', () => {
    const twoDaysAgo = new Date(current - (86400000 * 2));
    expect(dateUtils(twoDaysAgo)).toBe("Wed Mar 22 2023");
  });
});