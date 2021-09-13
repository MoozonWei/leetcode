/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 *
 * https://leetcode-cn.com/problems/longest-increasing-subsequence/description/
 *
 * algorithms
 * Medium (51.13%)
 * Likes:    1861
 * Dislikes: 0
 * Total Accepted:    346.1K
 * Total Submissions: 674.5K
 * Testcase Example:  '[10,9,2,5,3,7,101,18]'
 *
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
 * 
 * 子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7]
 * 的子序列。
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [10,9,2,5,3,7,101,18]
 * 输出：4
 * 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0,1,0,3,2,3]
 * 输出：4
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [7,7,7,7,7,7,7]
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * -10^4 
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 你可以设计时间复杂度为 O(n^2) 的解决方案吗？
 * 你能将算法的时间复杂度降低到 O(n log(n)) 吗?
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // dp
    let length = nums.length;
    let dp = new Array(length);
    dp[0] = 1;
    let max = 1;
    for(let i = 1; i < length; i++) {
        dp[i] = 1;
        for(let j = 0; j < i; j++) {
            if(nums[i] > nums[j]) {
                dp[i] = Math.max(dp[j]+1, dp[i]);
            }
        }
        max = Math.max(max, dp[i]);
    }
    return max;
};
var lengthOfLIS = function(nums) {
    // greedy + binary search
    let length = nums.length;
    if(length < 2) return length;

    let tails = [nums[0]];
    for(let idx = 1; idx < length; idx++) {
        if(nums[idx] <= tails[tails.length-1]) {
            tails[bnrySrch(tails, nums[idx])] = nums[idx];
        } else {
            tails.push(nums[idx]);
        }
    }

    return tails.length;

    function bnrySrch(arr, value) {
        let [l, r] = [0, arr.length-1];
        while(l <= r) {
            let m = Math.floor((l+r+1)/2);
            if(value === arr[m]) {
                return m;
            } else if(value < arr[m]) {
                r = m-1;
            } else {
                l = m+1;
            }
        } 
        return r+1;
    }
}
lengthOfLIS([4,10,4,3,8,9]);
// @lc code=end

