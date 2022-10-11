/**
 * https://leetcode.com/problems/two-sum/submissions/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Time - O(n)
 * Space - O(n)
 */
var twoSum = function (nums, target) {
  const hmap = {};

  for (let i = 0; i < nums.length; i++) {
    hmap[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    const targetToFind = target - nums[i];
    const idx = hmap[targetToFind] || -1;
    if (idx != -1 && idx != i) return [i, idx];
  }
};
