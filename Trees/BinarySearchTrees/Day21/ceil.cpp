// https://www.codingninjas.com/codestudio/problems/ceil-from-bst_920464
// Time - O(N)
// Space - O(N)

#include <bits/stdc++.h>
/************************************************************

    Following is the TreeNode class structure:

    class BinaryTreeNode {
    public:
        T data;
        BinaryTreeNode<T> *left;
        BinaryTreeNode<T> *right;

        BinaryTreeNode(T data) {
            this->data = data;
            left = NULL;
            right = NULL;
        }

        ~BinaryTreeNode() {
            if (left) {
              delete left;
            }
            if (right) {
              delete right;
            }
        }
    };

************************************************************/
void solve(BinaryTreeNode<int> *root, int target, int &ceil)
{

    if (root == NULL)
        return;

    if (root->data >= target)
    {
        ceil = root->data;
        return solve(root->left, target, ceil);
    }
    else
    {
        return solve(root->right, target, ceil);
    }
}

int findCeil(BinaryTreeNode<int> *root, int x)
{
    // Write your code here.

    if (root == NULL)
        return -1;
    int ceil = -1;
    solve(root, x, ceil);

    return ceil;
}