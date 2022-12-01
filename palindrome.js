// from leetcode.com 234 Palindrome Linked List 
// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

var isPalindrome = function(head) {
    let length = head.length;
    // console.log(head.length);
    let answer = true;
    for (i = 0; i < length / 2; i++) {
        console.log("i is : " + i + " lenth is : " + length)
        // console.log( head [i]);
        // console.log(head[length - 1 - i]);

        if (head[i] !== head[length - 1 - i]) answer = false;
        // console.log("in loop : " + answer);
    }
    console.log(answer)
};

isPalindrome([1,2]);
isPalindrome([1,2,1]);
isPalindrome([1,4,5,5,4,1]);