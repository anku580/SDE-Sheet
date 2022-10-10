/**
 * https://leetcode.com/problems/sort-colors/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * Time - O(n)
 * Space - O(1)
 */

const swap = (i, j, nums) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};

var sortColors = function (nums) {
  let low = 0,
    mid = 0,
    high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] == 0) {
      swap(mid, low, nums);
      low++;
      mid++;
    } else if (nums[mid] == 1) {
      mid++;
    } else {
      swap(mid, high, nums);
      high--;
    }
  }
};
