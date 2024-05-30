// you need to write a function each, that takes an integer number n and a ( possibly empty ) list of integers, and returns a list of every nth element of the input list ( which possibly is the empty list ).

// If n < 0, count by abs n from the end of the list.
// If n == 0, return an empty list.
const each = (n, arr) =>{
    let array = []
    if(n< 0){
        arr.reverse()
    }
    for(let i = 0; i < arr.length ; i++) {
        if((i + 1) % n === 0) {
          array.push(arr[i]);
        }
      }
    return array
}
console.log(each(-2, [1, 2, 3, 4, 5, 6]))