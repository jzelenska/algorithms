// 1. Addition

// Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5. To solve this task you might want to use the modulus operator.

// Create a variable to hold the sum
// Create a for loop that goes from 200 to 2700
// Implement a check with if and else if condition whether the number is divisible by 3 or 5 but not both
// In case of both conditions are true, add the number to the sum variable
// Print the sum at the end

let sum = 0;
for (let i=200; i<=2700; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
        sum = sum + i;
    } else if (i % 5 === 0 && i % 3 !== 0) {
        sum = sum + i;
    }
//if ((i%3 === 0 || i % 5 === 0) && !(i % 5 == 0 && i % 3 == 0)){
//    sum += i;
// }

}
console.log(`The sum is ${sum}.`);


// 2. Shift the Values

// Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].

// To create an algorithm for achieving the final output [-7,4,6,1,2] for the original array x = [2,1,6,4,-7]:
// Define x array
// Apply "reverse" function to the x array
// Print the reversed array

let X = [2, 1, 6, 4, -7];
X.reverse();
console.log(X);

//Create a new array - an empty one
// Define x array
//Implement for loop through the x array and "unshifting" values one-by-one to the new array

// let arrayShifted = [];
// let x = [2, 1, 6, 4, -7];
//     for (let i = 0; i < x.length; i++) {
//         arrayShifted.unshift(x[i]);
//         console.log(arrayShifted); // included into the loop for checking the process of shifting
//     }
// console.log(arrayShifted);  // final output

//alternative solution (2 steps instead of 4 & no "unshift" method... that's why I thought that "reverse" will be more effective):
// let x = [2, 1, 6, 4, -7];
// for (let i = 0; i < (x.length - 1)/2; i++) {
//     let temp;
//     temp = x[i];
//     x[i] = x[x.length -1 - i];
//     x[x.length - 1 -i] = temp;
//     console.log(x); // included into the loop for checking the process of shifting
// }
//console.log(x); // final output


// ideally Task 2 requires the task definition update (for being more (or less) precise), as "shifts EACH NUMBER by one to the front" confuses... 
// should it be like this?
// [2, 1, 6, -7, 4]
// [2, 1, -7, 4, 6]
// [2, -7, 4, 6, 1]
// [-7, 4, 6, 1, 2]


// 3. FizzBuzz

// Create an algorithm that inserts the numbers from 1 to 135 into an array, while replacing the values that are divisible by 3 with the word "Fizz", the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz".

// Your output should look like [1,2, 'Fizz',4, 'Buzz', 'Fizz',7, 8, ...]

// create an empty array
// create a for loop that goes from 1 till 135
// implement a check with if, else if and else conditions to check if the number is divisible by 3,5 or both
// if condition is true - push the relevant string to the array, if not - push the number itself

let fizzBuzzArray = [];
for (let i = 1; i <= 135; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        fizzBuzzArray.push("FizzBuzz");
    } else if (i % 3 === 0) {
        fizzBuzzArray.push("Fizz");
    } else if (i % 5 === 0) {
        fizzBuzzArray.push("Buzz");
    } else {
        fizzBuzzArray.push(i);
    }
    console.log(fizzBuzzArray);
}


// 4. Fibonacci

// For a Fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.

// A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series. A series would start with the numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.

// 0 1 1 2 3 5 8 13 21...

// Create an array for holing the Fibonacci numbers. Start with 0 and 1.
// Create a new variable to hold the calculated number
// Program for loop that will run until VERY IMPORTANT: "the last calculated number" is less than 1000000.
// Calculate a sum of the last two numbers in the array for preparation of the next number to add to the array.
//Push the calculated number to the array.
// Print the array at the end.


let fib = [0, 1];
let nextNumber = 0;
while (nextNumber <1000000) {
    nextNumber = fib[fib.length - 1] + fib[fib.length - 2];
    fib.push(nextNumber);
}
console.log(fib);


// 5. Remove the Negative

// Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].

// Define an array
// create a function that will loop through the array running a value check and delete a value, in case of corresponding to the if condition
// print the modified array

let x = [1, -2, 4, 1];
function negativesDelete(array) {
    for (let i=0; i<array.length; i++) {
        if (array[i] < 0) {
            array.splice(i, 1);
        }
    }
    console.log(array);
}

negativesDelete(x);

// 6. Communist Censorship

// Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], replace every letter of the word Program with *, so the output would be ['Man', 'I','Love','The','Matrix','*******']. Then make your algorithm work for any word of your choice
// Define an array
// Create a var with the word to work on
// Introduce an empty string variable
// For loop through the letters of the word in focus & replace each by "*"
//For loop through the array to find the word and replace by introduced and updated string var 
//print modified array

let X = ['Man', 'I','Love','The','Matrix','Program']
let word = 'Program';
let str = '';
for (let i = 0; i<word.length; i++) {
    str += '*'
}
console.log(str);
for (let i = 0; i<X.length; i++) {
    if (word === X[i]) {
        X[i] = str;
    }
}
console.log(X);

