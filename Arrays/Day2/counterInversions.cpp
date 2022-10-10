#include <bits/stdc++.h> 

int merge(int left, int mid, int right, long long *arr, int n) {
    long long temp[n];
    int i = left;
    int j = mid + 1;
    int k = left;
    int count = 0;
    while(i <= mid && j <= right) {
        if(arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        }
        else {
            temp[k++] = arr[j++];
            // To count all the pair because on and after i all pairs will be greater than j
            count += (mid - i + 1);
        }
    }
    
    while(i <= mid) {
        temp[k++] = arr[i++];
    }
    while(j <= right) {
        temp[k++] = arr[j++];
    }
    
    for(int l=left; l<=right; l++) {
        arr[l] = temp[l];
    }
    
    return count;
}

long long mergeSort(int left, int right, long long *arr, int n) {
    long long invCount = 0;
    if(left < right) {
        int mid = (left+right)/2;
        
       invCount += mergeSort(left, mid, arr, n);
       invCount += mergeSort(mid+1, right, arr, n);
        
       invCount += merge(left, mid, right, arr, n);
    }
    
    return invCount;
}

long long getInversions(long long *arr, int n){
    // Write your code here.
    return mergeSort(0, n-1, arr, n);
}