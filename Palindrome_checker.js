//Thursday: Palindrome Checker
// Declare a function isPalindrome(str) that takes a string as an input.
// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

//Declare a function
// Convert the string to lowercase, remove spaces, punctuation and special characters
// check if half-string is equal to its half-reverse
// return boolean value based on the check
// print the result

function isPalindrome(str) {
    console.log(str);
    let string = str.toLowerCase().split(' ').join('').replace(/[,.!?;:(){}[\]<>\/\\@#$%^&*+=_`~"0-9]/g, '');
    console.log(string);
    for (let i = 0; i < string.length / 2; i++) {
        //console.log(string[i], string[string.length - 1 - i]);
        if (string[i] !== string[string.length - 1 - i]) {
            console.log(`The string "${str}" is not a palindrome`);
            return false;
        }

    }
    console.log(`The string "${str}" is a palindrome`);   
}

isPalindrome("A man, a plan, a canal: Panama")