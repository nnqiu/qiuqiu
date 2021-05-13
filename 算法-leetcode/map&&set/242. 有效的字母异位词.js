// 输入: s = "anagram", t = "nagaram"
// 输出: true
// 只有小写

// 字符串进行排序，看排序之后是否相同
var isAnagram = function(s, t) {
    return s.length === t.length
        && [...s].sort().join() === [...t].sort().join();
};

console.log(isAnagram('anagram', 'nagaram'))


// 哈希
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const table = new Array(26).fill(0);
    for (let i = 0; i < s.length; ++i) {
        table[s.codePointAt(i) - 'a'.codePointAt(0)]++;
    }
    for (let i = 0; i < t.length; ++i) {
        table[t.codePointAt(i) - 'a'.codePointAt(0)]--;
        if (table[t.codePointAt(i) - 'a'.codePointAt(0)] < 0) {
            return false;
        }
    }
    return true;
};
