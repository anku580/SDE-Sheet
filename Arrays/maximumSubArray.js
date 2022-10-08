/**
 * https://leetcode.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 * Time - O(n)
 * Space - O(1)
 */
var maxSubArray = function (nums) {
  let runningMax = 0,
    maxSum = -Infinity;

  for (let n of nums) {
    runningMax += n;
    maxSum = Math.max(maxSum, runningMax);
    if (runningMax < 0) runningMax = 0;
  }

  return maxSum;
};
