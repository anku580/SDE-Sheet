/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 * Time - O(N)
 * Space - O(N)
 */
var buildTree = function (inorder, postorder) {
  let map = {};

  for (let i = 0; i < inorder.length; i++) {
    map[inorder[i]] = i;
  }

  return constructTree(
    0,
    inorder.length - 1,
    inorder,
    0,
    postorder.length - 1,
    postorder,
    map
  );
};

const constructTree = (
  inLeft,
  inRight,
  inorder,
  postLeft,
  postRight,
  postorder,
  map
) => {
  if (inLeft > inRight || postLeft > postRight) return null;

  const newNode = new TreeNode(postorder[postRight]);
  const index = map[newNode.val];
  const remNodes = index - inLeft;

  newNode.left = constructTree(
    inLeft,
    inLeft + remNodes - 1,
    inorder,
    postLeft,
    postLeft + remNodes - 1,
    postorder,
    map
  );
  newNode.right = constructTree(
    inLeft + remNodes + 1,
    inRight,
    inorder,
    postLeft + remNodes,
    postRight - 1,
    postorder,
    map
  );

  return newNode;
};
