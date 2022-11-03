/*
class Node
{
    constructor(x){
        this.data=x;
        this.left=null;
        this.right=null;
    }
}
*/

/**
 * https://practice.geeksforgeeks.org/problems/kth-largest-element-in-bst/1
 * Time - O(N)
 * Space - O(N)
 * @param {Node} root
 * @param {number} K
 * @return {number}
 */
class Solution {
  // return the Kth largest element in the given BST rooted at 'root'
  kthLargest(root, k) {
    //code here

    let count = 0;
    let ans = -1;

    const solve = (root) => {
      if (root == null || count == k) return;

      solve(root.right);

      count += 1;

      if (k == count) {
        ans = root.data;
        return;
      }

      solve(root.left);
    };

    solve(root);

    return ans;
  }
}
