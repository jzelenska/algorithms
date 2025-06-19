// Tuesday: Find the longest Word in a String

// Return the length of the longest word in the provided sentence.

// Your response should be a number. For these algorithms, you are allowed to use the split() method.

//Define a function that takes a string as an argument
//Split the string into array of words
//Introduce a variable to store the max length of a word
//Loop through the array of words, calculating the length of each word and comparing it to the current max length
//If the current word's length is greater than the max value, update the max length variable
//return the max length variable;

function findLongestWordLength(str) {
    let words = str.split(" ");
    let maxLength = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
        }
    }
    return maxLength;
}
let string = "The quick brown fox jumped over the lazy dog"; 
//let string = "May the force be with you";
console.log(findLongestWordLength(string));
