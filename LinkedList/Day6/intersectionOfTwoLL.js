/**
 * https://leetcode.com/problems/intersection-of-two-linked-lists/
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * Time - O(m+n)
 * Space - O(m)
 */
var getIntersectionNode = function (headA, headB) {
  const map = new Map();
  let ptr1 = headA;

  while (ptr1 != null) {
    map.set(ptr1, ptr1);
    ptr1 = ptr1.next;
  }

  ptr1 = headB;
  while (ptr1 != null) {
    if (map.has(ptr1) && map.get(ptr1) == ptr1) return ptr1;
    ptr1 = ptr1.next;
  }

  return null;
};
