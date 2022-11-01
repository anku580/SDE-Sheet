/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * Time - O(N)
 * Space - O(N)
 */

var buildTree = function (preorder, inorder) {
  let map = {};

  for (let i = 0; i < inorder.length; i++) {
    map[inorder[i]] = i;
  }

  return constructTree(
    0,
    preorder.length - 1,
    preorder,
    0,
    inorder.length - 1,
    inorder,
    map
  );
};

const constructTree = (
  preLeft,
  preRight,
  preorder,
  inLeft,
  inRight,
  inorder,
  map
) => {
  if (preLeft > preRight || inLeft > inRight) return null;

  const newNode = new TreeNode(preorder[preLeft]);
  const index = map[newNode.val];
  const remNodes = index - inLeft;

  newNode.left = constructTree(
    preLeft + 1,
    preLeft + remNodes,
    preorder,
    inLeft,
    index - 1,
    inorder,
    map
  );
  newNode.right = constructTree(
    preLeft + remNodes + 1,
    preRight,
    preorder,
    index + 1,
    inRight,
    inorder,
    map
  );

  return newNode;
};
