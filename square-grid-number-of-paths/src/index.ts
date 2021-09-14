// You are given a n*n square grid. Find the number of paths from the bottom right corner to the top left corner with the restriction of only moving left and top.

export default function numberOfPaths(n: number): number {
  const paths: number[][] = [];

  function numberOfPathsWithPosition(row: number, column: number): number {
    if (row === 0 && column === 0) return 1;
    if (row < 0 || column < 0) return 0;
    if (paths[row][column] !== undefined) return paths[row][column];

    return (
      numberOfPathsWithPosition(row - 1, column) +
      numberOfPathsWithPosition(row, column - 1)
    );
  }

  for (let i = 0; i < n + 1; i++) {
    paths[i] = [];
    for (let j = 0; j < n + 1; j++) {
      paths[i][j] = numberOfPathsWithPosition(i, j);
    }
  }

  return paths[n][n];
}

export function binomialCoefficientMethod(n: number): number {
  function factorial(a: number) {
    let result = 1;
    for (let i = 1; i < a + 1; i++) {
      result *= i;
    }
    return result;
  }

  return factorial(n * 2) / (factorial(n) * factorial(n));
}
