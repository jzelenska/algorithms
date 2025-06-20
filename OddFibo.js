// Friday: Sum All Odd Fibonacci

// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5, and 8.

//Define a function with num as a parameter
// Introduce current/previous/next variables (only current is 1)
//Create a sum variable 
// Add a while loop to iterate till reaching the num
// Add a if condition for the odd control
//If true - add the number to sum
// return sum

function OddFibo (num) {
    let current = 1;
    let previous = 0;
    let next = 0;
    let sum = 0;
    while (next <= num) {
        previous = current;
        current = next;
        next = previous + current;
        if(next%2 !== 0) {
            sum+=next;
        }
    }
    return sum;
}
console.log(OddFibo(10));