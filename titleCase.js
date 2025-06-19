// Wednesday : Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lowercase.
// For the purpose of this exercise, you should also capitalize on connecting words like "the" and "of".
// For this algorithm, you can use the split() method.

// Define a function that takes a string as an argument
// convert the string to lowercase
// split the string into array of words
// Loop through the array of words, capitalizing the first letter of each word
// Join the array back into a string
// Return the modified string

function titleCase(str) {
    arr=str.toLowerCase().split(" ");
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        console.log(arr[i]);
    }
    return arr.join(" ");
}
let str = "I'm a LIttle tEa poT";
console.log(titleCase(str));