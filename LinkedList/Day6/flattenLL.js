//User function Template for javascript

/*LINKED LIST NODE
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
    this.bottom = null;
  }
}
*/

/**
 * https://practice.geeksforgeeks.org/problems/flattening-a-linked-list/1
 * @param {Node} head
 * @return {Node}
 * Time - O(n*m) where n is the height and m is the width or O(n) where n is number of nodes
 * Space - O(1)
 */

class Solution {
  mergeList(ptr1, ptr2) {
    let dummyNode = new Node();
    let merge = dummyNode;
    while (ptr1 != null && ptr2 != null) {
      if (ptr1.data < ptr2.data) {
        merge.bottom = ptr1;
        ptr1 = ptr1.bottom;
      } else {
        merge.bottom = ptr2;
        ptr2 = ptr2.bottom;
      }
      merge = merge.bottom;
    }

    while (ptr1 != null) {
      merge.bottom = ptr1;
      ptr1 = ptr1.bottom;
      merge = merge.bottom;
    }

    while (ptr2 != null) {
      merge.bottom = ptr2;
      ptr2 = ptr2.bottom;
      merge = merge.bottom;
    }

    return dummyNode.bottom;
  }

  flatten(head) {
    //your code here
    let ptr = head;
    let ptr1 = ptr,
      ptr2 = null;

    while (ptr != null) {
      ptr2 = ptr.next;
      ptr = ptr2;
      ptr1 = this.mergeList(ptr1, ptr2);
    }

    return ptr1;
  }
}
