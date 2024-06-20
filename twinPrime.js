const isPrime = (n) => {
    if (n < 2) return false;
    if (n === 2) return true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  function twinPrime(n) {
    let res = 0;
    
    for (let i = 2; i <= n - 2; i++) {
      if (isPrime(i) && isPrime(i + 2)) {
        res++;
      }
    }
    
    return res;
  }