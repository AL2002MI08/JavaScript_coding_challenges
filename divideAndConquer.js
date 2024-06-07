// Divide and Conquer
// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
// Return as a number.
function divCon(x){
    const stringNonIntegers = x.filter(e => typeof (e) === 'number')
    const sum = stringNonIntegers.reduce((acc, val) => acc + val, 0) 
  let sumStr = []
  let stringIntegers = x.filter(e => typeof (e) === 'string')
  stringIntegers.forEach(element => {
    sumStr.push(+element)
  });

    const sumS = sumStr.reduce((a, b) => a + b, 0)
    const difference = sum - sumS
    return difference;
    }
    
    


console.log(divCon([1, '2', '3', 4, '5']))
