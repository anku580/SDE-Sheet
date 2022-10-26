/**
 * @param {string} s
 * @return {number}
 * https://leetcode.com/problems/string-to-integer-atoi
 * Time - O(N)
 * Space - O(1)
 */

const isNum = (inp) => {
  if (inp >= "0" && inp <= "9") return true;
  return false;
};

var myAtoi = function (s) {
  s = s.trim();
  let num = 0;
  let i = 0;
  let sign = 1;

  if (s[0] == "+" || s[0] == "-") {
    sign = s[0] == "+" ? 1 : -1;
    i++;
  }

  while (isNum(s[i])) {
    num = num * 10 + s[i].charCodeAt(0) - 48;
    i++;
  }

  num = num * sign;

  if (num < -2147483648) return -2147483648;
  if (num > 2147483647) return 2147483647;

  return num;
};
