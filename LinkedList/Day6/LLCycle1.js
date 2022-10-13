/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * https://leetcode.com/problems/linked-list-cycle/
 * @param {ListNode} head
 * @return {boolean}
 * Time - O(n)
 * Space - O(1)
 */
var hasCycle = function (head) {
  let ptr1 = head;
  let ptr2 = head;

  while (ptr2 != null && ptr2.next != null) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next.next;

    if (ptr1 == ptr2) return true;
  }

  return false;
};
