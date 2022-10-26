/**
 * @param {string} s
 * @return {string}
 * https://leetcode.com/problems/longest-palindromic-substring/
 * Time - O(N^2)
 * Space - O(1)
 */
var longestPalindrome = function (s) {
  const n = s.length;
  let maxLen = -1;
  let ans = "";

  for (let i = 0; i < n; i++) {
    //odd expansion
    let left = i - 1;
    let right = i + 1;

    while (left >= 0 && right < n && s[left] == s[right]) {
      left -= 1;
      right += 1;
    }

    left += 1;
    right -= 1;

    if (maxLen < right - left) {
      maxLen = right - left;
      ans = s.substring(left, right + 1);
    }

    //even expansion
    left = i;
    right = i + 1;

    while (left >= 0 && right < n && s[left] == s[right]) {
      left -= 1;
      right += 1;
    }

    left += 1;
    right -= 1;

    if (maxLen < right - left) {
      maxLen = right - left;
      ans = s.substring(left, right + 1);
    }
  }

  return ans;
};
