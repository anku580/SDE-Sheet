/**
 * @param {string} A
 * @param {string[]} B
 * @returns {number}
 * https://practice.geeksforgeeks.org/problems/word-break1352/1
 * Time - O(M*N)
 * Space - O(M) recursive space
 */

class Solution {
  wordBreak(A, B) {
    //code here
    return this.solve(0, A, B, A.length, B.length);
  }

  solve(index, A, B, m, n) {
    if (index >= m) return 1;

    let ans = 0;
    for (let i = 0; i < n; i++) {
      const two = B[i];
      const one = A.substring(index, index + two.length);

      if (one == two) {
        ans = ans || this.solve(index + two.length, A, B, m, n);
      }
    }

    return ans;
  }
}
