/**
 * @param {number} n
 * @param {number} k
 * @returns {number}
 * https://practice.geeksforgeeks.org/problems/egg-dropping-puzzle-1587115620/1
 * Time - O(N*K*K)
 * Space - O(N*K) + O(N + K) recursive
 */

class Solution {
  //Function to find minimum number of attempts needed in
  //order to find the critical floor.
  eggDrop(n, k) {
    // code here
    const dp = [];
    for (let i = 0; i <= n; i++) {
      dp.push(new Array(k + 1).fill(-1));
    }
    return this.solve(n, k, dp);
  }

  solve(eggs, floor, dp) {
    if (floor == 0 || floor == 1) return 1;

    if (eggs == 1) return floor;
    if (dp[eggs][floor] != -1) return dp[eggs][floor];

    let minAttempts = Infinity;
    for (let k = 1; k <= floor; k++) {
      const ans =
        1 +
        Math.max(
          this.solve(eggs - 1, k - 1, dp),
          this.solve(eggs, floor - k, dp)
        );

      minAttempts = Math.min(minAttempts, ans);
    }

    return (dp[eggs][floor] = minAttempts);
  }
}
