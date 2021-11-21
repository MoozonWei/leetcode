/**
 * https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var mirrorTree = function(root) {
    if(root === null) return null;
    const [left, right] = [mirrorTree(root.right), mirrorTree(root.left)];
    root.left = left, root.right = right;
    return root;
};