function cogRpm(C, n) {
    var l = C.length;
    var s0 =     n%2? -1 :  1;
    var sz = (n-l)%2?  1 : -1;
    return [s0*C[n]/C[0], sz*C[n]/C[l-1]];
  }