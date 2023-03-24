import { extractTypes, extractStats } from "utils";

describe('pokemon types utils', () => {
  it('should be able to return class based on pokemon types', () => {
    expect(extractTypes("fire")).toBe("bg-fire text-gray-50");
  });

  it('should be able to return default class if pokemon types is empty', () => {
    expect(extractTypes()).toBe("bg-normal text-gray-50");
  });

  it('should be able to return class base on pokemon stats', () => {
    expect(extractStats("speed")).toBe("green");
  });

  it('should be able to return default class if pokemon stats is empty', () => {
    expect(extractStats()).toBe("red");
  });
});