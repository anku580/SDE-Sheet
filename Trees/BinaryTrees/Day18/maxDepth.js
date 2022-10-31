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
 * @return {number}
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * Time - O(N)
 * Space - O(N)
 */
var maxDepth = function (root) {
  if (root == null) return 0;

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
