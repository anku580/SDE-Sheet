/**
 * https://leetcode.com/problems/next-permutation
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * Time - 3*O(n)
 * Space - O(1)
 */

const swap = (i, j, nums) => {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};

const reverse = (index, n, nums) => {
  let left = index + 1;
  let right = n - 1;

  while (left < right) {
    let temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
    left++;
    right--;
  }
};

var nextPermutation = function (nums) {
  let n = nums.length;
  let index1 = n - 2,
    index2 = n - 1;

  while (nums[index1] >= nums[index1 + 1]) {
    index1--;
  }

  if (index1 >= 0) {
    while (index2 > index1 && nums[index1] >= nums[index2]) {
      index2--;
    }
    //swap index1 and index2
    swap(index1, index2, nums);
  }

  reverse(index1, n, nums);

  return nums;
};
