#include <bits/stdc++.h>
/*************************************************************

    Following is the Binary Tree node structure

    class BinaryTreeNode
    {
    public :
        T data;
        BinaryTreeNode < T > *left;
        BinaryTreeNode < T > *right;

        BinaryTreeNode(T data) {
            this -> data = data;
            left = NULL;
            right = NULL;
        }
    };

https://www.codingninjas.com/codestudio/problems/childrensumproperty_790723?
Time - O(N)
Space - O(N)
*************************************************************/
int solve(BinaryTreeNode<int> *root)
{
    if (root == NULL)
        return 0;

    int lValue = root->left != NULL ? root->left->data : 0;
    int rValue = root->right != NULL ? root->right->data : 0;

    if (lValue + rValue > root->data)
    {
        root->data = lValue + rValue;
    }
    else
    {
        if (root->left != NULL)
            root->left->data = root->data;
        if (root->right != NULL)
            root->right->data = root->data;
    }

    int lef = solve(root->left);
    int righ = solve(root->right);

    if (root->data < lef + righ)
        root->data = lef + righ;

    return root->data;
}

void changeTree(BinaryTreeNode<int> *root)
{
    // Write your code here.
    solve(root);
}