/**
 * https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    const length = nums.length;
    let [left, right] = [0, length-1];
    let mid = 0;
    let ans = [];
    // 先找左边界
    while(left < right) {
        mid = left + ((right - left) >> 1);
        if(nums[mid] < target) {
            left = mid+1;
        } else {
            right = mid;
        }
    }
    if(nums[left] !== target) return 0;
    ans.push(left);
    // 再找右边界
    [left, right] = [0, length-1];
    while(left < right) {
        mid = left + ((right - left) >> 1) + 1;
        if(nums[mid] > target) {
            right = mid-1;
        } else {
            left = mid;
        }
    }
    ans.push(right);
    return (ans[1]-ans[0]+1);
};