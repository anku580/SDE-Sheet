/**
 * https://leetcode.com/problems/n-queens
 * @param {number} n
 * @return {string[][]}
 * Time - O(N!)
 * Space - O(N^2)
 */
var solveNQueens = function (n) {
  let cols = new Set();
  let pDiagonals = new Set();
  let nDiagonals = new Set();

  let board = [];
  for (let i = 0; i < n; i++) {
    board.push(new Array(n).fill("."));
  }
  const ans = [];

  solve = (row) => {
    if (row == n) {
      let a = [];
      for (let i = 0; i < n; i++) {
        a.push(board[i].join(""));
      }
      ans.push(a);
      return;
    }

    for (let c = 0; c < n; c++) {
      if (cols.has(c) || pDiagonals.has(row + c) || nDiagonals.has(row - c)) {
        continue;
      }

      cols.add(c);
      pDiagonals.add(row + c);
      nDiagonals.add(row - c);

      board[row][c] = "Q";

      solve(row + 1);

      board[row][c] = ".";
      cols.delete(c);
      pDiagonals.delete(row + c);
      nDiagonals.delete(row - c);
    }
  };

  solve(0);

  return ans;
};
