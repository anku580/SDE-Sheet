/**
 * https://leetcode.com/problems/unique-paths/submissions/
 * @param {number} m
 * @param {number} n
 * @return {number}
 * Space - O(n) + O(n)
 * Time - O(m*n)
 */
var uniquePaths = function (m, n) {
  let curr = new Array(n).fill(0);
  let next = new Array(n).fill(1);

  curr[n - 1] = 1;

  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 2; j >= 0; j--) {
      const down = next[j];
      const right = curr[j + 1];

      curr[j] = down + right;
    }
    next = curr;
  }

  return next[0];
};
