/**
 * https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/
 */

/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s, map = new Map()) {
    const length = s.length;
    for(let i = 0; i < length; i++) {
        map.set(s[i], map.get(s[i]) ? map.get(s[i]) + 1 : 1);
    }
    for(let i = 0; i < length; i++) {
        if(map.get(s[i]) === 1) return s[i];
    }
    return " ";
};

/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    const frequency = _.countBy(s);
    for (const [i, ch] of Array.from(s).entries()) {
        if (frequency[ch] === 1) {
            return ch;
        }
    }
    return ' ';
};
