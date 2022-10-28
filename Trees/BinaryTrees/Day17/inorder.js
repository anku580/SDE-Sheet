/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 * @param {TreeNode} root
 * @return {number[]}
 * Time - O(N)
 * Space - O(N)
 */
var inorderTraversal = function (root) {
  if (root == null) return [];

  const stack = [];
  const ans = [];

  while (true) {
    if (root != null) {
      stack.push(root);
      root = root.left;
    } else {
      if (!stack.length) break;
      root = stack[stack.length - 1];
      ans.push(root.val);
      stack.pop();
      root = root.right;
    }
  }

  return ans;
};
