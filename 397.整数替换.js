/*
 * @lc app=leetcode.cn id=397 lang=javascript
 *
 * [397] 整数替换
 *
 * https://leetcode-cn.com/problems/integer-replacement/description/
 *
 * algorithms
 * Medium (37.62%)
 * Likes:    137
 * Dislikes: 0
 * Total Accepted:    22.5K
 * Total Submissions: 56.6K
 * Testcase Example:  '8'
 *
 * 给定一个正整数 n ，你可以做如下操作：
 * 
 * 
 * 如果 n 是偶数，则用 n / 2替换 n 。
 * 如果 n 是奇数，则可以用 n + 1或n - 1替换 n 。
 * 
 * 
 * n 变为 1 所需的最小替换次数是多少？
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 8
 * 输出：3
 * 解释：8 -> 4 -> 2 -> 1
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 7
 * 输出：4
 * 解释：7 -> 8 -> 4 -> 2 -> 1
 * 或 7 -> 6 -> 3 -> 2 -> 1
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：n = 4
 * 输出：2
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 
 * 
 */

/**
 * 15 - 14 - 7 - 
 * 11 - 10 - 5 - 4 - 2 - 1
 * 11 - 12 - 6 - 3 - 2 - 1
 *  9 -  8 - 4 - 2 - 1
 *  9 - 10 - 5 - 4 - 2 - 1
 */

// @lc code=start
/**
 * 超出时间时间限制
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
    const dp = new Array(n);
    dp[0] = 0;
    for(let i = 1; i < n; i++) {
        // 如果是偶数
        if(i & 1) dp[i] = dp[i >> 1] + 1;
        // 如果是奇数
        else dp[i] = Math.min(dp[i-1], (dp[(i+1) >> 1] ? dp[(i+1) >> 1] : Infinity) + 1) + 1;
    }
    return dp[n-1];
};

/**
 * @param {number} n
 * @return {number}
 */
 var integerReplacement = function(n) {
    if(n === 1) return 0;
    if(!(n & 1)) return integerReplacement(n >> 1) + 1; // 偶数
    return Math.min(integerReplacement((n >> 1) + 1) + 1, integerReplacement(n-1)) + 1;  // 奇数
};
// @lc code=end
