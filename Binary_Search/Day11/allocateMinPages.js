// https://www.interviewbit.com/problems/allocate-books/
// Time - O(nlog(sum(nums)))
// Space - O(1)

module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  books: function (nums, students) {
    if (nums.length < students) return -1;
    //valid binary search range
    let low = Math.min(...nums);
    let high = 0;

    for (let s of nums) {
      high += s;
    }

    while (low <= high) {
      let middle = Math.floor((low + high) / 2);
      const isValid = valid(nums, middle, students);

      if (isValid) {
        high = middle - 1;
      } else low = middle + 1;
    }

    return low;
  },
};

const valid = (nums, target, students) => {
  let studentsAllocated = 1;
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) return false;
    total += nums[i];
    if (total > target) {
      studentsAllocated += 1;
      total = nums[i];
    }
  }

  return studentsAllocated <= students;
};
