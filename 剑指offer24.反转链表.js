/**
 * https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    if(head === null ||head.next === null) return head;
    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
 };
 
 /**
  * @param {ListNode} head
  * @return {ListNode}
  */
  var reverseList = function(head) {
    let prev = null;
    while(head) {
        const next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
 };