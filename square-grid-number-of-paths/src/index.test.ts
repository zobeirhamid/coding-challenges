import numberOfPaths, { binomialCoefficientMethod } from "./index";

describe("numberOfPaths", () => {
  it("test empty case", () => {
    expect(numberOfPaths(0)).toBe(1);
  });
  it("test n = 1", () => {
    expect(numberOfPaths(1)).toBe(2);
  });
  it("test n = 2", () => {
    expect(numberOfPaths(2)).toBe(6);
  });
  it("test n = 3", () => {
    expect(numberOfPaths(3)).toBe(20);
  });
  it("test n = 4", () => {
    expect(numberOfPaths(4)).toBe(70);
  });
  it("test n = 5", () => {
    expect(numberOfPaths(5)).toBe(252);
  });
  it("test n = 6", () => {
    expect(numberOfPaths(6)).toBe(924);
  });
  it("test n = 7", () => {
    expect(numberOfPaths(7)).toBe(3432);
  });
});

describe("binomialCoefficientMethod", () => {
  it("test empty case", () => {
    expect(binomialCoefficientMethod(0)).toBe(1);
  });
  it("test n = 1", () => {
    expect(binomialCoefficientMethod(1)).toBe(2);
  });
  it("test n = 2", () => {
    expect(binomialCoefficientMethod(2)).toBe(6);
  });
  it("test n = 3", () => {
    expect(binomialCoefficientMethod(3)).toBe(20);
  });
  it("test n = 4", () => {
    expect(binomialCoefficientMethod(4)).toBe(70);
  });
  it("test n = 5", () => {
    expect(binomialCoefficientMethod(5)).toBe(252);
  });
  it("test n = 6", () => {
    expect(binomialCoefficientMethod(6)).toBe(924);
  });
  it("test n = 7", () => {
    expect(binomialCoefficientMethod(7)).toBe(3432);
  });
});
