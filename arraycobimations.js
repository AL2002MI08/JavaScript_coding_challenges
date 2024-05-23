//write function given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.
//ex
// solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].
function solve(arr) {
    return arr.reduce((res, curr) => res *= new Set(curr).size, 1);
  };