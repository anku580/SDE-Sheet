/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree
 * Time - O(n*log(n))
 * Space - O(n)
 */
var sortedArrayToBST = function (nums) {
  const n = nums.length;

  return solve(0, n - 1, nums);
};

const solve = (l, r, nums) => {
  if (l <= r) {
    const middle = Math.floor((l + r + 1) / 2);

    const node = new TreeNode(nums[middle]);
    node.left = solve(l, middle - 1, nums);
    node.right = solve(middle + 1, r, nums);

    return node;
  }

  return null;
};
