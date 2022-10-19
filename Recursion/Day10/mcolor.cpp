// #https: // www.codingninjas.com/codestudio/problems/981273?
// #Time - O(n ^ m)
// #Space - O(n)

#include <bits/stdc++.h>

bool solve(int node, vector<vector<int>> mat, int m, int n, vector<int> &color)
{

    if (node == n)
        return true;

    for (int i = 1; i <= m; i++)
    {
        // check for neighbours
        bool sameColor = false;
        for (int j = 0; j < mat[node].size(); j++)
        {
            if (mat[node][j] == 1 && color[j] == i)
            {
                sameColor = true;
            }
        }
        if (sameColor)
            continue;
        color[node] = i;

        if (solve(node + 1, mat, m, n, color))
            return true;

        color[node] = 0;
    }

    return false;
}

string graphColoring(vector<vector<int>> &mat, int m)
{
    // Write your code here
    int n = mat.size();
    vector<int> color(n, 0);
    if (solve(0, mat, m, n, color))
    {
        return "YES";
    }
    return "NO";
}