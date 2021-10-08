/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 *
 * https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (42.37%)
 * Likes:    1233
 * Dislikes: 0
 * Total Accepted:    343.4K
 * Total Submissions: 810.5K
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * 
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 * 
 * 进阶：
 * 
 * 
 * 你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [5,7,7,8,8,10], target = 8
 * 输出：[3,4]
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [5,7,7,8,8,10], target = 6
 * 输出：[-1,-1]
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [], target = 0
 * 输出：[-1,-1]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * -10^9 
 * nums 是一个非递减数组
 * -10^9 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // 整体思路就是 先找左边界再找右边界

    let length = nums.length
    if (length === 0) {
        return [-1, -1]
    }
    let res = []

    // 找左边界
    let [left, right] = [0, length - 1]
    while (left < right) {
        const mid = left + ((right - left) >> 1)
        if (nums[mid] < target) {
            left = mid + 1
        } else if (nums[mid] >= target) {
            right = mid
        }
    }
    res.push(nums[left] === target ? left : -1)

    // 在找右边界
    left = 0
    right = length - 1
    while (left < right) {
        const mid = 1 + left + ((right - left) >> 1)
        if (nums[mid] > target) {
            right = mid - 1
        } else if (nums[mid] <= target) {
            left = mid
        }
    }
    res.push(nums[right] === target ? right : -1)

    return res
};
// @lc code=end

nums = [5,7,7,8,8,10]
target = 8

console.log(searchRange(nums, target))