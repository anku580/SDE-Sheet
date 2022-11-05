/**
 * @param {character[][]} grid
 * @return {number}
 * https://leetcode.com/problems/number-of-islands/
 * Time - O(rows*cols)
 * Space - O(rows*cols)
 */
var numIslands = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = [];
  let isLandsCount = 0;

  for (let i = 0; i < rows; i++) {
    visited.push(new Array(cols).fill(false));
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (!visited[i][j] && grid[i][j] == "1") {
        bfs(i, j, grid, visited, rows, cols);
        isLandsCount += 1;
      }
    }
  }

  return isLandsCount;
};

const DIR = [0, 1, 0, -1, 0];
const bfs = (i, j, grid, visited, rows, cols) => {
  const queue = [[i, j]];
  visited[i][j] = true;

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let d = 1; d <= 4; d++) {
      const [newI, newJ] = [x + DIR[d - 1], y + DIR[d]];

      if (
        newI < 0 ||
        newJ < 0 ||
        newI >= rows ||
        newJ >= cols ||
        visited[newI][newJ] ||
        grid[newI][newJ] == 0
      ) {
        continue;
      }

      visited[newI][newJ] = true;
      queue.push([newI, newJ]);
    }
  }
};
