/**
 * https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/
 */

/**
 * @param {string} s
 * @return {string}
 */
 var replaceSpace = function(s) {
    return s.split(' ').join('%');
};