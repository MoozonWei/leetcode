/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] !== 9) {
            digits[i]++;
            // 不为9，加1后直接返回
            return digits;
        } else {
            // 当前位为9时，把当前位置为0，继续循环会进行进位操作
            digits[i] = 0;
        }
    }
  
    // 当遍历结束了，且数组是99、999... 等特殊情况，在开头添加1
    digits.unshift(1);
    return digits;
};
// @lc code=end

