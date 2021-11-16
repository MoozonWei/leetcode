/*
 * @lc app=leetcode.cn id=1005 lang=javascript
 *
 * [1005] K 次取反后最大化的数组和
 *
 * https://leetcode-cn.com/problems/maximize-sum-of-array-after-k-negations/description/
 *
 * algorithms
 * Easy (52.85%)
 * Likes:    108
 * Dislikes: 0
 * Total Accepted:    27.9K
 * Total Submissions: 52.9K
 * Testcase Example:  '[4,2,3]\n1'
 *
 * 给定一个整数数组 A，我们只能用以下方法修改该数组：我们选择某个索引 i 并将 A[i] 替换为 -A[i]，然后总共重复这个过程 K
 * 次。（我们可以多次选择同一个索引 i。）
 * 
 * 以这种方式修改数组后，返回数组可能的最大和。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：A = [4,2,3], K = 1
 * 输出：5
 * 解释：选择索引 (1,) ，然后 A 变为 [4,-2,3]。
 * 
 * 
 * 示例 2：
 * 
 * 输入：A = [3,-1,0,2], K = 3
 * 输出：6
 * 解释：选择索引 (1, 2, 2) ，然后 A 变为 [3,1,0,2]。
 * 
 * 
 * 示例 3：
 * 
 * 输入：A = [2,-3,-1,5,-4], K = 2
 * 输出：13
 * 解释：选择索引 (1, 4) ，然后 A 变为 [2,3,-1,5,4]。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= A.length <= 10000
 * 1 <= K <= 10000
 * -100 <= A[i] <= 100
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
    const cmp = (pre, next) => pre - next;
    while (k > 0) {
        nums.sort(cmp);
        console.log(nums);
        nums[0] = -nums[0];
        k--;
    }
    let sum = 0;
    nums.forEach(item => {
        sum += item;
    })
    return sum;
};

var largestSumAfterKNegations = function (nums, k) {
    // arr[i] 表示值为 i 的元素在 nums 数组中的个数
    const arr = new Array(201).fill(0);
    nums.forEach(item => {
        arr[item + 100]++;
    })
    while (k > 0) {
        let i = 0;  // min val index
        for (; i <= 200 && arr[i] === 0; i++) { }
        arr[i]--;
        arr[200 - i]++;
        k--;
    }
    let sum = 0;
    arr.forEach((item, index) => {
        sum += item * (index - 100);
    });
    return sum;
};
// @lc code=end

