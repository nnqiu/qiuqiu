// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
// 打卡

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//  var threeSum = function(nums) {
//     let ans = []; // 答案数组
//     const len = nums.length; // 数组长度
//     if(nums == null || len < 3) return ans; // 如果小于3 返回
//     nums.sort((a, b) => a - b); // 排序
//     for (let i = 0; i < len ; i++) {
//         if(nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
//         if(i > 0 && nums[i] == nums[i-1]) continue; // 去重 结束当前循环 对于重复元素：跳过，避免出现重复解
//         let L = i+1;
//         let R = len-1;
//         while(L < R){
//             const sum = nums[i] + nums[L] + nums[R];
//             if(sum == 0){
//                 ans.push([nums[i],nums[L],nums[R]]);
//                 while (L<R && nums[L] == nums[L+1]) L++; // 去重
//                 while (L<R && nums[R] == nums[R-1]) R--; // 去重
//                 L++;
//                 R--;
//             }
//             else if (sum < 0) L++;
//             else if (sum > 0) R--;
//         }
//     }        
//     return ans;
// };

var threeSum = function(nums) {
    let ans = [];
    let len = nums.length;
    if (nums.length < 3) return;
    nums.sort((a, b) => a - b);
    for (var i = 0; i < len; i++) {
        if (nums[i] > 0) break;
        if (nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = len - 1;
        while(left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            console.log(sum);
            if (sum === 0) {
                ans.push([nums[i], nums[left], nums[right]]);
                left += 1;
                right -= 1;
            }
            else if (sum > 0) {
                right -= 1;
            }
            else if (sum < 0) {
                left += 1;
            }
        }
    }
    return ans;
}

console.log(threeSum([-1,0,1,2,-1,-4]));


// break 跳出for循环
// continue 跳出当前循环， 开始新的下一次循环
