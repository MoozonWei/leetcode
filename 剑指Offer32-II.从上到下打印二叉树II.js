/**
 * https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/
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
    if(!root) return [];
    let queue = [root];
    const ans = [];
    while(queue.length) {
        ans.push([...queue]);
        const newQueue = [];
        for(let item of queue) {
            if(item.left) newQueue.push(item.left);
            if(item.right) newQueue.push(item.right);
        }
        queue = newQueue;
    }

    return ans.map(v => v.map(e => e.val));
};