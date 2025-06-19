// Thursday: Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them

// Define a function that takes an array as an argument
// Define a variable to store the sum
//Loop through the array started from min number till max number
//Add each number to the sum variable
// Return the sum variable

function sumAll(arr) {
    let sum = 0;
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        sum += i;
    }
    return sum;
}

//let array = [1, 4];
let array = [5, 10];
console.log(sumAll(array));