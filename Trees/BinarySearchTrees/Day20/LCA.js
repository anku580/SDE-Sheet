/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * Time - O(N)
 * Space - O(N)
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root == null) return null;

  if (root.val < p.val && root.val < q.val)
    return lowestCommonAncestor(root.right, p, q);
  if (root.val > p.val && root.val > q.val)
    return lowestCommonAncestor(root.left, p, q);

  return root;
};
