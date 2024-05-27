// Maximum number of electrons in a shell is distributed with a rule of 2n^2 (n being position of a shell).
// For example, maximum number of electrons in 3rd shell is 2*3^2 = 18.
// Electrons should fill the lowest level shell first.
// If the electrons have completely filled the lowest level shell, the other unoccupied electrons will fill the higher level shell and so on.
// write a function for Ideal electron distribution

const atomicNumber = n =>{
    let arr = [];
    for(let shell = 1; n> 0; shell++){
      let electrons = 2 * Math.pow(shell, 2);
      (electrons <= n) ? arr.push(electrons) : arr.push(n);
      n = (electrons <= n)? n - electrons : 0;
    }
  return arr;
}

console.log(atomicNumber(10))
console.log(atomicNumber(1))
console.log(atomicNumber(47))
