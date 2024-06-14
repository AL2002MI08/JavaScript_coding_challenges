const geometricSequence = (a, r, n) =>{
    let res = 0;
    for(let i = 0; i< n; i++){
        res += a * Math.pow(r,i)
    }
    return res
}
console.log(geometricSequence(2,3,5))