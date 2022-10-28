// https://www.codingninjas.com/codestudio/problems/981269?

/************************************************************

    Following is the Binary Tree node structure:

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


************************************************************/

void preorder(BinaryTreeNode<int> *root, vector<int> &pre)
{
    if (root == NULL)
        return;
    pre.push_back(root->data);
    preorder(root->left, pre);
    preorder(root->right, pre);
}

void inorder(BinaryTreeNode<int> *root, vector<int> &pre)
{
    if (root == NULL)
        return;
    inorder(root->left, pre);
    pre.push_back(root->data);
    inorder(root->right, pre);
}

void postorder(BinaryTreeNode<int> *root, vector<int> &pre)
{
    if (root == NULL)
        return;
    postorder(root->left, pre);
    postorder(root->right, pre);
    pre.push_back(root->data);
}

vector<vector<int>> getTreeTraversal(BinaryTreeNode<int> *root)
{
    // Write your code here.

    vector<vector<int>> ans;
    vector<int> pre;
    preorder(root, pre);
    vector<int> in;
    inorder(root, in);
    ans.push_back(in);
    ans.push_back(pre);
    vector<int> pos;
    postorder(root, pos);
    ans.push_back(pos);

    return ans;
}