/**
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * Time - O(m+n) m - length of haystack, n - length of needle
 * space - O(n)
 */

const generateLPS = (needle) => {
  const n = needle.length;
  const LPS = new Array(n).fill(0);
  let prevLPS = 0,
    i = 1;

  while (i < n) {
    if (needle[prevLPS] == needle[i]) {
      LPS[i] = prevLPS + 1;
      prevLPS += 1;
      i += 1;
    } else {
      if (prevLPS == 0) {
        LPS[i] = 0;
        i += 1;
      } else {
        prevLPS = LPS[prevLPS - 1];
      }
    }
  }

  return LPS;
};

var strStr = function (haystack, needle) {
  const LPS = generateLPS(needle);

  let i = 0,
    j = 0;
  const n = haystack.length;

  while (i < n) {
    if (haystack[i] == needle[j]) {
      i += 1;
      j += 1;

      if (j == needle.length) {
        //first ocurrence found
        return i - needle.length;
      }
    } else {
      if (j == 0) {
        i += 1;
      } else j = LPS[j - 1];
    }
  }

  return -1;
};
