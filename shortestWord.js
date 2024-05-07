function findShort(s){
    let words = s.split(' ')
    let lengthOfWord ={}
    let shortestWord = [];
    for(let word of words){
      lengthOfWord[word] = word.length
    }
  
    for(let length in lengthOfWord){
      shortestWord.push(lengthOfWord[length]);
    }
    
  return Math.min(...shortestWord)
  }