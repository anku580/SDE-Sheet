/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 * https://leetcode.com/problems/edit-distance/description/
 * Time - O(N*M)
 * Space - O(N*M) + O(N*M) (recursive space)
 */
var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;
  const dp = [];
  for (let i = 0; i < m; i++) dp.push(new Array(n).fill(-1));
  return solve(0, 0, word1, word2, m, n, dp);
};

const solve = (i, j, w1, w2, m, n, dp) => {
  //base case
  if (i >= m && j >= n) return 0;
  if (i >= m || j >= n) {
    if (j >= n) {
      //delete all the characters
      return m - i;
    }
    if (i >= m) {
      return n - j;
    }
  }

  if (dp[i][j] != -1) return dp[i][j];

  let ans = Infinity;
  if (w1[i] == w2[j]) {
    ans = Math.min(ans, solve(i + 1, j + 1, w1, w2, m, n, dp));
  } else {
    ans =
      1 +
      Math.min(
        ans,
        solve(i, j + 1, w1, w2, m, n, dp),
        solve(i + 1, j, w1, w2, m, n, dp),
        solve(i + 1, j + 1, w1, w2, m, n, dp)
      );
  }

  return (dp[i][j] = ans);
};

//iterative

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 * https://leetcode.com/problems/edit-distance/description/
 * Time - O(N*M)
 * Space - O(N*M)
 */
var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;
  const dp = [];
  for (let i = 0; i <= m; i++) dp.push(new Array(n + 1).fill(0));

  //base cases
  for (let i = 0; i <= m; i++) {
    dp[i][n] = m - i;
  }

  for (let i = 0; i <= n; i++) {
    dp[m][i] = n - i;
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      let ans = Infinity;
      if (word1[i] == word2[j]) {
        ans = Math.min(ans, dp[i + 1][j + 1]);
      } else {
        ans = 1 + Math.min(ans, dp[i][j + 1], dp[i + 1][j], dp[i + 1][j + 1]);
      }

      dp[i][j] = ans;
    }
  }

  return dp[0][0];
};
