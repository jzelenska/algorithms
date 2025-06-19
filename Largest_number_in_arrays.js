// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

// Define a function, that takes an array as a parameter
// Create an empty array for hold max values
// Loop through the main array
//push the max value to the created array
// Loop through each sub-array to find the max value, by application of if comparison condition
// return the array with max values


function largestOfFour(arr) {
    let maxValues = [];
    for (let i = 0; i < arr.length; i++) {
        maxValues.push(arr [i] [0]);
        for (let j= 0; j < arr[i].length; j++) {
            if (maxValues[i] < arr[i][j]) {
                maxValues[i] = arr[i][j];
            }
        }
    }
    return maxValues;
    console.log(maxValues);
}

let array=[[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
console.log(largestOfFour(array));

