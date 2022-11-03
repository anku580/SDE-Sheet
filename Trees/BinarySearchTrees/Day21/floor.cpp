// https://www.codingninjas.com/codestudio/problems/floor-from-bst_920457
// Time - O(N)
// Space - O(N)
#include <bits/stdc++.h>
/************************************************************

    Following is the TreeNode class structure

    template <typename T>
    class TreeNode {
       public:
        T val;
        TreeNode<T> *left;
        TreeNode<T> *right;

        TreeNode(T val) {
            this->val = val;
            left = NULL;
            right = NULL;
        }
    };

************************************************************/
void solve(TreeNode<int> *root, int target, int &floor)
{

    if (root == NULL)
        return;

    if (root->val > target)
    {
        return solve(root->left, target, floor);
    }
    else
    {
        floor = root->val;
        return solve(root->right, target, floor);
    }
}

int floorInBST(TreeNode<int> *root, int X)
{
    // Write your code here.
    if (root == NULL)
        return -1;
    int floor = -1;
    solve(root, X, floor);

    return floor;
}