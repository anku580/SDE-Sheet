/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * Time - O(n)
 * Space - O(1)
 */
var removeNthFromEnd = function (head, n) {
  let dummyNode = new ListNode();
  dummyNode.next = head;
  let ptr1 = dummyNode;
  let ptr2 = dummyNode;

  while (n--) {
    ptr1 = ptr1.next;
  }

  while (ptr1.next != null) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }

  const nodeToRemove = ptr2.next;
  ptr2.next = nodeToRemove.next;

  return dummyNode.next;
};
