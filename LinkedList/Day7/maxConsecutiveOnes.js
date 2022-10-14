/**
 * https://leetcode.com/problems/max-consecutive-ones/
 * @param {number[]} nums
 * @return {number}
 * Time - O(n)
 * Space - O(1)
 */
var findMaxConsecutiveOnes = function (nums) {
  let maxi = 0;
  let runningMax = 0;

  for (let n of nums) {
    if (n == 0) runningMax = 0;
    else runningMax += 1;

    maxi = Math.max(runningMax, maxi);
  }

  return maxi;
};
