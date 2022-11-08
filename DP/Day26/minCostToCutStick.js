/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 * https://leetcode.com/problems/minimum-cost-to-cut-a-stick/
 * Time - O((N+2)*(N+2)*M)
 * Space - O((N+2)*(N+2)) + O((N+2)+(N+2))
 */
var minCost = function (n, cuts) {
  cuts.sort((a, b) => a - b);
  cuts = [0, ...cuts, n];
  const dp = [];
  for (let i = 0; i < cuts.length; i++)
    dp.push(new Array(cuts.length).fill(-1));
  return solve(1, cuts.length - 1, cuts, n, dp);
};

const solve = (i, j, cuts, n, dp) => {
  if (i == j) {
    return 0;
  }
  if (dp[i][j] != -1) return dp[i][j];
  let minCost = Infinity;
  for (let k = i; k < j; k++) {
    const cost = cuts[k] - cuts[i - 1] + (cuts[j] - cuts[k]);
    minCost = Math.min(
      minCost,
      cost + solve(i, k, cuts, n, dp) + solve(k + 1, j, cuts, n, dp)
    );
  }

  return (dp[i][j] = minCost);
};

// ITERATIVE

/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 * https://leetcode.com/problems/minimum-cost-to-cut-a-stick/
 * Time - O((N+2)*(N+2)*M)
 * Space - O((N+2)*(N+2))
 */
var minCost = function (n, cuts) {
  cuts.sort((a, b) => a - b);
  cuts = [0, ...cuts, n];
  const dp = [];
  for (let i = 0; i < cuts.length; i++) dp.push(new Array(cuts.length).fill(0));
  const newLen = cuts.length;

  for (let i = newLen - 1; i >= 1; i--) {
    for (let j = 0; j < newLen; j++) {
      if (i == j) {
        continue;
      }
      let minCost = Infinity;
      for (let k = i; k < j; k++) {
        const cost = cuts[k] - cuts[i - 1] + (cuts[j] - cuts[k]);
        minCost = Math.min(minCost, cost + dp[i][k] + dp[k + 1][j]);
      }

      dp[i][j] = minCost;
    }
  }

  return dp[1][newLen - 1];
};
