// https://www.codingninjas.com/codestudio/problems/sort-a-stack_985275
// Time - O(N^2)
// Space - O(N)

#include <bits/stdc++.h>
void sortStack(stack<int> &st)
{
    // Write your code here
    if (st.empty())
        return;

    int top = st.top();
    st.pop();

    sortStack(st);

    stack<int> st2;
    if (st.empty())
        st.push(top);
    else
    {
        while (!st.empty() && st.top() > top)
        {
            st2.push(st.top());
            st.pop();
        }

        st.push(top);
        while (!st2.empty())
        {
            st.push(st2.top());
            st2.pop();
        }
    }
}