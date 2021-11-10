/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 *
 * https://leetcode-cn.com/problems/house-robber-ii/description/
 *
 * algorithms
 * Medium (43.37%)
 * Likes:    820
 * Dislikes: 0
 * Total Accepted:    176.9K
 * Total Submissions: 408K
 * Testcase Example:  '[2,3,2]'
 *
 * 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈
 * ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。
 * 
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [2,3,2]
 * 输出：3
 * 解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1,2,3,1]
 * 输出：4
 * 解释：你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
 * 偷窃到的最高金额 = 1 + 3 = 4 。
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [0]
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 0 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
/**
 * dp[0] = nums[0];
 * dp[1] = nums[1];
 */

    const length = nums.length;
    if(length === 1) return nums[0];
    if(length === 2) return Math.max(nums[0], nums[1]);
    const dp1 = new Array(length-1);
    const dp2 = new Array(length-1);

    // dp1
    dp1[0] = nums[0];
    dp1[1] = Math.max(nums[0], nums[1]);
    for(let i = 2; i < length-1; i++) {
        dp1[i] = Math.max(dp1[i-1], dp1[i-2] + nums[i]);
    }

    // dp2
    dp2[0] = nums[1];
    dp2[1] = Math.max(nums[1], nums[2]);
    for(let i = 2; i < length-1; i++) {
        dp2[i] = Math.max(dp2[i-1], dp2[i-2] + nums[i+1]);
    }

    return dp1[length-2] > dp2[length-2] ? dp1.pop() : dp2.pop();
};
// @lc code=end

