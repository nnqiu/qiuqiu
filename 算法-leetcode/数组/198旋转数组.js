// 旋转数组
// 将数组中的元素向右移动 k 个位置，其中 k 是非负数。
// 输入: nums = [1,2,3,4,5,6,7], k = 3
// 输出: [5,6,7,1,2,3,4]

var rotate = function(nums, k) {
    var arr = new Array(nums.length)
    for (var i = 0; i < nums.length; i++) {
        arr[i] = nums[i >= k ? i - k : nums.length + i - k];
    }
    return arr;
};

console.log(rotate([1,2,3,4,5,6,7], 3))
