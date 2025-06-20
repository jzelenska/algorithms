// Monday: Game of 3s

// We want to play a "Game of 3s". Here's how you play it:

// First, you pick a random number. Then, repeatedly do the following:

// If the number is divisible by 3, divide it by 3.
// If it's not, either add 1 or subtract 1 (to make it divisible by 3), then divide it by 3.
// The game stops when you reach "1".


// Challenge Description

// The input is a single number: the number at which the game starts. Write a program that plays the 3s game, and outputs a valid sequence of steps you need to take to get to 1. Each step should be output as the number you start at, followed by either -1 or 1 (if you are adding/subtracting 1 before dividing), or 0 (if you are just dividing). The last line should simply be 1.


// Input Description

// The input is a single number: the number at which the game starts.

//Define a function that takes a number as an argument
//Add a while loop condition for checking if number is greater than 1
//Define if / else if /else conditions to check if the number is divisible by 3
//print each step details

function gameOf3s(num) {
    while (num > 1) {
        if (num%3 === 0 ) {
            console.log(num , 0);
            num = num/3;
        }else if ((num + 1)%3 === 0) {
            console.log(num , 1);
            num = (num + 1)/3;
        }else {
            console.log(num , -1);
            num = (num - 1)/3;           
        }
    }
       return num;
}
console.log(gameOf3s(10));
