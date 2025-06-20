// Thursday: Sum All Primes

// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

// The provided number may not be a prime.

//Define a function with a number as parameter
//Add a sum variable 
//For loop to iterate through the numbers
//put in IF condition to check if the number is Prime
//add to the sum
//return the Sum

function SumAllPrime(num) {
    let sum = 0;
    for (let i = num; i >= 2; i--){
        let isPrime = true;
        for(let j=i-1; j>=2; j--){
        if(i%j == 0){
            isPrime = false;
            break
            }
        }
        if(isPrime == true){
        sum+= i;
        }
    }
    return sum;
}
console.log(SumAllPrime(997));