// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
const sortArray = array => {
    let odds = array.filter(num => num%2 !== 0).sort((a,b) => a - b)
    return array.map(num => num%2 ? odds.shift() : num)
  }