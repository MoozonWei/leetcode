/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 *
 * https://leetcode-cn.com/problems/sort-list/description/
 *
 * algorithms
 * Medium (66.75%)
 * Likes:    1276
 * Dislikes: 0
 * Total Accepted:    203.2K
 * Total Submissions: 304.5K
 * Testcase Example:  '[4,2,1,3]'
 *
 * 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
 * 
 * 进阶：
 * 
 * 
 * 你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [4,2,1,3]
 * 输出：[1,2,3,4]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [-1,5,3,4,0]
 * 输出：[-1,0,3,4,5]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：head = []
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点的数目在范围 [0, 5 * 10^4] 内
 * -10^5 
 * 
 * 
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
 * @return {ListNode}
 */
var sortList = function(head) {
    if(head == null) return head;
    let length = lengthOfList(head);
    const dummyHead = new ListNode(-1, head);
    for(let sub = 1; sub < length; sub <<= 1) {
        let [prev, p1, p2] = [dummyHead, dummyHead.next, null];
        while(p1 !== null) {
            // find p2
            let t1 = p1;
            for(let i = 1; i < sub && t1.next !== null; i++) {
                t1 = t1.next;
            }
            p2 = t1.next;
            t1.next = null; //cut
            let t2 = p2;
            for(let j = 1; j < sub && t2 !== null && t2.next !== null; j++) {
                t2 = t2.next;
            }
            let nextP1 = null;
            if(t2 !== null) {
                nextP1 = t2.next;
                t2.next = null;
            }
            prev.next = mergeTwoList(p1,p2);
            while(prev.next != null) {
                prev = prev.next;
            }
            p1 = nextP1;
        }
    }
    return dummyHead.next;
};

function lengthOfList(head) {
    let length = 0;
    while(head != null) {
        length++;
        head = head.next;
    }
    return length;
}

function mergeTwoList(head1, head2) {
    if(head1 === null) {
        return head2;
    } else if(head2 == null) {
        return head1;
    }
    let newHead = null;
    if(head1.val < head2.val) {
        newHead = head1;
        head1 = head1.next;
    } else {
        newHead = head2;
        head2 = head2.next;
    }
    let cur = newHead;
    while (head1 !== null && head2 !== null) {
        if(head1.val < head2.val) {
            cur.next = head1;
            head1 = head1.next;
        } else {
            cur.next = head2;
            head2 = head2.next;
        }
        cur = cur.next;
    }
    if(head1 === null) {
        cur.next = head2;
    } else {
        cur.next = head1;
    }
    return newHead;
}
// @lc code=end

