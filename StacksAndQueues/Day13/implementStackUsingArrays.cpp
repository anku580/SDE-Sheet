// https://www.codingninjas.com/codestudio/problems/stack-implementation-using-array_3210209

#include <bits/stdc++.h>
// Stack class.
class Stack
{

public:
    int size;
    int *array;
    int index;
    Stack(int capacity)
    {
        // Write your code here.
        index = -1;
        array = new int[capacity];
        size = capacity;
    }

    void push(int num)
    {
        // Write your code here.
        index += 1;
        array[index] = num;
    }

    int pop()
    {
        // Write your code here.
        if (isEmpty())
            return -1;
        int prev = array[index];
        index -= 1;
        return prev;
    }

    int top()
    {
        // Write your code here.
        if (isEmpty())
            return -1;
        return array[index];
    }

    int isEmpty()
    {
        // Write your code here.

        return index == -1;
    }

    int isFull()
    {
        // Write your code here.

        return index == size - 1;
    }
};

#include <bits/stdc++.h>
void solve(vector<int> &num int index int sum
               vector<int> &output)
{
    // base condition
    if (index >= num.size())
    {
        output.push_back(sum);
        return;
    }
    // exclude condition
    solve(num
              index +
          1 sum
              output);
    // include condition
    int element = num[index];
    sum += element;
    solve(num
              index +
          1 sum
              output);
}
vector<int> subsetSum(vector<int> &num)
{
    int sum = 0;
    vector<int> output;
    int index = 0;
    solve(num
              index
                  sum
                      output);
    sort(output.begin()
             output.end());
    return output;
}