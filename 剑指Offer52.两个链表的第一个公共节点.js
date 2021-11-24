/**
 * https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    const [dummyHead1, dummyHead2] = [new ListNode(-1), new ListNode(-2)];
    dummyHead1.next = l1, dummyHead2.next = l2;
    let [pre1, pre2] = [dummyHead1, dummyHead2];
    while (pre1.next && pre2.next) {
        if (pre1.next.val > pre2.next.val) {
            const tmp = pre1.next;
            pre1.next = pre2.next;
            pre2.next = tmp;
        }
        pre1 = pre1.next
    }
    if (!pre1.next) pre1.next = pre2.next;
    return dummyHead1.next;
};