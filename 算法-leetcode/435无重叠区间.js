/**
 * @file 贪心算法
*/

// 给定一个区间的集合，找到需要移除区间的最小数量，使剩余区间互不重叠。
// 注意:
// 可以认为区间的终点总是大于它的起点。
// 区间 [1,2] 和 [2,3] 的边界相互“接触”，但没有相互重叠。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/non-overlapping-intervals
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 输入: [ [1,2], [2,3], [3,4], [1,3] ]
// 输出: 1

// 解释: 移除 [1,3] 后，剩下的区间没有重叠。

/**
 * 贪心算法 O(nlogn) n是区间的数量 对所有右端点进行升序排列
 * @param {number[][]} intervals
 * @return {number} 返回移除区间的 最小数量
 */

const eraseOverlapIntervals = intervals => {
    if (!intervals.length) {
        return 0;
    }
    intervals.sort((a, b) => a[1] - b[1]); // [[1,2], [2,3], [1,3], [3,4]]

    const n = intervals.length; // 4
    let right = intervals[0][1]; // 2
    let ans = 1;
    for (let i = 1; i < n; ++i) {
        if (intervals[i][0] >= right) { // 遍历比较每个区间的第一位和2进行比较，如果大，就更换2
            ans += 1;
            right = intervals[i][1];
        }
    }
    return n - ans;
};

/**
 * 动态规划 时间复杂度：O(n^2)O(n2)
*/

var eraseOverlapIntervals1 = intervals => {
    if (!intervals.length) {
        return 0;
    }

    intervals.sort((a, b) => a[0] - b[0]); // [ [ 1, 2 ], [ 1, 3 ], [ 2, 3 ], [ 3, 4 ] ]
    const n = intervals.length; // 4
    const f = new Array(n).fill(1); // [1,1,1,1]

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (intervals[j][1] <= intervals[i][0]) {
                f[i] = Math.max(f[i], f[j] + 1);
                console.log(f);
            }
        }
    }
    return n - Math.max(...f);
};

console.log(eraseOverlapIntervals1([[1, 2], [2, 3], [3, 4], [1, 3]]));
