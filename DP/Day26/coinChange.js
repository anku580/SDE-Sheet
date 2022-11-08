/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * https://leetcode.com/problems/coin-change/
 * Time - O(N*T) N-number of coins, T-target
 * Space - O(N*T) + O(N+T)
 */
var coinChange = function (coins, amount) {
  const dp = [];
  for (let i = 0; i < coins.length; i++) {
    dp.push(new Array(amount + 1).fill(-1));
  }
  const ans = solve(0, amount, coins.length, coins, dp);

  return ans == Infinity ? -1 : ans;
};

const solve = (index, target, n, coins, dp) => {
  if (target == 0) {
    return 0;
  }

  if (index >= n || target < 0) {
    return Infinity;
  }

  if (dp[index][target] != -1) return dp[index][target];

  let pick = 1 + solve(index, target - coins[index], n, coins, dp);
  let notPick = solve(index + 1, target, n, coins, dp);

  return (dp[index][target] = Math.min(pick, notPick));
};

//iterative

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * https://leetcode.com/problems/coin-change/
 * Time - O(N*T) N-number of coins, T-target
 * Space - O(N*T)
 */
var coinChange = function (coins, amount) {
  const dp = [];
  const n = coins.length;
  for (let i = 0; i <= n; i++) {
    dp.push(new Array(amount + 1).fill(Infinity));
  }

  for (let i = 0; i <= n; i++) {
    dp[i][0] = 0;
  }

  for (let index = n - 1; index >= 0; index--) {
    for (let target = 0; target <= amount; target++) {
      let pick = Infinity;
      if (target - coins[index] >= 0)
        pick = 1 + dp[index][target - coins[index]];
      let notPick = dp[index + 1][target];

      dp[index][target] = Math.min(pick, notPick);
    }
  }

  return dp[0][amount] == Infinity ? -1 : dp[0][amount];
};
