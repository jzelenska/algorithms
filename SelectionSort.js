// Selection Sort

// how does it work: This is very simple. Go through the array, find the index of the lowest element swap the lowest element with the first element. Hence first element is the lowest element in the array.

// Now go through the rest of the array (excluding the first element) find the index of the lowest and swap it with the second element.

// That is how it continues to select (find out) the lowest element of the array and put it on the left until it hits the last element.

//declare a function with an array as parameter
// introduce temp variable
// introduce Minindex var
//for loop through the array with Minindex change
//for loop to compare following elements
// if condition introduction for neighbors comparison
// if true - move element to the left
// return an updated array

function SelectionSort (arr) {
    let temp = 0;
    let Minindex = 0;
    for (let i=0; i < arr.length; i++) {
        Minindex = i;
        for (let j=i+1; j < arr.length; j++) {
            if (arr[j] < arr[Minindex]) {
                Minindex = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[Minindex];
        arr[Minindex] = temp;
        console.log(arr);
    }
    return arr;
}

let array = [29, 73, 24, 13, 6, 3, 33, 67, 2];
console.log(SelectionSort(array));