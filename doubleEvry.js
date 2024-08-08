function doubleEveryOther(a) {
    return a.map((el, i) => i !== 0 && i % 2 !== 0 ? el * 2 : el);
  }