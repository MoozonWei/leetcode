/**
 * https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/
 */

/**
 * @param {number} n
 * @return {number}
 */
 var fib = function (n) {
    if(n < 2) return n;
    let [prepre, pre] = [0, 1];
    let ans = pre;
    for(let i = 2; i < (n+1); i++) {
        ans = (prepre + pre) % (1e9 + 7);
        prepre = pre;
        pre = ans;
    }
    return ans;
};