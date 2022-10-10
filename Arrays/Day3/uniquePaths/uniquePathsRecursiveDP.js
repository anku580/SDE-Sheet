/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = [];
  for (let i = 0; i <= m; i++) {
    dp.push(new Array(n + 1).fill(-1));
  }
  return totalPaths(0, 0, m, n, dp);
};

const totalPaths = (i, j, m, n, dp) => {
  //Desitnation
  if (i == m - 1 && j == n - 1) {
    return 1;
  }

  //Out of bounds
  if (i >= m || j >= n) return 0;

  if (dp[i][j] != -1) return dp[i][j];

  const down = totalPaths(i + 1, j, m, n, dp);
  const right = totalPaths(i, j + 1, m, n, dp);

  return (dp[i][j] = down + right);
};
