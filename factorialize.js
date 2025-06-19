// Wednesday: Factorialize!

// Declare a function factorialize(n) that takes an integer n as input and returns the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Create a variable result with 1 value to store the result of the factorial calculations.
// Create a function with for loop to multiply all values from 1 to n
// Return and print the results


let result = 1;
function factorialize(num) {
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
console.log(factorialize(0)); // Output: 1
console.log(factorialize(10)); // Output: 3628800
console.log(factorialize(20)); // Output: 2432902008176640000


