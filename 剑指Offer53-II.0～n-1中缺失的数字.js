/**
 * https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    let [left, right] = [0, nums.length-1];
    while(left <= right) {
        const mid = left + ((right - left) >> 1);
        if(nums[mid] === mid) left = mid+1;
        else right = mid - 1;
    }
    return left;
};