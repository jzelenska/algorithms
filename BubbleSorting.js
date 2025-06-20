// Bubble sort it's one of the easiest to learn at the beginning, so we're going to focus on this one. The main idea of a bubble sort algorithm is to sort an array using bubbles of elements. How it does do that? Its underlying mechanism can be summarised as follows:



// While the array is not sorted, the code would do the following steps:

// Take each pair of 2 adjacent numbers and compare them.
// If their order is not correct, switch them.
// The very important step is to keep in mind that these steps are repeated over and over until the array gets to its final sorted state.

// declare a function takes array as a parameter
// for loop to loop through the array
// for loop to do the comparison
// if condition to check which is bigger
// true switch the positions
// return the sorted array

function BubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j=0; j < arr.length - 1; j++) {
            if(arr[j]>arr[j+1]) {
                temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp
                console.log(arr)
            }
        }
    }
    return arr;
}
let array = [7,5,2,4,3,9];
console.log(BubbleSort(array));