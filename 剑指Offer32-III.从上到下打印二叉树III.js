/**
 * https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    let queue = [root];
    const ans = [];
    let i = 0;
    while (queue.length) {
        ans.push([...queue]);
        const newQueue = [];
        if ((i & 1) === 0) {
            for (let item of queue) {
                if (item.left) newQueue.unshift(item.left);
                if (item.right) newQueue.unshift(item.right);
            }
        } else {
            for (let item of queue) {
                if (item.right) newQueue.unshift(item.right);
                if (item.left) newQueue.unshift(item.left);
            }
        }
        queue = newQueue;
        i++;
    }

    return ans.map(v => v.map(e => e.val));
};