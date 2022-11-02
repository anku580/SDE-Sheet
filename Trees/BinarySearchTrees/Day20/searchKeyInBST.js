/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * https://leetcode.com/problems/search-in-a-binary-search-tree/
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 * Time - O(n), O(log(n)) - average case
 * Space - O(n)
 */
var searchBST = function (root, val) {
  if (root == null) return null;

  if (root.val > val) return searchBST(root.left, val);
  if (root.val < val) return searchBST(root.right, val);

  return root;
};
