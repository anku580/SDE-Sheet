// https://www.codingninjas.com/codestudio/problems/2099908
// Time - O(1)
// Space - O(n)

#include <bits/stdc++.h>
class Queue
{
public:
    int *arr;
    int start;
    int end;
    int maxSize;
    Queue()
    {
        // Implement the Constructor
        arr = new int[100001];
        maxSize = 100001;
        start = -1;
        end = -1;
    }

    /*----------------- Public Functions of Queue -----------------*/

    bool isEmpty()
    {
        // Implement the isEmpty() function
        if ((start == -1 && end == -1) || (start > end))
        {
            return true;
        }

        return false;
    }

    void enqueue(int data)
    {
        // Implement the enqueue() function
        if (end + 1 == 100001)
            return;

        if (start == -1)
            start = 0;
        end = (end + 1) % maxSize;
        arr[end] = data;
    }

    int dequeue()
    {
        // Implement the dequeue() function
        if (isEmpty())
            return -1;
        int ans = arr[start];
        start = (start + 1) % maxSize;
        return ans;
    }

    int front()
    {
        // Implement the front() function
        if (isEmpty())
            return -1;

        return arr[start];
    }
};