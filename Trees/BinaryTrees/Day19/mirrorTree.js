/**
 * @param {Node} node
 * https://practice.geeksforgeeks.org/problems/mirror-tree/
 * Time - O(N)
 * Space - O(N)
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
  // Function to convert a binary tree into its mirror tree.
  mirror(node) {
    // your code here
    if (node == null) return null;
    return this.solve(node);
  }

  solve(p) {
    if (p == null) return null;

    let temp = p.left;
    p.left = this.solve(p.right);
    p.right = this.solve(temp);

    return p;
  }
}
