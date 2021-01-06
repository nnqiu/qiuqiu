/**
 * @file 递归
*/


// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

// 输入：n = 3
// 输出：[
//        "((()))",
//        "(()())",
//        "(())()",
//        "()(())",
//        "()()()"
//      ]

// 2n个位置 （）所有情况
// 括号合法性 左括号 n 右括号n
// 添加右括号时，左括号的总数必须大于右括号


/**
 * @param {number} n
 * @return {string[]}
 */

let generateParenthesis = n => {
    let res = [];
    let dfs = (l, r, str) => {
        console.log(l, r, str);
        // 都等于n 本次循环结束，在数据里面push一个合格的数组
        if (l === n && r === n) {
            console.log('return');
            return res.push(str);
        }
        if (l < n) {
            dfs(l + 1, r, str + '(');
        }
        if (l > r) {
            dfs(l, r + 1, str + ')');
        }
    };
    console.log('jieshu');
    dfs(0, 0, '');
    return res;
};

console.log(generateParenthesis(3));
