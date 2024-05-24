// Your task is to write a function that does just what the title suggests (so, fair warning, be aware that you are not getting out of it just throwing a lame bas sorting method there) with a list of integers and the expected number n of smallest elements to return.
const smallestNArray = (arr, n) => {
    while(arr.length !== n){
    arr.splice(arr.lastIndexOf(Math.max(...arr)), 1)
     
    }
    return arr;

}
console.log(smallestNArray([1, 2, 3, 4, 5], 3))
console.log(smallestNArray([1, 2, 3, 4, 2, 1], 3))