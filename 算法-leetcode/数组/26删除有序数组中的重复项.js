// 简单
// 打卡
// 
// https://leetcode-cn.com/problems/rotate-array/
// https://leetcode-cn.com/problems/merge-two-sorted-lists/
// https://leetcode-cn.com/problems/merge-sorted-array/
// 
/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * 26. 删除有序数组中的重复项
 * 输入：nums = [0,0,1,1,1,2,2,3,3,4]
 * 输出：5, nums = [0,1,2,3,4]
 */

// 双指针，不使用额外空间法 返回数组的长度，！！！重点，是返回数组的长度
var removeDuplicates = function(nums) {
    const n = nums.length;
    if (n === 0) {
        return 0;
    }
    // 从数组的第二个位置开始比较，slow是返回的长度
    let fast = 1, slow = 1;
    while (fast < n) {
        if (nums[fast] !== nums[fast - 1]) {
            nums[slow] = nums[fast];
            ++slow;
        }
        ++fast;
    }
    return slow;
};



var removeDuplicates1 = function(nums) {
    var res = [nums[0]];
    var newIndex = 0;
    for (var i = 0; i < nums.length; i++) {
        if (res[newIndex] !== nums[i]) {
            res.push(nums[i]);
            newIndex += 1;
        }
    }
    return res;
}; 

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));