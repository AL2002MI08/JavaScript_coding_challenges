const sumOfMixedArray = x =>{
    let result = 0;
    for(let el of x){
        result += parseInt(el)  
    }
    return result
}

console.log(sumOfMixedArray([9,3,'7','3']))