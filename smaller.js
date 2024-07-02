// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.
function smaller(nums) {
    return nums.map((n, i) => {
      return nums.slice(i).filter(v => v < n).length
    });
   }