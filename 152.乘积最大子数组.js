/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 *
 * https://leetcode-cn.com/problems/maximum-product-subarray/description/
 *
 * algorithms
 * Medium (42.18%)
 * Likes:    1354
 * Dislikes: 0
 * Total Accepted:    194K
 * Total Submissions: 459.9K
 * Testcase Example:  '[2,3,-2,4]'
 *
 * 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: [2,3,-2,4]
 * 输出: 6
 * 解释: 子数组 [2,3] 有最大乘积 6。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [-2,0,-1]
 * 输出: 0
 * 解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    /**
     * 状态方程可以维护2个值，一个正数最大值，一个是负数最小值
     */
    const length = nums.length;
    let dpMax = new Array(length);
    let dpMin = new Array(length);
    dpMax[0] = nums[0];
    dpMin[0] = nums[0];

    for (let i = 1; i < length; i++) {
        dpMax[i] = Math.max(dpMax[i - 1] * nums[i], dpMin[i - 1] * nums[i], nums[i]);
        dpMin[i] = Math.min(dpMax[i - 1] * nums[i], dpMin[i - 1] * nums[i], nums[i]);
    }
    return Math.max(...dpMax);
};

var maxProduct = function (nums) {
    /**
     * 状态方程可以维护2个值，一个正数最大值，一个是负数最小值
     */
    const length = nums.length;
    let [max, min, ans] = [nums[0], nums[0], nums[0]];

    for(let i = 1; i < length; i++) {
        const [mx, mn] = [max, min];
        max = Math.max(mx*nums[i], mn*nums[i], nums[i]);
        min = Math.min(mx*nums[i], mn*nums[i], nums[i]);
        ans = Math.max(max, ans);
    }

    return ans;
};
// @lc code=end

