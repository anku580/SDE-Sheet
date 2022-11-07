/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
 * https://practice.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1
 * Time - O(N*N)
 * Space - O(N*N) + O(N) recursive stack space
 */

class Solution {
  matrixMultiplication(arr, n) {
    //your code here
    const dp = [];
    for (let i = 0; i < n; i++) {
      dp.push(new Array(n).fill(-1));
    }
    return this.solve(1, n - 1, arr, n, dp);
  }

  solve(i, j, arr, n, dp) {
    if (i == j) return 0;
    if (dp[i][j] != -1) return dp[i][j];
    let ans = Infinity;
    for (let k = i; k < j; k++) {
      ans = Math.min(
        ans,
        arr[i - 1] * arr[j] * arr[k] +
          this.solve(i, k, arr, n, dp) +
          this.solve(k + 1, j, arr, n, dp)
      );
    }

    return (dp[i][j] = ans);
  }
}
