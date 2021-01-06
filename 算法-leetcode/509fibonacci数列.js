
/**
 * @file 斐波那契数
*/

// 斐波那契数，通常用 F(n) 表示，形成的序列称为 斐波那契数列 。
// 该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
// F(0) = 0，F(1) = 1
// F(n) = F(n - 1) + F(n - 2)，其中 n > 1


/**
 * 动态规划
 * @param {number} n
 * @return {number} 返回移除区间的 最小数量
 * 时间复杂度：O(n)O(n)。
 * 空间复杂度：O(1)O(1)。
 */

let fib = n => {
    if (n < 2) {
        return n;
    }
    let p = 0;
    let q = 0;
    let r = 1;
    for (let i = 2; i <= n; i++) {
        p = q;
        q = r;
        r = p + q;
    }
    return r;
};
let fib = n => {
    if (n < 2) {
        return n;
    }
    let arr = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n];
};

/**
 * 递归解法
 * @param {number} n
 * @return {number} 返回移除区间的 最小数量
*/
let fib = n => {
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
};


console.log(fib(10));

