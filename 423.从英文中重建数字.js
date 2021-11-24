/*
 * @lc app=leetcode.cn id=423 lang=javascript
 *
 * [423] 从英文中重建数字
 *
 * https://leetcode-cn.com/problems/reconstruct-original-digits-from-english/description/
 *
 * algorithms
 * Medium (56.83%)
 * Likes:    109
 * Dislikes: 0
 * Total Accepted:    16K
 * Total Submissions: 26.7K
 * Testcase Example:  '"owoztneoer"'
 *
 * 给你一个字符串 s ，其中包含字母顺序打乱的用英文单词表示的若干数字（0-9）。按 升序 返回原始的数字。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "owoztneoer"
 * 输出："012"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "fviefuro"
 * 输出："45"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 10^5
 * s[i] 为 ["e","g","f","i","h","o","n","s","r","u","t","w","v","x","z"]
 * 这些字符之一
 * s 保证是一个符合题目要求的字符串
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function (s) {
    const ansArr = [];
    const map = new Map();
    for (let i = 0; i < s.length; i++) map.set(s[i], (map.get(s[i]) || 0) + 1);
    for (let [key, value] of map) {
        switch (key) {
            case 'z':
                map.set('z', map.get('z') - value);
                map.set('e', map.get('e') - value);
                map.set('r', map.get('r') - value);
                map.set('o', map.get('o') - value);
                for (let i = 0; i < value; i++) ansArr.push(0);
                break;
            case 'w':
                map.set('t', map.get('t') - value);
                map.set('w', map.get('w') - value);
                map.set('o', map.get('o') - value);
                for (let i = 0; i < value; i++) ansArr.push(2);
                break;
            case 'u':
                map.set('f', map.get('f') - value);
                map.set('o', map.get('o') - value);
                map.set('u', map.get('u') - value);
                map.set('r', map.get('r') - value);
                for (let i = 0; i < value; i++) ansArr.push(4);
                break;
            case 'x':
                map.set('s', map.get('s') - value);
                map.set('i', map.get('i') - value);
                map.set('x', map.get('x') - value);
                for (let i = 0; i < value; i++) ansArr.push(6);
                break;
            case 'g':
                map.set('e', map.get('e') - value);
                map.set('i', map.get('i') - value);
                map.set('g', map.get('g') - value);
                map.set('h', map.get('h') - value);
                map.set('t', map.get('t') - value);
                for (let i = 0; i < value; i++) ansArr.push(8);
                break;

            default:
                break;
        }
    }
    for (let [key, value] of map) {
        if (value > 0) {
            switch (key) {
                case 'o':
                    map.set('o', map.get('o') - value);
                    map.set('n', map.get('n') - value);
                    map.set('e', map.get('e') - value);
                    for (let i = 0; i < value; i++) ansArr.push(1);
                    break;
                case 'r':
                    map.set('t', map.get('t') - value);
                    map.set('h', map.get('h') - value);
                    map.set('r', map.get('r') - value);
                    map.set('e', map.get('e') - value * 2);
                    for (let i = 0; i < value; i++) ansArr.push(3);
                    break;
                case 'f':
                    map.set('f', map.get('f') - value);
                    map.set('i', map.get('i') - value);
                    map.set('v', map.get('v') - value);
                    map.set('e', map.get('e') - value);
                    for (let i = 0; i < value; i++) ansArr.push(5);
                    break;
                case 's':
                    map.set('s', map.get('s') - value);
                    map.set('e', map.get('e') - value * 2);
                    map.set('v', map.get('v') - value);
                    map.set('n', map.get('n') - value);
                    for (let i = 0; i < value; i++) ansArr.push(7);
                    break;

                default:
                    break;
            }
        }
    }
    for (let [key, value] of map) {
        if (value > 0 && key === 'e') {
            map.set('n', map.get('s') - value * 2);
            map.set('i', map.get('e') - value);
            map.set('e', map.get('v') - value);
            for (let i = 0; i < value; i++) ansArr.push(9);
        }
    }

    return ansArr.sort((pre, next) => pre - next).join('');
};
// @lc code=end

