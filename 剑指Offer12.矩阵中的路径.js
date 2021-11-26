/**
 * https://leetcode-cn.com/problems/ju-zhen-zhong-de-lu-jing-lcof/
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const [height, width] = [board.length, board[0].length];
    const wordLength = word.length;

    if(word.length === 0) return false;
    if(word.length > height*width) return false;

    let cache = [];

    const check = function (i, j, iterNum) {
        if (isNotInCache(i, j)) {
            if (iterNum === wordLength - 1) return word[iterNum] === board[i][j];
            else if (board[i][j] === word[iterNum]) {
                /**
                 * up:      i-1, j
                 * down:    i+1, j
                 * left:    i, j-1
                 * right:   i, j+1
                 */
                cache.push([i, j])
                let ans = false;
                if (i - 1 >= 0) ans = ans || check(i - 1, j, iterNum + 1);
                if (i + 1 < height) ans = ans || check(i + 1, j, iterNum + 1);
                if (j - 1 >= 0) ans = ans || check(i, j - 1, iterNum + 1);
                if (j + 1 < width) ans = ans || check(i, j + 1, iterNum + 1);
                if(!ans) cache.pop();
                return ans;
            }
            return false;
        }
        return false;
    }

    const isNotInCache = function (i, j) {
        if(cache.length === 0) return true;
        for (let k = 0; k < cache.length; k++) {
            if (cache[k][0] === i && cache[k][1] === j) return false;
        }
        return true;
    }

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            cache = [];
            if (check(i, j, 0)) return true;
        }
    }
    return false;
};

console.log(exist([["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]], "ABCESEEEFS"));