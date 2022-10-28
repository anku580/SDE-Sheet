/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * https://leetcode.com/problems/binary-tree-preorder-traversal/
 * @param {TreeNode} root
 * @return {number[]}
 * Time - O(n)
 * Space - O(n)
 */
var preorderTraversal = function (root) {
  const stack = [];
  const ans = [];

  while (true) {
    if (root != null) {
      ans.push(root.val);
      stack.push(root);
      root = root.left;
    } else {
      if (stack.length == 0) return ans;
      const top = stack[stack.length - 1];
      stack.pop();
      if (top.right != null) {
        root = top.right;
      }
    }
  }
};
