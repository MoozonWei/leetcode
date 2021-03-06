/*
* @lc app=leetcode.cn id=5 lang=javascript
*
* [5] 最长回文子串
*
* https://leetcode-cn.com/problems/longest-palindromic-substring/description/
*
* algorithms
* Medium (34.50%)
* Likes:    3760
* Dislikes: 0
* Total Accepted:    619.1K
* Total Submissions: 1.8M
* Testcase Example:  '"babad"'
*
* 给你一个字符串 s，找到 s 中最长的回文子串。
*
*
*
* 示例 1：
*
*
* 输入：s = "babad"
* 输出："bab"
* 解释："aba" 同样是符合题意的答案。
*
*
* 示例 2：
*
*
* 输入：s = "cbbd"
* 输出："bb"
*
*
* 示例 3：
*
*
* 输入：s = "a"
* 输出："a"
*
*
* 示例 4：
*
*
* 输入：s = "ac"
* 输出："a"
*
*
*
*
* 提示：
*
*
* 1
* s 仅由数字和英文字母（大写和/或小写）组成
*
*
*/

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let length = s.length;
    if (length < 2) return s;
    let dp = [];
    for(let i = 0; i < length; i++) {
        dp[i] = [];
        for(let j = 0; j < length; j++) {
            dp[i][j] = false;
        }
    }
    let maxLength = 1;
    let startIndex = 0;
    for (let i = 0; i < length; i++) {
        dp[i][i] = true;
    }
    for (let l = 2; l <= length; l++) {
        for (let i = 0; i < length; i++) {
            let j = i + l - 1;
            if (j >= length) break;
            if (s.charAt(i) !== s.charAt(j)) {
                dp[i][j] = false;
            } else {
                if(l < 3) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = dp[i+1][j-1];
                }
            }
            if(dp[i][j] && l > maxLength) {
                maxLength = l;
                startIndex = i;
            }
        }
    }
    return s.substr(startIndex, maxLength);
}

var longestPalindrome_1 = function (s) {
    // 中心扩散法
    let easyStr = s.split("").join("#");
    easyStr = "#" + easyStr + "#";
    let strLength = easyStr.length;
    let maxLength = 3;
    let startIndex = 0;
    for (let i = 0; i < strLength - 1; i++) {
        let [leftIndex, rightIndex, leftAvailable, rightAvailable] = [
            i - 1,
            i + 1,
            i,
            strLength - 1 - i,
        ];
        let [tempLength, tempStartIndex] = [1, i];
        while (i - leftIndex <= leftAvailable && rightIndex - i <= rightAvailable) {
            if (easyStr.charAt(leftIndex) === easyStr.charAt(rightIndex)) {
                tempLength += 2;
                tempStartIndex = leftIndex;
                leftIndex--;
                rightIndex++;
            } else {
                break;
            }
        }
        if ((tempLength - 1) / 2 > (maxLength - 1) / 2) {
            maxLength = tempLength;
            startIndex = tempStartIndex;
        }
    }
    // if(easyStr.charAt(startIndex) === '#') {
    //     return s.substr((startIndex+1)/2, (maxLength-1)/2);
    // } else {
    //     return s.substr();
    // }
    return s.substr(Math.floor((startIndex + 1) / 2), (maxLength - 1) / 2);
};
// @lc code=end
