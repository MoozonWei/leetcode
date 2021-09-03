/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    return merge(lists, 0, lists.length-1);
};

function merge(lists, index_left, index_right) {
    if(index_right < index_left) {
        return null;
    } else if(index_right === index_left) {
        return lists[index_left];
    }
    let index_mid = parseInt((index_left+index_right+1)/2);
    return mergeTwoList(merge(lists, index_left, index_mid-1), merge(lists, index_mid, index_right));
}

function mergeTwoList(list1, list2) {
    if(list1 === null || list2 === null) {
        return list1 != null ? list1 : list2;
    }
    
    let head = null;
    if(list1.val > list2.val) {
        head = list2;
        list2 = list2.next;
    } else {
        head = list1;
        list1 = list1.next;
    }
    let tail = head;
    while(list1 !== null && list2 !== null) {
        if(list1.val > list2.val) {
            tail.next = list2;
            list2 = list2.next;
        } else {
            tail.next = list1;
            list1 = list1.next;
        }
        tail = tail.next;
    }

    if(list1 === null) {
        tail.next = list2;
    } else {
        tail.next = list1;
    }
    return head;
};
// @lc code=end

