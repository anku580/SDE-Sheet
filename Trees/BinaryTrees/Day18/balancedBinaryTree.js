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
 * https://leetcode.com/problems/balanced-binary-tree/
 * Time - O(N)
 * Space - O(N)
 */
var isBalanced = function (root) {
  return solve(root) == -1 ? false : true;
};

const solve = (root) => {
  if (root == null) return 0;

  let l = solve(root.left);
  if (l == -1) return -1;

  let r = solve(root.right);
  if (r == -1) return -1;

  if (Math.abs(l - r) > 1) return -1;

  return 1 + Math.max(l, r);
};
