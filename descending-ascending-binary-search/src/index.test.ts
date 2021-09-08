import { binarySearch, findIndex, findPivotIndex } from "./index";
describe("findIndex", () => {
  it("returns -1 if array is empty", () => {
    expect(findIndex([], 3)).toBe(-1);
  });
  it("returns -1 if element is not in array", () => {
    expect(findIndex([1], 3)).toBe(-1);
  });
  it("returns 0 if element is first element", () => {
    expect(findIndex([3], 3)).toBe(0);
  });
  it("returns the array.length - 1 if element is last element", () => {
    expect(findIndex([2, 3], 3)).toBe(1);
  });

  it("tests different scenarious", () => {
    expect(findIndex([10, 9, 8, 7, 6, 7, 8, 9, 10], 9)).toBe(1);
    expect(findIndex([10, 9, 7, 6, 7, 8, 9, 10], 8)).toBe(5);
    expect(findIndex([7, 6, 7, 8, 9, 10], 8)).toBe(3);
    expect(findIndex([10, 9, 8, 6, 7], 9)).toBe(1);
    expect(findIndex([10, 9, 8, 6, 7], 7)).toBe(4);
    expect(findIndex([10, 9, 8, 6, 7], 6)).toBe(3);
    expect(findIndex([10, 9, 8, 6, 7], 5)).toBe(-1);
    expect(findIndex([10, 9, 8, 6, 7], 11)).toBe(-1);
  });
});

describe("findPivotIndex", () => {
  it("return -1 if array is empty", () => {
    expect(findPivotIndex([])).toBe(-1);
  });
  it("returns array.length - 1 if array is full descending", () => {
    expect(findPivotIndex([9, 8, 7, 4, 3, 1])).toBe(5);
  });
  it("returns 0 if array is full ascending", () => {
    expect(findPivotIndex([1, 2, 5, 6, 7])).toBe(0);
  });

  it("returns pivot position if array is descending and then ascending", () => {
    expect(findPivotIndex([5, 4, 3, 5, 6, 7])).toBe(2);
  });
});

describe("binarySearch", () => {
  describe("ascending", () => {
    it("return -1 if array is empty", () => {
      expect(binarySearch([], 3)).toBe(-1);
    });

    it("return -1 if element does not exist in array", () => {
      expect(binarySearch([2], 3)).toBe(-1);
    });

    it("return 0 if element is first element in array", () => {
      expect(binarySearch([3, 4], 3)).toBe(0);
    });

    it("return array.length - 1 if element is last element in array", () => {
      expect(binarySearch([2, 3], 3)).toBe(1);
    });

    it("return index of ascending array", () => {
      expect(binarySearch([2, 3, 5, 8, 9, 13], 8)).toBe(3);
    });
  });
  describe("descending", () => {
    it("return -1 if array is empty", () => {
      expect(binarySearch([], 3, false)).toBe(-1);
    });

    it("return -1 if element does not exist in array", () => {
      expect(binarySearch([2], 3, false)).toBe(-1);
    });

    it("return 0 if element is first element in array", () => {
      expect(binarySearch([3, 2], 3, false)).toBe(0);
    });

    it("return array.length - 1 if element is last element in array", () => {
      expect(binarySearch([4, 3], 3, false)).toBe(1);
    });
    it("return index of descending array", () => {
      expect(binarySearch([13, 9, 8, 5, 3, 2], 8)).toBe(2);
    });
  });
});
