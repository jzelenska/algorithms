// Friday: Fibonacci Sequence

// A great friend of yours, Fibonacci, just came up with a sequence of numbers that is really easy to compute. However, his time allows him to calculate by hand only the first 10-15 terms of the sequence; of course, he is busy trying to come up with some other interesting sequence. So he gives you the first terms and asks you to write an algorithm that will return the n-th term in the sequence.

// His sequence looks like this: 1 1 2 3 5 8 13 21 34 ...

// Immediately you find the pattern: setting the first two terms to be 1, any other term is the sum of the two previous terms. 1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13 and so on.

// In this way, if n would be equal to 4 your result should be 3; but if n is 7, then the result is 13.

// But these are small numbers, which can be computed by hand. What about bigger numbers? Let's see what results you will get for the following n's:

// n = 43 -> x
// n = 101 -> x
// n = 227 -> x
// n = 491 -> x
// n = 881 -> x

//define a function that takes a number n as an argument
//specify the first 2 actual numbers of the sequence separately
//introduce a variable to store the next number in the sequence
//create a for loop that will run from 2 to n
//update the array accordingly to the Fibonacci sequence rule
//return the array

function fib(n) {
    let seq = 0;
    let seq1 = 1;
    let seq2 = 0;
    for (let i = 2; i <= n; i++) {
        seq2 = seq1;
        seq1 = seq;
        seq = seq1 + seq2;
    }
    return seq;
}
console.log(fib(43));
// console.log(fib(101));
// console.log(fib(227));
// console.log(fib(491));
// console.log(fib(881)); 

