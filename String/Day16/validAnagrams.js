/**
 * https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Time - O(n)
 * space - O(256)
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) return false;

  const hmap = {};
  const aCode = "a".charCodeAt();

  for (let s1 of s) {
    const key = s1.charCodeAt() - aCode;
    const value = hmap[key] || 0;
    hmap[key] = value + 1;
  }

  for (let t1 of t) {
    const key = t1.charCodeAt() - aCode;
    const value = hmap[key] || 0;
    hmap[key] = value - 1;
  }

  for (let s1 of s) {
    const key = s1.charCodeAt() - aCode;
    if (hmap[key] != 0) return false;
  }

  return true;
};
