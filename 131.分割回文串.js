/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 *
 * https://leetcode-cn.com/problems/palindrome-partitioning/description/
 *
 * algorithms
 * Medium (72.30%)
 * Likes:    890
 * Dislikes: 0
 * Total Accepted:    141.2K
 * Total Submissions: 195.3K
 * Testcase Example:  '"aab"'
 *
 * 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
 * 
 * 回文串 是正着读和反着读都一样的字符串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "aab"
 * 输出：[["a","a","b"],["aa","b"]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "a"
 * 输出：[["a"]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 仅由小写英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    function isPalindrome(s) {
        return s === s.split('').reverse().join('');
    }
    const length = s.length;
    const dp = [];
    dp[0] = [s[0]];
    for(let i = 1; i < length; i++) {
        dp[i] = [];
        for(arr of dp[i-1]){
            const cpArr1 = arr.slice(0);
            dp[i].push(cpArr1.push(s[i]));
            const tmp = arr[arr.length-1] + s[i];
            const cpArr2 = arr.slice(0);
            if(isPalindrome(tmp)) dp[i].push(cpArr2.push(cpArr2.pop() + s[i]));
        }
    }
    return dp[length-1];
};
// @lc code=end

