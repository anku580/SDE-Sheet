/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

/**
 * @param {Node} root
 * @returns {number[]}
 * https://practice.geeksforgeeks.org/problems/boundary-traversal-of-binary-tree/1
 * Time - O(N)
 * Space - O(N)
 */

class Solution {
  boundary(root) {
    //your goes code here

    if (root == null) return [];
    if (root.left == null && root.right == null) return [root.data];

    const left = [];
    const right = [];
    const bottom = [];

    const leftView = (root) => {
      if (root == null || (root.left == null && root.right == null)) return;

      left.push(root.data);
      const next = root.left == null ? root.right : root.left;
      leftView(next);
    };

    const rightView = (root) => {
      if (root == null || (root.left == null && root.right == null)) return;

      right.push(root.data);
      const next = root.right == null ? root.left : root.right;
      rightView(next);
    };

    const bottomView = (root) => {
      if (root == null) return;

      if (root.left == null && root.right == null) bottom.push(root.data);

      bottomView(root.left);
      bottomView(root.right);
    };

    leftView(root.left);
    rightView(root.right);
    bottomView(root);

    return [root.data, ...left, ...bottom, ...right.reverse()];
  }
}
