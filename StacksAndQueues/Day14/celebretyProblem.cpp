// https://www.codingninjas.com/codestudio/problems/the-celebrity-problem_982769
//  Time - O(n)
//  Space - O(n)

#include <bits/stdc++.h>
/*
    This is signature of helper function 'knows'.
    You should not implement it, or speculate about its implementation.

    bool knows(int A, int B);
    Function 'knows(A, B)' will returns "true" if the person having
    id 'A' know the person having id 'B' in the party, "false" otherwise.
*/

int findCelebrity(int n)
{
    // Write your code here.
    stack<int> st;

    for (int i = 0; i < n; i++)
    {
        st.push(i);
    }

    while (st.size() > 1)
    {
        int A = st.top();
        st.pop();
        int B = st.top();
        st.pop();

        if (knows(A, B))
        {
            st.push(B);
        }
        else
            st.push(A);
    }

    int peopleCount = 0;
    int celebKnowsPeopleCount = 0;
    int celeb = st.top();
    for (int i = 0; i < n; i++)
    {

        if (celeb != i)
        {
            if (knows(celeb, i))
                celebKnowsPeopleCount += 1;
            if (knows(i, celeb))
                peopleCount += 1;
        }
    }

    if (peopleCount == n - 1 && celebKnowsPeopleCount == 0)
        return celeb;
    return -1;
}