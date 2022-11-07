/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/maximum-product-subarray/
 * Time - O(N)
 * Space - O(N)
 */
var maxProduct = function (nums) {
  let min = 1,
    max = 1;
  let ans = Math.max(...nums);

  for (let n of nums) {
    const temp = max * n;
    max = Math.max(min * n, max * n, n);
    min = Math.min(min * n, temp, n);

    ans = Math.max(ans, max);
  }

  return ans;
};
