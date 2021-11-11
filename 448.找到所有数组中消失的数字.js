/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 *
 * https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/description/
 *
 * algorithms
 * Easy (64.95%)
 * Likes:    842
 * Dislikes: 0
 * Total Accepted:    143.7K
 * Total Submissions: 221.3K
 * Testcase Example:  '[4,3,2,7,8,2,3,1]'
 *
 * 给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没有出现在 nums
 * 中的数字，并以数组的形式返回结果。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [4,3,2,7,8,2,3,1]
 * 输出：[5,6]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1,1]
 * 输出：[2]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == nums.length
 * 1 
 * 1 
 * 
 * 
 * 进阶：你能在不使用额外空间且时间复杂度为 O(n) 的情况下解决这个问题吗? 你可以假定返回的数组不算在额外空间内。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let ans = [];
    const numsSet = new Set(nums);
    for(let i = 1; i <= nums.length; i++) {
        if(!numsSet.has(i)) {
            ans.push(i);
        }
    }
    return ans;
};

var findDisappearedNumbers = function(nums) {
    let length = nums.length;
    let ans = [];
    for(const item of nums) {
        nums[(item-1)%length] += length;
    }
    for(let i = 0; i < length; i++) {
        if(nums[i] <= length) ans.push(i+1);
    }
    return ans;
};
// @lc code=end

