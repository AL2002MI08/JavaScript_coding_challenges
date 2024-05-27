function findAverage(array) {
    if(array.length === 0) return 0
    let sum = array.reduce((acc, val) => acc + val, 0)
    return sum / array.length;
  }