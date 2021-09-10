/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (40.69%)
 * Likes:    1773
 * Dislikes: 0
 * Total Accepted:    610.7K
 * Total Submissions: 1.5M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 *
 * 如果不存在公共前缀，返回空字符串 ""。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：strs = ["flower","flow","flight"]
 * 输出："fl"
 *
 *
 * 示例 2：
 *
 *
 * 输入：strs = ["dog","racecar","car"]
 * 输出：""
 * 解释：输入不存在公共前缀。
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] 仅由小写英文字母组成
 *
 *
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    // 分治
    let length = strs.length;
    if (length === 0) {
        return "";
    } else if (length === 1) {
        return strs[0];
    } else if (length === 2) {
        return findCommonStrInTwoStrs(strs[0], strs[1]);
    }

    let mid = Math.floor(length / 2);
    return findCommonStrInTwoStrs(
        longestCommonPrefix(strs.slice(0, mid)),
        longestCommonPrefix(strs.slice(mid, length))
    );
};

var longestCommonPrefix_1 = function (strs) {
    let length = strs.length;
    if (length === 0) {
        return "";
    } else if (length === 1) {
        return strs[0];
    }
    let commonStr = strs[0];
    for (let i = 1; i < strs.length; i++) {
        commonStr = findCommonStrInTwoStrs(commonStr, strs[i]);
    }
    return commonStr;
};

function findCommonStrInTwoStrs(str1, str2) {
    let [length1, length2] = [str1.length, str2.length];
    let commonStr = "";
    let i = 0;
    while (i < Math.min(length1, length2)) {
        let [pop1, pop2] = [str1.substr(i, 1), str2.substr(i, 1)];
        if (pop1 === pop2) {
            commonStr += pop1;
        } else {
            break;
        }
        i++;
    }
    return commonStr;
}
// @lc code=end
