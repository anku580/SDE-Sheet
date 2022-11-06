// https://practice.geeksforgeeks.org/problems/implementing-floyd-warshall2042/1
// Time - O(n*3)
// Space - O(1)
class Solution
{
public:
    void shortest_distance(vector<vector<int>> &matrix)
    {
        // Code here
        int rows = matrix.size();
        int cols = matrix[0].size();

        for (int i = 0; i < rows; i++)
        {
            for (int j = 0; j < cols; j++)
            {

                if (i == j)
                {
                    matrix[i][j] = 0;
                }
                else if (matrix[i][j] == -1)
                {
                    matrix[i][j] = 1e9;
                }
            }
        }

        for (int via = 0; via < rows; via++)
        {

            for (int i = 0; i < rows; i++)
            {
                for (int j = 0; j < cols; j++)
                {
                    int cost = matrix[i][via] + matrix[via][j];
                    matrix[i][j] = min(matrix[i][j], cost);
                }
            }
        }

        for (int i = 0; i < rows; i++)
        {
            for (int j = 0; j < cols; j++)
            {

                if (matrix[i][j] == 1e9)
                {
                    matrix[i][j] = -1;
                }
            }
        }
    }
};