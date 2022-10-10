/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * Time - O(n^2)
 * Space - O(1)
 */
var rotate = function (matrix) {
  const rows = matrix.length;
  let left = 0,
    right = rows - 1;

  while (left < right) {
    let startRow = left,
      startCol = left,
      endRow = right,
      endCol = right;

    for (let index = 0; index < right - left; index++) {
      let temp = matrix[startRow][startCol + index];

      matrix[startRow][startCol + index] = matrix[endRow - index][startCol];
      matrix[endRow - index][startCol] = matrix[endRow][endCol - index];
      matrix[endRow][endCol - index] = matrix[startRow + index][endCol];
      matrix[startRow + index][endCol] = temp;
    }
    left++;
    right--;
  }

  return matrix;
};
