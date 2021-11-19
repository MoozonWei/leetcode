/**
 * https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
    const height = matrix.length;
    if (!height) return false;
    const width = matrix[0].length;
    if (!width) return false;

    let [i, j] = [0, width - 1];
    while (i < height && j >= 0) {
        const thisVal = matrix[i][j];
        if (thisVal === target) return true;
        else if (thisVal > target) j--;
        else if (thisVal < target) i++;
    }
    return false;
};