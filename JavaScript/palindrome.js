// from leetcode.com 234 Palindrome Linked List 
// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// Assign answer true
// Checked each item in the first half of the array against its mirror entry and change the answer to false if they do not match.

var isPalindrome = function(head) {
    let length = head.length;
    // console.log(head.length);
    let answer = true;
    for (i = 0; i < length / 2; i++) {
        // console.log("i is : " + i + " lenth is : " + length)
        // console.log( head [i]);
        // console.log(head[length - 1 - i]);

        if (head[i] !== head[length - 1 - i]) return false;
        // console.log("in loop : " + answer);
    }
    return true;
};

console.log(isPalindrome([1,2]));
console.log(isPalindrome([1,2,3,4,5,6,7,1]));
console.log(isPalindrome([1,2,1]));
console.log(isPalindrome([1,4,5,5,4,1]));

// Better solution from Ian Rosen's video https://www.youtube.com/watch?v=bEHGfgjnvXg

var iansIsPalindrome = function(head) {
    if (head === null || head.next === null) {
        return true;
    }

    let slow = head;
    let fast = head;
    let curr = head;

    while(fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    let stack = [];

    while (slow !== null) {
        stack.push(slow.val);
        slow = slow.next
    }

    while (stack.length) {
        if (curr.val !== stack.pop) {
            return false;
        }
    }

    return true;
}