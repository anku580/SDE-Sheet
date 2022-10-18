/**
 * https://leetcode.com/problems/subsets-ii/
 * @param {number[]} nums
 * @return {number[][]}
 * Time - O(k * 2^n)
 * Space - O(n) Auxially stack space O(2^n*k)
 */
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  let subsets = [[]];

  solve(0, nums.length, nums, [], subsets);

  return subsets;
};

const solve = (index, n, nums, subset, subsets) => {
  if (index == n) {
    return;
  }

  for (let i = index; i < n; i++) {
    const isDuplicate = i > index && nums[i] == nums[i - 1];

    if (isDuplicate) continue;
    subset.push(nums[i]);
    subsets.push(subset.slice());
    solve(i + 1, n, nums, subset, subsets);
    subset.pop();
  }
};
