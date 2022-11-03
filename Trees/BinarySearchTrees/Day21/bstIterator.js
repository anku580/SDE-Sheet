/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * https://leetcode.com/problems/binary-search-tree-iterator/
 * @param {TreeNode} root
 * Time - O(1) average
 * Space - O(H)
 */
let stack;
var BSTIterator = function (root) {
  stack = [];
  populateStack(root);
};

const populateStack = (root) => {
  let curr = root;

  while (curr != null) {
    stack.push(curr);
    curr = curr.left;
  }
};

const addNodeToStack = (node) => {
  let curr = node;

  if (curr.right == null) return;

  if (curr.right != null) {
    populateStack(curr.right);
  }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  const pop = stack.pop();
  addNodeToStack(pop);
  return pop.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  //console.log(stack)
  if (stack.length) return true;
  return false;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
