// 88. 合并两个有序数组

// 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：[1,2,2,3,5,6]

// 每次从数组的头部选择小的数放到新数组中
var merge = function(nums1, m, nums2, n) {
    let p1 = 0, p2 = 0;
    const sorted = [];
    var cur;
    while (p1 < m || p2 < n) {
        if (p1 === m) {
            cur = nums2[p2++];
        } else if (p2 === n) {
            cur = nums1[p1++];
        } else if (nums1[p1] < nums2[p2]) {
            // 比较数组头部 P1
            cur = nums1[p1++];
        } else {
            // 比较数组头部 P2
            cur = nums2[p2++];
        }
        sorted.push(cur);
    }
    return sorted
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))
