/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * Time - O(log(m*n))
 * Space - O(1)
 */
var searchMatrix = function (matrix, target) {
  const rows = matrix.length,
    cols = matrix[0].length;
  let left = 0,
    right = rows * cols - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    const element = matrix[Math.floor(middle / cols)][middle % cols];

    if (target == element) return true;
    if (element > target) right = middle - 1;
    else left = middle + 1;
  }

  return false;
};
