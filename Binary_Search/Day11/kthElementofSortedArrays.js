//User function Template for javascript

/**
 * https://practice.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1
 * @param {number[]} A
 * @param {number[]} B
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @returns {number}
 * Time - O(log(min(m,n)))
 * Space - O(1)
 */

class Solution {
  kthElement(A, B, n, m, k) {
    //code here
    if (A.length > B.length) return this.kthElement(B, A, m, n, k);

    let low = Math.max(0, k - m),
      high = Math.min(k, n);

    while (low <= high) {
      const middle = Math.floor((low + high) / 2);
      const remPart = k - middle;

      const l1 = middle == 0 ? -Infinity : A[middle - 1];
      const l2 = remPart == 0 ? -Infinity : B[remPart - 1];
      const r1 = middle == A.length ? Infinity : A[middle];
      const r2 = remPart == B.length ? Infinity : B[remPart];

      if (l1 <= r2 && l2 <= r1) {
        return Math.max(l1, l2);
      } else if (l1 > r2) {
        high = middle - 1;
      } else low = middle + 1;
    }

    return 1;
  }
}
