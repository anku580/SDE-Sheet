/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 * https://leetcode.com/problems/longest-common-subsequence/description/
 * Time - O(n*m)
 * Space - O(n*m) + recursive space
 */
var longestCommonSubsequence = function (text1, text2) {
  const dp = [];
  const n = text1.length;
  const m = text2.length;
  for (let i = 0; i < n; i++) {
    dp.push(new Array(m).fill(-1));
  }
  return solve(0, 0, n, m, text1, text2, dp);
};

const solve = (i, j, n, m, text1, text2, dp) => {
  if (i >= n || j >= m) {
    return 0;
  }

  if (dp[i][j] != -1) return dp[i][j];

  let pick = 0;
  if (text1[i] == text2[j]) {
    pick = 1 + solve(i + 1, j + 1, n, m, text1, text2, dp);
  }
  let notPick = Math.max(
    solve(i + 1, j, n, m, text1, text2, dp),
    solve(i, j + 1, n, m, text1, text2, dp)
  );

  return (dp[i][j] = Math.max(pick, notPick));
};

// iterative

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 * https://leetcode.com/problems/longest-common-subsequence/description/
 * Time - O(n*m)
 * Space - O(n*m)
 */
var longestCommonSubsequence = function (text1, text2) {
  const dp = [];
  const n = text1.length;
  const m = text2.length;

  for (let i = 0; i <= n; i++) {
    dp.push(new Array(m + 1).fill(0));
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      let pick = 0;
      if (text1[i] == text2[j]) {
        pick = 1 + dp[i + 1][j + 1];
      }
      let notPick = Math.max(dp[i + 1][j], dp[i][j + 1]);

      dp[i][j] = Math.max(pick, notPick);
    }
  }
  return dp[0][0];
};
