const sortArray = array => {
    let odds = array.filter(num => num % 2 !== 0).sort((a,b) => a - b);
     let oddIndex = 0;
   return array.map(num =>{
     if(num % 2 !== 0){
      return odds[oddIndex++];
     }else {
       return num;
     }
   })
   }
   