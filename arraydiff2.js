function twosDifference(input){
    return input.sort((a,b) => a - b).filter(el => input.indexOf(el + 2) !== -1).map(el => [el, el+2])
  }
  //method 2
  //function twosDifference(input){
    // let arr = input.slice(),
    //     output = [];
    // arr.sort((a, b) => a - b);
    // for (let i = 0; i < arr.length; i++) {
    //   if (arr[i] + 2 === arr[i + 1] || arr[i] + 2 === arr[i + 2]) output.push([arr[i], arr[i] + 2]);
    // }
    // return output;
  //}
  console.log(twosDifference([1,2,3,4]))