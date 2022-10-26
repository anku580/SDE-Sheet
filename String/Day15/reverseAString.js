/**
 * @param {string} s
 * @return {string}
 * https://leetcode.com/problems/reverse-words-in-a-string/
 * Time - O(n)
 * Space - O(n)
 */
var reverseWords = function (s) {
  s = s.trim();
  let left = 0,
    right = s.length - 1;
  let n = "";

  for (let i = right; i >= 0; i--) {
    while (i - 1 >= 0 && s[i] == " " && s[i - 1] == " ") i--;
    if (i == 0 && s[i] == " ") continue;
    n += s[i];
  }

  s = "";
  let idx = 0;
  for (let i = 0; i <= n.length; i++) {
    if (n[i] == " " || i == n.length) {
      s += reverse(idx, i - 1, n);
      idx = i + 1;
      if (i != n.length) s += " ";
    }
  }

  return s;
};

const reverse = (i, j, n) => {
  let a = "";
  for (let k = j; k >= i; k--) {
    a += n[k];
  }

  return a;
};

// eulb si yks eht
// blue is sky the
// elpmaxe   doog a
// example good a
