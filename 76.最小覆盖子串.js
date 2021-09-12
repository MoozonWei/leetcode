/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 *
 * https://leetcode-cn.com/problems/minimum-window-substring/description/
 *
 * algorithms
 * Hard (42.38%)
 * Likes:    1336
 * Dislikes: 0
 * Total Accepted:    178.6K
 * Total Submissions: 420.1K
 * Testcase Example:  '"ADOBECODEBANC"\n"ABC"'
 *
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 ""
 * 。
 * 
 * 
 * 
 * 注意：
 * 
 * 
 * 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
 * 如果 s 中存在这样的子串，我们保证它是唯一的答案。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "ADOBECODEBANC", t = "ABC"
 * 输出："BANC"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "a", t = "a"
 * 输出："a"
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: s = "a", t = "aa"
 * 输出: ""
 * 解释: t 中两个字符 'a' 均应包含在 s 的子串中，
 * 因此没有符合条件的子字符串，返回空字符串。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 和 t 由英文字母组成
 * 
 * 
 * 
 * 进阶：你能设计一个在 o(n) 时间内解决此问题的算法吗？
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    // 滑动窗口
    let [sLength, tLength] = [s.length, t.length];
    if(sLength < t.length) return "";
    else if(sLength === tLength && s === t) return s;

    let howManyList = toHowManyList(t);
    let tmpMap = new Map();
    for(let i = 1; i < sLength; i++) {
        tmpMap.set(s.charAt(i), 0);
    }
    tmpMap.set(s.charAt(0), 1);
    // 窗口左右边界的作用在于，左边界每少一个set中有的元素，右边界就要向右添加一个等同的元素
    let [windowL, windowR] = [0, 0];
    let [minLength, begin] = [sLength+1, -1];

    while(windowR < sLength) {
        tempLength = windowR + 1 - windowL;
        if(hasAll(tmpMap, howManyList)) {
            if(tempLength < minLength) {
                minLength = tempLength;
                begin = windowL;
            }
            tmpMap.set(s.charAt(windowL), tmpMap.get(s.charAt(windowL))-1);
            windowL++;
        } else {
            windowR++;
            tmpMap.set(s.charAt(windowR), tmpMap.get(s.charAt(windowR))+1);
        }
    }
    if(begin !== -1) {
        return s.substr(begin, minLength);
    } else {
        return "";
    }
};

function hasAll(has, need) {
    for(let [key, value] of need) {
        if(!has.has(key) || has.get(key) < value) {
            return false;
        }
    }
    return true;
}

function toHowManyList(str) {
    let howManyList = new Map();
    for(let i = 0; i < str.length; i++) {
        let thisChar = str.charAt(i);
        if(howManyList.has(thisChar)) {
            howManyList.set(thisChar, howManyList.get(thisChar)+1);
        } else {
            howManyList.set(thisChar, 1);
        }
    }
    return howManyList;
}

console.log(minWindow("abc", "ac"));
// @lc code=end

