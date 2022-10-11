/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 * Time - O(n)
 * Space - O(n)
 */
var lengthOfLongestSubstring = function (s) {
  const hmap = {};
  let maxLen = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] in hmap) {
      start = Math.max(start, hmap[s[i]] + 1);
    }
    hmap[s[i]] = i;
    maxLen = Math.max(maxLen, i - start + 1);
  }

  return maxLen;
};
