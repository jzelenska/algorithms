// Tuesday: Magic Squares

// A 3x3 magic square is a 3x3 grid of the numbers 1-9 such that each row, column, and major diagonal adds up to 15. 

//Define 2-dim array
//calculate sum of diagonals 
//check if sums of both diagonals are equal
//return true or false

    //let arr = [[8, 1, 6], [3, 5, 7], [4, 9, 2]];
    let arr = [[3, 5, 7], [8, 1, 6], [4, 9, 2]];
    let diag1 = arr [0][0] + arr [1][1] + arr [2][2];
    let diag2 = arr [0][2] + arr [1][1] + arr [2][0];
    if (diag1 == diag2) {
        console.log(true);
       } else {
        console.log(false);
       }

