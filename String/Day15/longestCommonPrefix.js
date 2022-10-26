/**
 * @param {string[]} strs
 * @return {string}
 * https://leetcode.com/problems/longest-common-prefix/
 * Time - O(N*M) M is the maximum lengths of string in strs array
 * Space - O(1)
 */
var longestCommonPrefix = function (strs) {
  let common = strs[0];

  for (let i = 1; i < strs.length; i++) {
    let j = 0,
      k = 0;
    while (j < common.length && k < strs[i].length && common[j] == strs[i][k]) {
      j++;
      k++;
    }
    if (j != 0) {
      common = strs[i].substring(0, j);
    } else {
      common = "";
      break;
    }
  }

  return common;
};
