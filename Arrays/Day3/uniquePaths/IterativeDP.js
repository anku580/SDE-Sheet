/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = [];

  for (let i = 0; i <= m; i++) {
    dp.push(new Array(n + 1).fill(0));
  }

  for (let i = 0; i < m; i++) {
    dp[i][n - 1] = 1;
  }
  for (let i = 0; i < n; i++) {
    dp[m - 1][i] = 1;
  }

  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 2; j >= 0; j--) {
      const down = dp[i + 1][j];
      const right = dp[i][j + 1];

      dp[i][j] = down + right;
    }
  }

  return dp[0][0];
};
