/**
 * https://leetcode-cn.com/problems/he-wei-sde-liang-ge-shu-zi-lcof/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const set = new Set(nums);
    for(let item of set) {
        if(set.has(target-item)) return [item, target-item];
    }
    return [];
};