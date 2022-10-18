/**
 * https://leetcode.com/problems/palindrome-partitioning/
 * @param {string} s
 * @return {string[][]}
 * Time - O(2^n*n/2*k) k - inserting operation, n - is the max length, n/2 for palindrome check
 * Space - O(k*x)
 */
var partition = function (s) {
  const ans = [];

  solve(0, s.length, s, [], ans);

  return ans;
};

const isPalindrome = (start, end, s) => {
  while (start < end) {
    if (s[start] != s[end]) return false;
    start += 1;
    end -= 1;
  }

  return true;
};

const solve = (index, n, s, comb, ans) => {
  if (index == n) {
    ans.push(comb);
    return;
  }

  for (let i = index; i < n; i++) {
    if (isPalindrome(index, i, s)) {
      solve(i + 1, n, s, [...comb, s.substring(index, i + 1)], ans);
    }
  }
};
