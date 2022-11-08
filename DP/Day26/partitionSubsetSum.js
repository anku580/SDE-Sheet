/**
 * @param {number[]} nums
 * @return {boolean}
 * https://leetcode.com/problems/partition-equal-subset-sum/description/
 * Time - O(N*T) T-target length
 * Space - O(N*T) + O(N+T)
 */
var canPartition = function (nums) {
  let total = 0;
  for (let n of nums) total += n;
  const n = nums.length;
  const dp = [];
  const target = total / 2;

  if (total % 2 != 0) return false;

  for (let i = 0; i < n; i++) dp.push(new Array(target + 1).fill(-1));

  return solve(0, target, nums, n, dp);
};

const solve = (index, target, nums, n, dp) => {
  if (target == 0) {
    return true;
  }

  if (target < 0 || index >= n) {
    return false;
  }

  if (dp[index][target] != -1) return dp[index][target];

  return (dp[index][target] =
    solve(index + 1, target - nums[index], nums, n, dp) ||
    solve(index + 1, target, nums, n, dp));
};

// iterative

/**
 * @param {number[]} nums
 * @return {boolean}
 * https://leetcode.com/problems/partition-equal-subset-sum/description/
 * Time - O(N*T) T-target length
 * Space - O(N*T)
 */
var canPartition = function (nums) {
  let total = 0;
  for (let n of nums) total += n;
  const n = nums.length;
  const dp = [];
  const t = total / 2;

  if (total % 2 != 0) return false;

  for (let i = 0; i <= n; i++) dp.push(new Array(t + 1).fill(0));

  for (let i = 0; i <= n; i++) {
    dp[i][0] = 1;
  }

  for (let index = n - 1; index >= 0; index--) {
    for (let target = 0; target <= t; target++) {
      dp[index][target] =
        (target - nums[index] >= 0 && dp[index + 1][target - nums[index]]) ||
        dp[index + 1][target];
    }
  }

  return dp[0][t];
};
