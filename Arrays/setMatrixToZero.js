// https://leetcode.com/problems/set-matrix-zeroes/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * Time Complexity O(m*n)*max(Math.max(m, n))
 * Space Complexity O(m*n)
 */
var setZeroes = function (matrix) {
  const positions = [];
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] == 0) {
        positions.push([i, j]);
      }
    }
  }

  for (let position of positions) {
    const [row, col] = position;

    for (let i = 0; i < rows; i++) {
      matrix[i][col] = 0;
    }

    for (let i = 0; i < cols; i++) {
      matrix[row][i] = 0;
    }
  }

  return matrix;
};

/*
 Optimised solution
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * Time O(m*n + m*n)
 * Space O(Math.max(m, n))
 */
var setZeroes = function (matrix) {
  const positions = [];
  const rows = matrix.length;
  const cols = matrix[0].length;
  const arrR = new Array(rows).fill(-1);
  const arrC = new Array(cols).fill(-1);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] == 0) {
        arrR[i] = 0;
        arrC[j] = 0;
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (arrR[i] == 0 || arrC[j] == 0) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};
