/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 * Time - O(N)
 * Space - O(1)
 */
var flatten = function (root) {
  let curr = root;

  while (curr != null) {
    if (curr.left != null) {
      let prev = curr.left;

      while (prev.right != null) {
        prev = prev.right;
      }

      prev.right = curr.right;
      curr.right = curr.left;
      curr.left = null;
    }

    curr = curr.right;
  }
};
