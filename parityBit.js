// You have two parameters, one being the wanted parity (always 'even' or 'odd'), and the other being the binary representation of the number you want to check.

// Your task is to return an integer (0 or 1), whose parity bit you need to add to the binary representation so that the parity of the resulting string is as expected.

function checkParity(p,s){
    return [...s].reduce((a,b)=>a ^ b==1,0) ^ p[0]=='o';
  }
  console.log(checkParity('even','0101010'))
