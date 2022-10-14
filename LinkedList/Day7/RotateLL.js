/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * https://leetcode.com/problems/rotate-list/
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * Time - O(n) + O(n)
 * Space - O(1)
 */
var rotateRight = function (head, k) {
  if (head == null) return head;

  //step1 - Calculate the length of the LL
  let ptr1 = head;
  let nodes = 0;

  while (ptr1 != null) {
    nodes += 1;
    ptr1 = ptr1.next;
  }

  //step2 - if k > length then do modulus
  let newK = k % nodes;
  if (newK == 0) return head;

  ptr1 = new ListNode();
  ptr1.next = head;

  let newLast = nodes - newK;

  //step3 - go to the last node after which rotation happens
  while (ptr1 != null && newLast != 0) {
    ptr1 = ptr1.next;
    newLast -= 1;
  }

  const newHead = ptr1.next;
  ptr1.next = null;

  let ptr2 = newHead;

  while (ptr2 != null && ptr2.next != null) {
    ptr2 = ptr2.next;
  }
  ptr2.next = head;
  head = newHead;

  return newHead;
};
