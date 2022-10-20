/**
 * https://leetcode.com/problems/single-element-in-a-sorted-array/
 * @param {number[]} nums
 * @return {number}
 * Time - O(log(N))
 * Space - O(1)
 */
var singleNonDuplicate = function (nums) {
  let low = 0,
    high = nums.length - 2;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);

    //is present in left half?
    if (middle % 2 == 0) {
      //check for next
      if (nums[middle + 1] == nums[middle]) {
        //shrink left half
        low = middle + 1;
      } else {
        //shring right half
        high = middle - 1;
      }
    } else {
      //check for next
      if (nums[middle] == nums[middle - 1]) {
        //shrink left half
        low = middle + 1;
      } else {
        //shring right half
        high = middle - 1;
      }
    }
  }

  return nums[low];
};
