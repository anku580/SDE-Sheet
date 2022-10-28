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
 * Space - O(1)
 */
var preorderTraversal = function (root) {
  let curr = root;
  const ans = [];

  while (curr != null) {
    if (curr.left == null) {
      ans.push(curr.val);
      curr = curr.right;
    } else {
      let cLeft = curr.left;

      while (cLeft.right != null && cLeft.right != curr) {
        cLeft = cLeft.right;
      }

      if (cLeft.right == null) {
        ans.push(curr.val);
        cLeft.right = curr;
        curr = curr.left;
      }

      if (cLeft.right == curr) {
        cLeft.right = null;
        curr = curr.right;
      }
    }
  }

  return ans;
};
