class Solution
{
public:
    /*  Function to implement Bellman Ford
     *   edges: vector of vectors which represents the graph
     *   S: source vertex to start traversing graph with
     *   V: number of vertices
     * https://practice.geeksforgeeks.org/problems/distance-from-the-source-bellman-ford-algorithm
     * Time - O(V*E)
     * Space - O(V)
     */
    vector<int> bellman_ford(int V, vector<vector<int>> &edges, int S)
    {
        // Code here

        // step1 - Perform n-1 relxations
        // relxation - dist[u] + wt < dist[v]
        vector<int> distance(V, 1e8);
        distance[S] = 0;
        for (int i = 0; i < V - 1; i++)
        {

            for (int j = 0; j < edges.size(); j++)
            {
                auto data = edges[j];
                int u = data[0];
                int v = data[1];
                int wt = data[2];

                if (distance[u] + wt < distance[v])
                {
                    distance[v] = distance[u] + wt;
                }
            }
        }

        for (int j = 0; j < edges.size(); j++)
        {
            auto data = edges[j];
            int u = data[0];
            int v = data[1];
            int wt = data[2];

            if (distance[u] + wt < distance[v])
            {
                return {-1};
            }
        }

        return distance;
    }
};