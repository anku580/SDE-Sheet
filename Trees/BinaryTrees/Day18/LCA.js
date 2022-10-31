/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 * Time - O(N)
 * Space - O(N)
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root == null) return null;

  if (root == p) return root;
  if (root == q) return root;

  const l = lowestCommonAncestor(root.left, p, q);
  const r = lowestCommonAncestor(root.right, p, q);

  if (l != null && r != null) return root;

  if (l != null) return l;
  if (r != null) return r;

  return null;
};
