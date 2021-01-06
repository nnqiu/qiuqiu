/**
 * @file 递归
*/

// 输入：s = "abbxxxxzzy"
// 输出：[[3,6]]
// 解释："xxxx" 是一个起始于 3 且终止于 6 的较大分组。

// s = "abcdddeeeeaabbbcd"
// 输出：[[3,5],[6,9],[12,14]]
// 解释：较大分组为 "ddd", "eeee" 和 "bbb"

/**
 * @param {string} s
 * @return {number[][]}
 */

let largeGroupPositions = s => {
    let str = s.split('');
    let res = [];
    let total = [];
    for (let i = 0; i < str.length; i++) {
        if (total && total[0] === str[i]) {
            total.push(str[i]);
        }
        else {
            total = [str[i]];
        }
        if (total.length >= 3 && str[i] !== str[i + 1]) {
            res.push([i - total.length + 1, i]);
        }
    }
    return res;
};


let largeGroupPositions1 = s => {
    const ret = [];
    const n = s.length;
    let num = 1;
    for (let i = 0; i < n; i++) {
        if (i === n - 1 || s[i] !== s[i + 1]) {
            if (num >= 3) {
                ret.push([i - num + 1, i]);
            }
            num = 1;
        } else {
            num++;
        }
    }
    return ret;
};


console.log(largeGroupPositions('abcdddeeeeaabbbcd'));
