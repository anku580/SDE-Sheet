/**
 * @param {number[][]} grid
 * @return {number}
 * https://leetcode.com/problems/minimum-path-sum/description/
 * Time - O(n*m)
 * Space - O(n*m) + O(n+m)
 */

var minPathSum = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const dp = [];
  for (let i = 0; i < rows; i++) {
    dp.push(new Array(cols).fill(-1));
  }
  return solve(0, 0, rows, cols, grid, dp);
};

const solve = (i, j, rows, cols, grid, dp) => {
  if (i == rows - 1 && j == cols - 1) {
    return grid[i][j];
  }

  if (i >= rows || j >= cols) {
    return Infinity;
  }

  if (dp[i][j] != -1) return dp[i][j];

  const down = solve(i + 1, j, rows, cols, grid, dp);
  const right = solve(i, j + 1, rows, cols, grid, dp);

  return (dp[i][j] = grid[i][j] + Math.min(down, right));
};

//iterative

/**
 * @param {number[][]} grid
 * @return {number}
 * https://leetcode.com/problems/minimum-path-sum/description/
 * Time - O(n*m)
 * Space - O(n*m)
 */

var minPathSum = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const dp = [];
  for (let i = 0; i <= rows; i++) {
    dp.push(new Array(cols + 1).fill(Infinity));
  }

  for (let i = rows - 1; i >= 0; i--) {
    for (let j = cols - 1; j >= 0; j--) {
      if (i == rows - 1 && j == cols - 1) {
        dp[i][j] = grid[i][j];
        continue;
      }
      const down = dp[i + 1][j];
      const right = dp[i][j + 1];

      dp[i][j] = grid[i][j] + Math.min(down, right);
    }
  }

  return dp[0][0];
};
