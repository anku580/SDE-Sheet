//https://www.interviewbit.com/problems/path-to-given-node/
// Time - O(N)
// Space - O(N)

// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //param B : integer
  //return a array of integers
  solve: function (A, B) {
    const path = [];
    getPath(A, B, path);
    return path;
  },
};

const getPath = (root, target, path) => {
  if (root == null) return -1;

  if (root.data == target) {
    path.push(root.data);
    return 1;
  }

  path.push(root.data);
  const left = getPath(root.left, target, path);
  if (left == 1) return 1;
  const right = getPath(root.right, target, path);
  if (right == 1) return 1;
  path.pop();
};
