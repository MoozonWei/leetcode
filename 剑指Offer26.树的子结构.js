/**
 * https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const containOrNot = function (A, B) {
    if (B === null) return true;
    if (A === null || A.val !== B.val) return false;
    return containOrNot(A.left, B.left) && containOrNot(A.right, B.right); // B !== null && A !== null && A.val === B.val
}
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
    return (A !== null && B !== null) && (containOrNot(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B));
};