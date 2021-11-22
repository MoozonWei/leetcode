/**
 * https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/
 */

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function (s) {
    let length = s.length;
    let maxLength = 0;
    let set = new Set();
    let windowR = -1;
    for (let windowL = 0; windowL < length; windowL++) {
        while(!set.has(s.charAt(windowR+1)) && windowR+1 < length) {
            set.add(s.charAt(windowR+1));
            windowR++;
        }
        maxLength = Math.max((windowR + 1 - windowL), maxLength);
        set.delete(s.charAt(windowL));
    }
    return maxLength;
};