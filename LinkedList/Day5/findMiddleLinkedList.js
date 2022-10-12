/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * https://leetcode.com/problems/middle-of-the-linked-list/
 * @param {ListNode} head
 * @return {ListNode}
 * Time - O(n)
 * Space - O(1)
 */
var middleNode = function (head) {
  let sptr = head,
    fptr = head;

  while (fptr != null && fptr.next != null) {
    sptr = sptr.next;
    fptr = fptr.next.next;
  }

  return sptr;
};
