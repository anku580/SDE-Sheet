/**
 * https://leetcode.com/problems/rotting-oranges/
 * @param {number[][]} grid
 * @return {number}
 * Time - O(m*n)
 * Space - O(m*n)
 */
const DIR = [-1, 0, 1, 0, -1];
var orangesRotting = function (grid) {
  const queue = [];
  let m = grid.length;
  let n = grid[0].length;

  //get all the rotten oranges
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 2) {
        queue.push([i, j]);
      }
    }
  }

  let minutes = -1;

  while (queue.length) {
    let size = queue.length;

    while (size) {
      const [i, j] = queue.shift();

      for (let d = 1; d <= 4; d++) {
        const newI = i + DIR[d - 1];
        const newJ = j + DIR[d];

        if (
          newI < 0 ||
          newJ < 0 ||
          newI >= m ||
          newJ >= n ||
          grid[newI][newJ] == 0 ||
          grid[newI][newJ] == 2
        ) {
          continue;
        }

        queue.push([newI, newJ]);
        grid[newI][newJ] = 2;
      }

      size -= 1;
    }

    minutes += 1;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) {
        return -1;
      }
    }
  }

  return minutes == -1 ? 0 : minutes;
};
