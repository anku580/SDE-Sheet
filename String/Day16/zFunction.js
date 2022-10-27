/**
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * Time and space - Same as of Robin karp
 */

const generateHash = (i, j, s, len) => {
  let hash = 0;
  for (let k = i; k <= j; k++) {
    const c = s.charCodeAt(k) - "a".charCodeAt(0);
    hash += c * Math.pow(26, len);
    len -= 1;
  }

  return hash;
};

var strStr = function (haystack, needle) {
  const base = "a".charCodeAt(0);
  if (needle.length > haystack.length) return -1;

  const ansLen = needle.length - 1;
  const ansCode = generateHash(0, ansLen, needle, ansLen);
  let rollingCode = generateHash(0, ansLen, haystack, ansLen);

  if (rollingCode == ansCode) return 0;

  for (let i = 1; i < haystack.length; i++) {
    rollingCode =
      (rollingCode -
        (haystack.charCodeAt(i - 1) - base) * Math.pow(26, ansLen)) *
        26 +
      (haystack.charCodeAt(i + ansLen) - base);

    if (rollingCode == ansCode) return i;
  }

  return -1;
};
