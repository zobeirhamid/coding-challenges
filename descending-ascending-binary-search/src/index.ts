// Write a function which returns the index of an element in an array. If the element does not exist in the array, return -1.
// The elements of the array are integers and are descending until a pivot point where the elements starts to ascend.

export function findPivotIndex(
  array: number[],
  start = 0,
  end = array.length - 1
): number {
  if (start >= end) return end;

  const pivot = Math.floor((start + end) / 2);

  const pivotElement = array[pivot];
  const leftElement = array[pivot - 1];
  const rightElement = array[pivot + 1];

  if (pivot === start) {
    return pivotElement < rightElement ? start : end;
  }

  if (pivotElement < leftElement && pivotElement < rightElement) return pivot;

  if (pivotElement < leftElement && pivotElement > rightElement)
    return findPivotIndex(array, pivot, end);

  return findPivotIndex(array, start, pivot);
}

export function binarySearch(
  array: number[],
  element: number,
  ascending = true,
  start = 0,
  end = array.length - 1
): number {
  const pivot = Math.floor((start + end) / 2);

  if (start > end) return -1;

  if (array[pivot] === element) return pivot;

  if (array[pivot] < element)
    if (ascending)
      return binarySearch(array, element, ascending, pivot + 1, end);
    else return binarySearch(array, element, ascending, start, pivot - 1);

  if (ascending) {
    return binarySearch(array, element, ascending, start, pivot - 1);
  }
  return binarySearch(array, element, ascending, pivot + 1, end);
}

export function findIndex(array: number[], element: number): number {
  if (array.length > 0) {
    const pivot = findPivotIndex(array);
    if (array[0] < element) {
      return binarySearch(array, element, true, pivot);
    }
    if (array[array.length - 1] < element) {
      return binarySearch(array, element, false, 0, pivot);
    }

    let index = binarySearch(array, element, false, 0, pivot);
    if (index !== -1) return index;
    return binarySearch(array, element, true, pivot);
  }
  return -1;
}
