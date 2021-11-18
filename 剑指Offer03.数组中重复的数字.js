/**
 * https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums, set = new Set()) {
    for(let e of nums) {
        if(set.has(e)) return e;
        else set.add(e);
    }
    return -1;
};