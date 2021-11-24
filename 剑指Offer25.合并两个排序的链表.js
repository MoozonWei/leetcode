/**
 * https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    if(!headA || !headB) return null;
    let [p1, p2] = [headA, headB];
    let iter = 0;
    while(iter <= 2) {
        if(!p1) p1 = headB, iter++;
        if(!p2) p2 = headA, iter++;
        if(p1 === p2) return p1;
        p1 = p1.next, p2 = p2.next;
    }
    return null;
};