const atomicNumber = n =>{
    let arr = [];
    for(let shell = 1; n> 0; shell++){
      let electrons = 2 * Math.pow(shell, 2);
      (electrons <= n) ? arr.push(electrons) : arr.push(n);
      n = (electrons <= n)? n - electrons : 0;
    }
  return arr;
}