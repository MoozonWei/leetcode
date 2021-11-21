/**
 * https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/
 */

/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
    let [prepre, pre, ans] = [1, 1, 1]
    for(let i = 2; i <= n; i++) {
        ans = (pre + prepre) % (1e9 + 7);
        prepre = pre;
        pre = ans;
    }
    return ans;
};