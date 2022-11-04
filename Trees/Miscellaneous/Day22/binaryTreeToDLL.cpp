// https://www.codingninjas.com/codestudio/problems/893106
//  Time - O(N)
//  Space - O(N)
#include <bits/stdc++.h>
/*************************************************************

    Following is the Binary Tree node structure

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
    };

*************************************************************/

BinaryTreeNode<int> *getRightMostNode(BinaryTreeNode<int> *root)
{

    BinaryTreeNode<int> *curr = root;

    if (curr == NULL)
        return NULL;

    while (curr->right != NULL)
    {
        curr = curr->right;
    }

    return curr;
}

BinaryTreeNode<int> *getLeftMostNode(BinaryTreeNode<int> *root)
{

    BinaryTreeNode<int> *curr = root;

    if (curr == NULL)
        return NULL;

    while (curr->left != NULL)
    {
        curr = curr->left;
    }

    return curr;
}

BinaryTreeNode<int> *solve(BinaryTreeNode<int> *root)
{

    if (root == NULL)
        return NULL;
    if (root->left == NULL && root->right == NULL)
        return root;

    auto l = solve(root->left);
    auto r = solve(root->right);

    auto rightMost = getRightMostNode(root->left);
    auto leftMost = getLeftMostNode(root->right);

    // connect nodes
    if (rightMost != NULL)
    {
        root->left = rightMost;
        rightMost->right = root;
    }
    if (leftMost != NULL)
    {
        root->right = leftMost;
        leftMost->left = root;
    }

    return root;
}

BinaryTreeNode<int> *BTtoDLL(BinaryTreeNode<int> *root)
{
    // Write your code here
    auto itr = solve(root);
    while (itr->left != NULL)
    {
        itr = itr->left;
    }
    return itr;
}