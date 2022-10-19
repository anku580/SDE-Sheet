/**
 * https://leetcode.com/problems/sudoku-solver
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * Time - O(9(n ^ 2))
 * Space - O(1)
 */
var solveSudoku = function (board) {
  const existsInCol = (col, val) => {
    for (let i = 0; i < 9; i++) {
      if (board[i][col] == val) return true;
    }

    return false;
  };

  const existsInRow = (row, val) => {
    for (let i = 0; i < 9; i++) {
      if (board[row][i] == val) return true;
    }

    return false;
  };

  const existsInSubBoxes = (row, col, val) => {
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;

    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (board[i][j] == val) return true;
      }
    }

    return false;
  };

  const solve = (row, col) => {
    if (col == 9) {
      row += 1;
      col = 0;

      if (row == 9) return true;
    }

    if (board[row][col] == ".") {
      for (let val = 1; val <= 9; val++) {
        if (
          existsInCol(col, val.toString()) ||
          existsInRow(row, val.toString()) ||
          existsInSubBoxes(row, col, val.toString())
        )
          continue;

        board[row][col] = val.toString();

        if (solve(row, col + 1)) return true;
      }

      board[row][col] = ".";
      return false;
    }

    return solve(row, col + 1);
  };

  solve(0, 0);

  return board;
};
