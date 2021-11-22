/**
 * https://leetcode-cn.com/problems/li-wu-de-zui-da-jie-zhi-lcof/
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxValue = function (grid) {
    const height = grid.length;
    const width = grid[0].length;
    // 初始化状态方程
    const dp = new Array(height).fill(0).map(e => new Array(width).fill(0));
    dp[0][0] = grid[0][0];
    for(let i = 1; i < width; i++) dp[0][i] = grid[0][i] + dp[0][i-1];
    for(let i = 1; i < height; i++) dp[i][0] = grid[i][0] + dp[i-1][0];
    // 状态转移
    for(let i = 1; i < height; i++) {
        for(let j = 1; j < width; j++) {
            dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]) + grid[i][j];
        }
    }
    return dp[height-1][width-1];
};