// 1. Print 1 - 135
// Write a program using JavaScript that will print all the numbers from 1 to 135.

//Diagram: 
// 1. Apply "for" loop function to 1 upto 135
// 2. Print the number in console

for (let i = 1; i <= 135; i++) {
    console.log(i);         
}


// 2. Print odd numbers from 1 - 135
// Write a program using JavaScript that will print all the odd numbers from 1 to 135.

//Diagram: 
// 1. Apply "for" loop function to 1 upto 135
// 2. Determine by if condition, if the number is odd 
// 3. If condition is true - print the number in console.

for (let i = 1; i <= 135; i++) {
    if (i%2 !== 0) {
        console.log(i);
    }
}

// 3. Sum of Printed Numbers

// Write a program that will print all the numbers from 1 to 135 AND the sum of the numbers that have been printed so far. Your output should look similar to this:
// Add variable for sum with "0" value
// Apply for loop for numbers from 1 to 135
// Add 2 tasks to the loop
// 1. Increase sum by current number
// 2. Print the current number and the sum in console

let sum = 0;
for (let i=1; i<=135; i++) {
    sum += i;
    console.log(`Number is: ${i}, Sum: ${sum}`);
}

// 4. Print the elements of an array

// Given an array X = [1,4,2,12], write a program that will iterate through the array and print all numbers on the screen. Your program should work with arrays of all sizes.

// define an array
// create a function that looping through the array and printing each element

const x = [1, 4, 2, 12];

function printArrayElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

printArrayElements(x);

// 5. Find Max

// Given an array X, write a program that would find the maximum value of the array. Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero.

// define an array
// introduce a variable to store a max value
// for loop through the array instances 
// if condition to check, if the current element is bigger than the max value
// print the max value

const X = [2, -3, -1, 0];
let max = X[0];
for (let i=1; i < X.length; i++) {
    if (X[i] > max) {
        max = X[i];
    }
}
console.log(`Max value in the array is ${max}`);


// 6. Get Average

// Given an array X, write a program that will return the average value of all elements in the array. For example, for array X = [2,1,3] your output should be 2.
// Define an array
// Introduce a variable to store a sum of all elements
// For loop through the array instances
// by the end of the loop, divide the sum by the array length to get average

const x = [2, 1, 3];
let sum = 0;
for (let i = 0; i < x.length; i++) {
    sum = sum + x[i];
}
let average = sum / x.length;
console.log(`The average of this array is ${average}.`);


// 7. Eliminate the Negatives

// Given an array X, write a program that will remove all negative numbers and replace them with a 0. For example, for array X = [2,-1,4,-3] the output of your program should be

// [2,0,4,0]

// Define an array
// create a function that will loop through the array running a value check and replacing a value, in case of corresponding to the if condition
// print the modified array

let x = [2, -1, 4, -3];
function negativesReplacement(array) {
    for (let i=0; i<array.length; i++) {
        if (array[i] < 0) {
            array.splice(i, 1, 0);
        }
    }
    console.log(array);
}

negativesReplacement(x);

// 8. Number to String

// Write a program that takes an array of numbers and turns the negative values into strings.
// Define an array
// create a function that will loop through the array running a value check and replacing a value 
// print the modified array

let x = [1, -1, 2, -2, 3, -3];

function negativesToStrings(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            array[i] = "negative";
        }
    }
    console.log(array);
}

negativesToStrings(x);
