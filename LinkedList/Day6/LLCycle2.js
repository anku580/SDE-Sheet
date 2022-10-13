/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * https://leetcode.com/problems/linked-list-cycle-ii
 * @param {ListNode} head
 * @return {ListNode}
 * Time - O(N)
 * Space - O(1)
 */
var detectCycle = function (head) {
  if (!head) return head;

  let sptr = head,
    fptr = head;

  do {
    sptr = sptr.next;
    if (fptr.next != null) fptr = fptr.next.next;
    else fptr = null;
  } while (sptr != fptr && fptr != null && fptr.next != null);

  fptr = head;

  while (sptr != fptr) {
    sptr = sptr ? sptr.next : null;
    fptr = fptr ? fptr.next : null;
  }

  return sptr;
};
