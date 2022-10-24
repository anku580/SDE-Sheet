/**
 * https://leetcode.com/problems/next-greater-element-ii
 * @param {number[]} nums
 * @return {number[]}
 * Time - O(n)
 * space - O(n)
 */
var nextGreaterElements = function (nums) {
  const n = nums.length;
  const nextG = new Array(n).fill(-1);
  let stack = [];

  for (let i = 2 * n - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= nums[i % n]) {
      stack.pop();
    }

    if (i < n && stack.length) {
      nextG[i] = stack[stack.length - 1];
    }

    stack.push(nums[i % n]);
  }

  return nextG;
};
