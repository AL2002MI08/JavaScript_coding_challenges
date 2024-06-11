// Complete the function that takes 2 arguments: a number (n), and a list of numbers (arr). The function should return a list of all the numbers in arr that are relatively prime to n. All numbers in will be positive integers.
const gcd = (a,b) => (b===0)? a : gcd(b, a%b)
let relativelyPrime = (n, arr) => arr.filter(a => gcd(a,n) === 1)
console.log(relativelyPrime(8, [1, 2, 3, 4, 5, 6, 7]))