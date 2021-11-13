/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (77.28%)
 * Likes:    2144
 * Dislikes: 0
 * Total Accepted:    373.5K
 * Total Submissions: 483.4K
 * Testcase Example:  '3'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 
 * 有效括号组合需满足：左括号必须以正确的顺序闭合。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 1
 * 输出：["()"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 8
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let cache = new Array(n+1).fill(null);
    function generate(n) {
        // 先从缓存里面读取
        if(cache[n] !== null) return cache[n];
        // 边界条件
        let ans = [];
        if(n === 0) ans.push("");
        else {
            for(let i = 0; i < n; i++) {
                for(let a of generate(i)) {
                    for(let b of generate(n-i-1)) {
                        ans.push("(" + a + ")" + b);
                    }
                }
            }
        }
        cache[n] = ans;
        return ans;
    }
    return generate(n);
};
// @lc code=end

