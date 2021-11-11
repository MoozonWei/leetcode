/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 *
 * https://leetcode-cn.com/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (64.00%)
 * Likes:    1293
 * Dislikes: 0
 * Total Accepted:    530.8K
 * Total Submissions: 829.4K
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 
 * 示例:
 * 
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 * 
 * 说明:
 * 
 * 
 * 必须在原数组上操作，不能拷贝额外的数组。
 * 尽量减少操作次数。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const length = nums.length;
    let [lp, rp] = [0, 0];
    while(rp < length) {
        if(nums[rp] !== 0) {
            if(rp !== lp) {
                nums[lp] = nums[rp];
                nums[rp] = 0;
            }
            lp++;
        }
        rp++;
    }
};
// @lc code=end

