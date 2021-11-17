/**
 * https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/
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
 * @return {number[]}
 */
 var reversePrint = function(head) {
    if(head === null) return [];
    if(head.next === null) return [head.val];
    return new Array(...reversePrint(head.next), head.val);
};

/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
     let result = [];
     let p = head;
     while(p !== null) {
        result.unshift(p.val);
        p = p.next;
     }
     return result;
};