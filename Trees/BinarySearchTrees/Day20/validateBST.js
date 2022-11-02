/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * https://leetcode.com/problems/validate-binary-search-tree/
 * Time - O(N)
 * space - O(N)
 */
var isValidBST = function (root) {
  return solve(root, [-Infinity, Infinity]);
};

const solve = (root, range) => {
  if (root == null) return true;

  if (root.val <= range[0] || root.val >= range[1]) return false;

  return (
    solve(root.left, [range[0], root.val]) &&
    solve(root.right, [root.val, range[1]])
  );
};
