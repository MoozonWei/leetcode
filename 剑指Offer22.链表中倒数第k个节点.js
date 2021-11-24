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
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
    let [fast, slow] = [head, head];
    while(fast !== null) {
        if(k <= 0) slow = slow.next;
        fast = fast.next;
        k--;
    }
    return k <= 0 ? slow : undefined;
};