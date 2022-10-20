/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * Time - O(log(n))
 * Space-  O(1)
 */
var search = function (nums, target) {
  let low = 0,
    high = nums.length - 1;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);

    if (nums[middle] == target) return middle;

    if (nums[middle] >= nums[low]) {
      //check in left half

      if (target >= nums[low] && target <= nums[middle]) {
        high = middle - 1;
      } else {
        low = middle + 1;
      }
    } else {
      //check in right half
      if (nums[middle] <= target && nums[high] >= target) {
        low = middle + 1;
      } else {
        high = middle - 1;
      }
    }
  }

  return -1;
};
