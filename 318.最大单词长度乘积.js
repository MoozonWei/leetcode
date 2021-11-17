/*
 * @lc app=leetcode.cn id=318 lang=javascript
 *
 * [318] 最大单词长度乘积
 *
 * https://leetcode-cn.com/problems/maximum-product-of-word-lengths/description/
 *
 * algorithms
 * Medium (68.82%)
 * Likes:    256
 * Dislikes: 0
 * Total Accepted:    38.5K
 * Total Submissions: 52.8K
 * Testcase Example:  '["abcw","baz","foo","bar","xtfn","abcdef"]'
 *
 * 给定一个字符串数组 words，找到 length(word[i]) * length(word[j])
 * 的最大值，并且这两个单词不含有公共字母。你可以认为每个单词只包含小写字母。如果不存在这样的两个单词，返回 0。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: ["abcw","baz","foo","bar","xtfn","abcdef"]
 * 输出: 16 
 * 解释: 这两个单词为 "abcw", "xtfn"。
 * 
 * 示例 2:
 * 
 * 
 * 输入: ["a","ab","abc","d","cd","bcd","abcd"]
 * 输出: 4 
 * 解释: 这两个单词为 "ab", "cd"。
 * 
 * 示例 3:
 * 
 * 
 * 输入: ["a","aa","aaa","aaaa"]
 * 输出: 0 
 * 解释: 不存在这样的两个单词。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 2 
 * 1 
 * words[i] 仅包含小写字母
 * 
 * 
 */

// @lc code=start
/**
 * 暴力解法 (最好别这么干)
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    let areThereAnyCommonCharacters = (str1, str2) => {
        const length1 = str1.length;
        const length2 = str2.length;
        for(let i = 0; i < length1; i++) {
            for(let j = 0; j < length2; j++) {
                if(str1[i] === str2[j]) return true;
            }
        }
        return false;
    }

    const length = words.length;
    let ans = 0;
    for(let i = 0; i < length; i++) {
        for(let j = i; j < length; j++) {
            if(!areThereAnyCommonCharacters(words[i], words[j])) {
                ans = Math.max(ans, words[i].length*words[j].length);
            }
        }
    }
    return ans;
};
// @lc code=end

