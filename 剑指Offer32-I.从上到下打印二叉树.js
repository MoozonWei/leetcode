/**
 * https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/
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
 * @return {number[]}
 */
 var levelOrder = function(root) {
    if(!root) return [];
    let queue = [root];
    const ans = [];
    while(queue.length) {
        queue.forEach(e => { ans.push(e.val)});
        const newQueue = []
        for(let e of queue) {
            if(e.left) newQueue.push(e.left);
            if(e.right) newQueue.push(e.right);
        }
        queue = newQueue;
    }
    return ans;
};