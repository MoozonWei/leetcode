/**
 * https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
    let length = nums.length;
    let i = 0;
    while (i < length) {
        // 如果是oushu
        if ((nums[i] & 1) === 0) {
            nums.push(nums.splice(i, 1));
            length--;
        } else i++;
    }
    return nums;
};