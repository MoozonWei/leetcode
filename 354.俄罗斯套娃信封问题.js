/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 *
 * https://leetcode-cn.com/problems/russian-doll-envelopes/description/
 *
 * algorithms
 * Hard (45.09%)
 * Likes:    580
 * Dislikes: 0
 * Total Accepted:    68.4K
 * Total Submissions: 151.3K
 * Testcase Example:  '[[5,4],[6,4],[6,7],[2,3]]'
 *
 * 给你一个二维整数数组 envelopes ，其中 envelopes[i] = [wi, hi] ，表示第 i 个信封的宽度和高度。
 * 
 * 当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样。
 * 
 * 请计算 最多能有多少个 信封能组成一组“俄罗斯套娃”信封（即可以把一个信封放到另一个信封里面）。
 * 
 * 注意：不允许旋转信封。
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：envelopes = [[5,4],[6,4],[6,7],[2,3]]
 * 输出：3
 * 解释：最多信封的个数为 3, 组合为: [2,3] => [5,4] => [6,7]。
 * 
 * 示例 2：
 * 
 * 
 * 输入：envelopes = [[1,1],[1,1],[1,1]]
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * envelopes[i].length == 2
 * 1 i, hi 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */

var maxEnvelopes = function(envelopes) {
    // dp
    const [WIDTH, HEIGHT] = [0, 1]
    let envNum = envelopes.length;
    let viewedMap = new Map();
    // 初始化有向图
    let reachableMatrix = [];
    for(let i = 0; i < envNum; i++) {
        reachableMatrix[i] = [];
        for(let j = 0; j < envNum; j++) {
            reachableMatrix[i][j] = envelopes[i][WIDTH] > envelopes[j][WIDTH] && envelopes[i][HEIGHT] > envelopes[j][HEIGHT] ? true : false;
        }
    }
    let maxCanContain = 0; 
    for(let i = 0; i < envNum; i++) {
        maxCanContain = Math.max(findMax(reachableMatrix, i), maxCanContain);
    }
    return maxCanContain;

    function findMax(reachableMatrix, i) {
        const reachableArray = [];
        const length = reachableMatrix.length;
        for(let j = 0; j < length; j++) {
            if(reachableMatrix[i][j]) {
                reachableArray.push(j);
            }
        }
        if(reachableArray.length === 0) {
            viewedMap.set(i, 1);
            return 1;
        }
        let canContain = 0;
        for(let value of reachableArray) {
            canContain = Math.max(canContain, viewedMap.has(value) ? viewedMap.get(value)+1 : findMax(reachableMatrix, value)+1);
        }
        viewedMap.set(i, canContain);
        return canContain;
    }
};

var maxEnvelopes = function(envelopes) {
    if (envelopes.length === 0) {
        return 0;
    }
    
    const n = envelopes.length;
    envelopes.sort((e1, e2) => {
        if (e1[0] !== e2[0]) {
            return e1[0] - e2[0];
        } else {
            return e2[1] - e1[1];
        }
    })

    const f = new Array(n).fill(1);
    let ans = 1;
    for (let i = 1; i < n; ++i) {
        for (let j = 0; j < i; ++j) {
            if (envelopes[j][1] < envelopes[i][1]) {
                f[i] = Math.max(f[i], f[j] + 1);
            }
        }
        ans = Math.max(ans, f[i]);
    }
    return ans;
};

var maxEnvelopes = function(envelopes) {
    
}
// console.log(maxEnvelopes([[5,4],[6,4],[6,7],[2,3]]));
// @lc code=end

