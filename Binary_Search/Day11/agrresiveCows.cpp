// https://www.codingninjas.com/codestudio/problems/chess-tournament_981299
// Time - O(nlog(n))
// Space - O(1)

#include <bits/stdc++.h>
int isValid(vector<int> p, int maxDist, int c)
{
    int alloted = 1;
    int d = p[0];

    for (int i = 1; i < p.size(); i++)
    {
        if (p[i] - d >= maxDist)
        {
            alloted += 1;
            if (alloted >= c)
                return true;
            d = p[i];
        }
    }

    return false;
}

int chessTournament(vector<int> positions, int n, int c)
{
    // Write your code here
    sort(positions.begin(), positions.end());
    int low = 1, high = positions[n - 1] - positions[0];

    while (low <= high)
    {
        int middle = (low + high) / 2;

        if (!isValid(positions, middle, c))
        {
            high = middle - 1;
        }
        else
            low = middle + 1;
    }

    return high;
}