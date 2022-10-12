/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 * Time - O(m+n)
 * Space - O(1)
 */
var mergeTwoLists = function (list1, list2) {
  let dummyNode = new ListNode();
  let ptr1 = dummyNode;

  while (list1 != null && list2 != null) {
    if (list1.val < list2.val) {
      ptr1.next = list1;
      list1 = list1.next;
    } else {
      ptr1.next = list2;
      list2 = list2.next;
    }
    ptr1 = ptr1.next;
  }

  while (list1 != null) {
    ptr1.next = list1;
    list1 = list1.next;
    ptr1 = ptr1.next;
  }

  while (list2 != null) {
    ptr1.next = list2;
    list2 = list2.next;
    ptr1 = ptr1.next;
  }

  return dummyNode.next;
};
