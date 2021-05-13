// https://leetcode-cn.com/problems/swap-nodes-in-pairs/
// 输入：head = [1,2,3,4]
// 输出：[2,1,4,3]


var swapPairs = function(head) {
    if (head === null|| head.next === null) {
        return head;
    }
    const newHead = head.next;
    head.next = swapPairs(newHead.next);
    newHead.next = head;
    return newHead;
};

var swapPairs = function (head) {
    if (!head || !head.next) return head
    var one = head
    var two = one.next
    var three = two.next

    two.next = one
    one.next = swapPairs(three)

    return two
};
