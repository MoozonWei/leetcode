/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if(k === 1) return head;
    
};

function reverseOneGroup(head, k) {
    if(head === null) return null;
    let [tail, i, nextHead] = [head, 1, null];
    while(tail.next != null && i < k) {
        tail = tail.next;
        i++;
    }
    if(i < k) {
        return {head, tail, nextHead};
    } 
    nextHead = tail.next;
    
}
// @lc code=end

