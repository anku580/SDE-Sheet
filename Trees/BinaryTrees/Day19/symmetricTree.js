/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * https://leetcode.com/problems/symmetric-tree/
 * @param {TreeNode} root
 * @return {boolean}
 * Time - O(N)
 * Space - O(N)
 */
var isSymmetric = function (root) {
  if (root == null) return true;

  return solve(root.left, root.right);
};

const solve = (p, q) => {
  if (p == null && q == null) return true;
  if (p == null || q == null || p.val != q.val) return false;

  return solve(p.left, q.right) && solve(p.right, q.left);
};
