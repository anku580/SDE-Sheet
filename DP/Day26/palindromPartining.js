/**
 * * @param {string} S
 * @returns {number}
 * https://practice.geeksforgeeks.org/problems/palindromic-patitioning4845/1
 * Time - O(N*N)
 * Space - O(N) + O(N) recursive
 */

class Solution {
  palindromicPartition(S) {
    //your code here
    const isPalindrome = (i, j, string) => {
      while (i < j) {
        if (string[i] != string[j]) return false;
        i++;
        j--;
      }

      return true;
    };

    const solve = (i, j, string, n, dp) => {
      if (i == n) return 0;

      if (dp[i] != -1) return dp[i];
      let minCuts = Infinity;

      for (let k = i; k <= j; k++) {
        if (isPalindrome(i, k, string)) {
          //cut
          minCuts = Math.min(minCuts, 1 + solve(k + 1, j, string, n, dp));
        }
      }

      return (dp[i] = minCuts);
    };

    const dp = new Array(S.length).fill(-1);
    return solve(0, S.length - 1, S, S.length, dp) - 1;
  }
}

//iterative

/**
 * @param {string} S
 * @returns {number}
 * https://practice.geeksforgeeks.org/problems/palindromic-patitioning4845/1
 * Time - O(N*N)
 * Space - O(N)
 */

class Solution {
  palindromicPartition(S) {
    //your code here
    const isPalindrome = (i, j, string) => {
      while (i < j) {
        if (string[i] != string[j]) return false;
        i++;
        j--;
      }

      return true;
    };

    const dp = new Array(S.length + 1).fill(0);

    const n = S.length;
    for (let i = S.length - 1; i >= 0; i--) {
      let minCuts = Infinity;
      for (let k = i; k <= n - 1; k++) {
        if (isPalindrome(i, k, S)) {
          //cut
          minCuts = Math.min(minCuts, 1 + dp[k + 1]);
        }
      }

      dp[i] = minCuts;
    }

    return dp[0] - 1;
  }
}
