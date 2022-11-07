/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
 * https://practice.geeksforgeeks.org/problems/maximum-sum-increasing-subsequence4749/1
 * Time - O(N^2)
 * Space - O(N^2) + O(N)(recursive)
 */

class Solution {
  maxSumIS(arr, n) {
    //code here
    const dp = [];
    for (let i = 0; i < n; i++) {
      dp.push(new Array(n + 1).fill(-1));
    }
    return this.solve(0, -1, n, arr, dp);
  }

  solve(index, prev, n, arr, dp) {
    if (index >= n) return 0;
    if (dp[index][prev + 1] != -1) return dp[index][prev + 1];

    let pick = 0;
    if (prev == -1 || (prev != -1 && arr[prev] < arr[index])) {
      pick = arr[index] + this.solve(index + 1, index, n, arr, dp);
    }

    let notPick = this.solve(index + 1, prev, n, arr, dp);

    return (dp[index][prev + 1] = Math.max(pick, notPick));
  }
}
