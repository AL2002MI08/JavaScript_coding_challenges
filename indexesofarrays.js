// Write a JavaScript program to extract values at specified indexes from a specified array.
const indexOfArray = (arr, arr2)=> {
let newArray = [];
let filteredArray = arr.map((value, index) => arr2.includes(index) ? newArray.push(value): value)
.filter((val, i) => !newArray.includes(i))
arr.length = 0;
filteredArray.forEach(val => arr.push(val))
return newArray;
}
let arra1 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(indexOfArray(arra1, [1,3]))