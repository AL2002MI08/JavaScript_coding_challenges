function lottery(str){
    let newStr = []
    for(let i = 0; i < str.length; i++){
      if(!isNaN(str[i])){
         newStr.push(str[i])
         }
    }
    const uniqueIntegers = [...new Set(newStr)].join('');
    return uniqueIntegers || "One more run!"
    }