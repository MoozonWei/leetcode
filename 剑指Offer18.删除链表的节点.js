/**
 * https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
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
 * @param {number} val
 * @return {ListNode}
 */
 var deleteNode = function (head, val) {
    if(!head) return head;
    const dummyHead = new ListNode(-1);
    dummyHead.next = head;
    let [pre, cur] = [dummyHead, head];
    while(cur !== null) {
        if(cur.val === val) {
            pre.next = cur.next
            cur.next = null;
            return dummyHead.next;
        }
        cur = cur.next;
        pre = pre.next;
    }
    return dummyHead.next;
};