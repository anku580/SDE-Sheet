//User function Template for javascript

/**
 * https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1
 * @param {number[][]} m
 * @param {number} n
 * @return {string[]}
 * Time -O(4^(m*n))
 * Space - O(L * X), L = length of the path, X = number of paths
 */

class Solution {
  findPath(m, n) {
    //code here
    const ans = [];

    this.solve(0, 0, m, n, "", ans);
    ans.sort();
    return ans;
  }
  DIR = [-1, 0, 1, 0, -1];
  DIREN = ["U", "R", "D", "L"];

  solve(i, j, matrix, n, path, ans) {
    if (matrix[i][j] == 0) return;

    if (i == n - 1 && j == n - 1) {
      ans.push(path);
      return;
    }

    let temp = matrix[i][j];
    matrix[i][j] = 2;

    for (let k = 0; k < 4; k++) {
      const newI = i + this.DIR[k];
      const newJ = j + this.DIR[k + 1];

      if (
        newI < 0 ||
        newJ < 0 ||
        newI >= n ||
        newJ >= n ||
        matrix[newI][newJ] == 0 ||
        matrix[newI][newJ] == 2
      )
        continue;

      this.solve(newI, newJ, matrix, n, path + this.DIREN[k], ans);
    }

    matrix[i][j] = temp;
  }
}
