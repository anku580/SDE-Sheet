/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * https://leetcode.com/problems/reverse-linked-list
 * @param {ListNode} head
 * @return {ListNode}
 * Time - O(N)
 * Space - O(1)
 */
var reverseList = function (head) {
  let prev = null;
  let curr = head;

  while (curr != null) {
    let cNext = curr.next;
    curr.next = prev;
    prev = curr;
    curr = cNext;
  }

  return prev;
};
