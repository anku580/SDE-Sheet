/**
 * https://leetcode.com/problems/permutations/
 * @param {number[]} nums
 * @return {number[][]}
 * Time - O(N*N!)
 * Space - O(1) - ignoring the ans
 */
var permute = function (nums) {
  const ans = [];

  solve(0, nums, ans);

  return ans;
};

const swap = (i, j, nums) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};

const solve = (i, nums, ans) => {
  if (i == nums.length) {
    ans.push(nums);
    return;
  }

  for (let index = i; index < nums.length; index++) {
    //swap
    swap(i, index, nums);
    solve(i + 1, nums.slice(), ans);
    swap(i, index, nums);
  }
};
