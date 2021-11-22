/**
 * https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/
 */

/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
    numStr = num.toString();
    const length = numStr.length;
    let dp = new Array(length+1);
    dp[0] = 1, dp[1] = 1;
    for (let i = 2; i <= length; i++) {
        dp[i] = dp[i-1] + ((parseInt(numStr[i-2]+numStr[i-1]) <= 25 && parseInt(numStr[i-2]+numStr[i-1]) >= 10) ? dp[i-2] : 0);
    }
    return dp[length];
};