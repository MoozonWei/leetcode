/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let array = [];
    let pointer = head;
    while(pointer != null) {
        array.push(pointer.val);
        pointer = pointer.next;
    }
    let [low, high] = [0, array.length-1];
    while(low < high) {
        if(array[low] != array[high]){
            return false;
        }
        low++;
        high--;
    }
    return true;
};
// @lc code=end

