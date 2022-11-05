// https://www.codingninjas.com/codestudio/problems/630512
// Time - O(N*M)
// Space - O(N*M)

#include <bits/stdc++.h>

int HDIR[] = {0, 1, 0, -1, 0};
int DDIR[] = {1, 1, -1, -1, 1};
void dfs(int i, int j, int **arr, int rows, int cols, vector<vector<int>> &visited)
{

    // out of boundary conditions
    if (i < 0 || j < 0 || i >= rows || j >= cols || visited[i][j] || arr[i][j] == 0)
    {
        return;
    }
    visited[i][j] = true;

    // Horizontal and vertical directions
    for (int d = 1; d <= 4; d++)
    {
        int newI = i + HDIR[d - 1];
        int newJ = j + HDIR[d];

        dfs(newI, newJ, arr, rows, cols, visited);
    }

    // diagonals
    for (int d = 1; d <= 4; d++)
    {
        int newI = i + DDIR[d - 1];
        int newJ = j + DDIR[d];

        dfs(newI, newJ, arr, rows, cols, visited);
    }
}

int getTotalIslands(int **arr, int n, int m)
{
    // Write your code here.
    vector<vector<int>> visited(n, vector<int>(m, false));
    int totalIslands = 0;

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {

            if (!visited[i][j] && arr[i][j] == 1)
            {
                totalIslands += 1;
                dfs(i, j, arr, n, m, visited);
            }
        }
    }

    return totalIslands;
}
