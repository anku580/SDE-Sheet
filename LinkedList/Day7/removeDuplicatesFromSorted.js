/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array
 * @param {number[]} nums
 * @return {number}
 * Time - O(N)
 * Space - O(1)
 */
var removeDuplicates = function (nums) {
  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[i] != nums[j]) {
      i += 1;
      nums[i] = nums[j];
    }
  }

  return i + 1;
};
