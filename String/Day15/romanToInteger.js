/**
 * @param {string} s
 * @return {number}
 * https://leetcode.com/problems/roman-to-integer/
 * Time - O(N)
 * Space - O(1) - ignoring map space
 */
var romanToInt = function (s) {
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; ) {
    let first = s[i];
    let second = s[i + 1];

    if (first == "I" && (second == "V" || second == "X")) {
      total += map[second] - map[first];
      i = i + 2;
    } else if (first == "X" && (second == "L" || second == "C")) {
      total += map[second] - map[first];
      i = i + 2;
    } else if (first == "C" && (second == "D" || second == "M")) {
      total += map[second] - map[first];
      i = i + 2;
    } else {
      total += map[first];
      i += 1;
    }
  }

  return total;
};
