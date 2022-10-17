#https: // www.codingninjas.com/codestudio/problems/1062658?
#Time - O(nlogn) + O(n)
#Space - O(1)

#include <bits/stdc++.h>

struct meeting
{
    int start;
    int end;
    int position;
};

bool static comparator(struct meeting m1, meeting m2)
{
    if (m1.end < m2.end)
        return true;
    else if (m1.end > m2.end)
        return false;
    else if (m1.position < m2.position)
        return true;
    return false;
}

vector<int> maximumMeetings(vector<int> &start, vector<int> &end)
{
    // Write your code here.
    int n = start.size();
    struct meeting meet[n];
    for (int i = 0; i < n; i++)
    {
        meet[i].start = start[i], meet[i].end = end[i], meet[i].position = i + 1;
    }

    sort(meet, meet + n, comparator);
    vector<int> pos;
    int timer = meet[0].end;
    pos.push_back(meet[0].position);
    for (int i = 1; i < n; i++)
    {

        if (timer < meet[i].start)
        {
            timer = meet[i].end;
            pos.push_back(meet[i].position);
        }
    }

    return pos;
}