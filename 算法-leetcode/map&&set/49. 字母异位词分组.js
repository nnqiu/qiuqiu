// 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var map =  new Map();
    for (var i = 0; i < strs.length; i++) {
        let strArr = strs[i]; // 原数组
        let key = Array.from(strs[i]).sort().join(); // key
        let list = map.get(key) ? map.get(key) : [];
        list.push(strArr);
        map.set(key, list);
    }
    return map;
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
