// https://www.codingninjas.com/codestudio/problems/893049
// Time - O(N)
// Space - O(N)

#include <bits/stdc++.h>
/*************************************************************

    Following is the Binary Tree node structure

    template <typename T>

    class BinaryTreeNode
    {
    public :
        T data;
        BinaryTreeNode<T> *left;
        BinaryTreeNode<T> *right;

        BinaryTreeNode(T data) {
            this -> data = data;
            left = NULL;
            right = NULL;
        }

        ~BinaryTreeNode() {
            if (left)
            {
                delete left;
            }
            if (right)
            {
                delete right;
            }
        }
    };

*************************************************************/
void solvePre(BinaryTreeNode<int> *root, int key, int &pre)
{

    if (root == NULL)
        return;

    if (root->data >= key)
    {
        return solvePre(root->left, key, pre);
    }
    else
    {
        pre = root->data;
        return solvePre(root->right, key, pre);
    }
}

void solveSucc(BinaryTreeNode<int> *root, int key, int &succ)
{

    if (root == NULL)
        return;

    if (root->data > key)
    {
        succ = root->data;
        return solveSucc(root->left, key, succ);
    }
    else
    {
        return solveSucc(root->right, key, succ);
    }
}

pair<int, int> predecessorSuccessor(BinaryTreeNode<int> *root, int key)
{
    // Write your code here.
    int pre = -1;
    int succ = -1;

    solvePre(root, key, pre);
    solveSucc(root, key, succ);

    return make_pair(pre, succ);
}
