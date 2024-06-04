function differenceOfSquares(x){
    let arr = [...Array(x).keys()].map(i => i + 1);
    return Math.pow(arr.reduce((a, b) => a + b), 2) - arr.reduce((a, b) => a + Math.pow(b, 2));
}