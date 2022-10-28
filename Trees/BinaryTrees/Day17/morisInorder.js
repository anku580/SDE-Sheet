/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * https://leetcode.com/problems/binary-tree-postorder-traversal/
 * @param {TreeNode} root
 * @return {number[]}
 * Time - O(n)
 * Space - O(n)
 */
var postorderTraversal = function (root) {
  if (root == null) return [];
  const stack1 = [root];
  const stack2 = [];

  while (stack1.length) {
    const top = stack1.pop();
    stack2.push(top.val);

    if (top.left != null) {
      stack1.push(top.left);
    }
    if (top.right != null) {
      stack1.push(top.right);
    }
  }

  return stack2.reverse();
};
