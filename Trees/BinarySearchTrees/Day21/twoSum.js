/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * https://leetcode.com/problems/two-sum-iv-input-is-a-bst
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 * Time - O(N)
 * Space - 2*O(H)
 */
var findTarget = function (root, k) {
  let nextGreater = [];
  let nextSmaller = [];

  const addNextGreater = (root) => {
    let curr = root;

    while (curr != null) {
      nextGreater.push(curr);
      curr = curr.left;
    }
  };

  const addNextSmaller = (root) => {
    let curr = root;

    while (curr != null) {
      nextSmaller.push(curr);
      curr = curr.right;
    }
  };

  const next = () => {
    if (nextGreater.length) {
      return nextGreater[nextGreater.length - 1];
    }
    return null;
  };

  const prev = () => {
    if (nextSmaller.length) {
      return nextSmaller[nextSmaller.length - 1];
    }

    return null;
  };

  addNextGreater(root);
  addNextSmaller(root);

  let left = next() ? next().val : -1;
  let right = prev() ? prev().val : -1;

  while (left < right) {
    if (left + right > k) {
      //pop right
      const ele = nextSmaller.pop();
      addNextSmaller(ele.left);
      right = prev() ? prev().val : -1;
    } else if (left + right < k) {
      //pop left
      const ele = nextGreater.pop();
      addNextGreater(ele.right);
      left = next() ? next().val : -1;
    } else {
      return true;
    }
  }

  return false;
};
