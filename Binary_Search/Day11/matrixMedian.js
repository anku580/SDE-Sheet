// https://www.interviewbit.com/problems/matrix-median/
// Time - O(32*N*log(M))
// Space - O(1)

module.exports = {
  //param A : array of array of integers
  //return an integer
  findMedian: function (matrix) {
    let rows = matrix.length,
      cols = matrix[0].length;
    let total = rows * cols;
    let leftElements = Math.floor(total / 2);
    let low = 0,
      high = 1000000000;

    while (low <= high) {
      let middle = Math.floor((low + high) / 2);
      const smallerAndEquals = getNumbers(middle, matrix);
      if (leftElements < smallerAndEquals) {
        high = middle - 1;
      } else {
        low = middle + 1;
      }
    }

    return low;
  },
};

const getNumbers = (target, matrix) => {
  let rows = matrix.length,
    cols = matrix[0].length;
  let low = 0,
    high = cols - 1;
  let smaller = 0;
  for (let i = 0; i < rows; i++) {
    (low = 0), (high = cols - 1);

    while (low <= high) {
      const middle = Math.floor((low + high) / 2);
      if (matrix[i][middle] <= target) {
        low = middle + 1;
      } else {
        high = middle - 1;
      }
    }
    smaller += low;
  }

  return smaller;
};
