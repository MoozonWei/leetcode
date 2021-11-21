/**
 * https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const check = function (l, r) {
    if (l === null || r === null) return l === r;
    return l.val === r.val && check(l.left, r.right) && check(l.right, r.left);
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    return check(root, root);
};