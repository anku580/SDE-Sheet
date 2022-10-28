/**
 * @param {Node} root
 * @returns {number[]}
 * https://practice.geeksforgeeks.org/problems/left-view-of-binary-tree/1
 * Time - O(n) number of nodes
 * Space - O(w) width of the tree
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
  leftView(root) {
    //your code here
    const queue = [];
    const left = [];

    if (root == null) return left;

    queue.push(root);

    while (queue.length) {
      let size = queue.length;
      left.push(queue[0].data);
      while (size--) {
        const front = queue.shift();

        if (front.left != null) {
          queue.push(front.left);
        }
        if (front.right != null) {
          queue.push(front.right);
        }
      }
    }

    return left;
  }
}
