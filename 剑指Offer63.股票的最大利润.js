/**
 * https://leetcode-cn.com/problems/gu-piao-de-zui-da-li-run-lcof/
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length === 0) return 0;
    let [min, ans] = [prices[0], 0];
    for (price of prices) {
        min = Math.min(min, price);
        ans = Math.max(ans, price - min);
    }
    return ans;
};