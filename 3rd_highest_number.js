

function thirdHighest (arr){
    var first =0;
    var second =0;
    var third=0;
    
    for(var i =0; i<arr.length; i++){
        if (arr[i] > first){
            third = second;
            second = first;
            first = arr[i];
        }
        else if (arr[i] > second) {
            third = second;
            second = arr[i];  
        }
        else if (arr[i] > third) {
            third = arr[i];
        }
    }
    return third;
}
console.log(thirdHighest([5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31]));


//alternative solution
// define an array
// introduce a variable to store a max value/ 2nd highest/3rd highest value
// for loop through the array instances 
// if condition to check, if the current element is bigger than the max value
//delete the max value from the array
//check the second/the 3rd
// print the max values

// let X =  [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];
// let max = X[0];
// let secondMax = 0;
// let thirdMax = 0

// for (let i=1; i <= X.length; i++) {
//     //console.log(X.length);
//     if (X[i] > max) {
//         max = X[i];
//     }
// }
//      //   console.log(`Max value in the array is ${max}`);
//         X.splice(X.indexOf(max), 1); // Remove the max value from the array

// for (let i=0; i <= X.length; i++) {
//      //console.log(X.length);
//     if (X[i] > secondMax) {
//         secondMax = X[i];
//     }
    
// }
//    // console.log(`The 2nd Max value in the array is ${secondMax}`);    
//     X.splice(X.indexOf(secondMax), 1); // Remove the max value from the array
    
// for (let i=0; i <= X.length; i++) {
//      //console.log(X.length);
//     if (X[i] > thirdMax) {
//         thirdMax = X[i];
//     }
    
// }
// console.log(`The 3rd Max value in the array is ${thirdMax}`);

