/**
 * https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    const length = nums.length;
    const dp = new Array(length).fill(0);
    let ans = nums[0];
    dp[0] = nums[0];
    for(let i = 1; i < length; i++) {
        dp[i] = Math.max(nums[i], nums[i]+dp[i-1]);
        ans = Math.max(ans, dp[i]);
    }

    return ans;
};