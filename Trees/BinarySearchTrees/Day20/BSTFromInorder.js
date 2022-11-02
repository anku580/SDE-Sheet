/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 * https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal
 * Time - O(n*n)
 * Space - O(n)
 */
var bstFromPreorder = function (preorder) {
  const root = new TreeNode(preorder[0]);

  for (let i = 1; i < preorder.length; i++) {
    insertNode(root, preorder[i]);
  }

  return root;
};

const insertNode = (root, key) => {
  if (root == null) {
    return new TreeNode(key);
  }
  if (root.val > key) {
    root.left = insertNode(root.left, key);
  } else {
    root.right = insertNode(root.right, key);
  }

  return root;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 * Time - O(N)
 * Space - O(N)
 */
var bstFromPreorder = function (preorder) {
  let index = 0;
  const solve = (preorder, bound) => {
    if (index == preorder.length || preorder[index] > bound) {
      return null;
    }

    const newNode = new TreeNode(preorder[index++]);
    newNode.left = solve(preorder, newNode.val);
    newNode.right = solve(preorder, bound);

    return newNode;
  };

  return solve(preorder, Infinity);
};
