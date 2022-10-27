/**
 * https://leetcode.com/problems/count-and-say/
 * @param {number} n
 * @return {string}
 * Time - O(n*len(ans))
 * Space - O(n) recursion stack space
 */
var countAndSay = function (n) {
  if (n == 1) return "1";

  const prevString = countAndSay(n - 1);
  let ans = "";
  let count = 1;
  let num = prevString[0];
  for (let i = 1; i < prevString.length; i++) {
    if (prevString[i - 1] == prevString[i]) {
      count += 1;
    } else {
      ans += count + num;
      count = 1;
      num = prevString[i];
    }
  }

  ans += count + num;

  return ans;
};
