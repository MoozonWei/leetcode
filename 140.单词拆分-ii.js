/*
 * @lc app=leetcode.cn id=140 lang=javascript
 *
 * [140] 单词拆分 II
 *
 * https://leetcode-cn.com/problems/word-break-ii/description/
 *
 * algorithms
 * Hard (49.52%)
 * Likes:    524
 * Dislikes: 0
 * Total Accepted:    55.5K
 * Total Submissions: 111.9K
 * Testcase Example:  '"catsanddog"\n["cat","cats","and","sand","dog"]'
 *
 * 给定一个非空字符串 s 和一个包含非空单词列表的字典
 * wordDict，在字符串中增加空格来构建一个句子，使得句子中所有的单词都在词典中。返回所有这些可能的句子。
 * 
 * 说明：
 * 
 * 
 * 分隔时可以重复使用字典中的单词。
 * 你可以假设字典中没有重复的单词。
 * 
 * 
 * 示例 1：
 * 
 * 输入:
 * s = "catsanddog"
 * wordDict = ["cat", "cats", "and", "sand", "dog"]
 * 输出:
 * [
 * "cats and dog",
 * "cat sand dog"
 * ]
 * 
 * 
 * 示例 2：
 * 
 * 输入:
 * s = "pineapplepenapple"
 * wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
 * 输出:
 * [
 * "pine apple pen apple",
 * "pineapple pen apple",
 * "pine applepen apple"
 * ]
 * 解释: 注意你可以重复使用字典中的单词。
 * 
 * 
 * 示例 3：
 * 
 * 输入:
 * s = "catsandog"
 * wordDict = ["cats", "dog", "sand", "and", "cat"]
 * 输出:
 * []
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
    const length = s.length;
    const wdSet = new Set(wordDict);
    const dp = new Array(length + 1).fill(null);
    dp[0] = [""];

    for (let i = 1; i <= length; i++) {
        for (let j = i; j > 0; j--) {
            const str = s.substr(j - 1, i-j+1);
            if (wdSet.has(str) && dp[j - 1]) {
                if (!dp[i]) dp[i] = new Array();
                for (let k = 0; k < dp[j - 1].length; k++) {
                    dp[i].push((dp[j - 1][k] + " " + str).trim());
                }
            }
        }
    }
    return dp[length] ? dp[length] : [];
};
// @lc code=end

