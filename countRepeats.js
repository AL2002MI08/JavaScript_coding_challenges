function countRepeats(str){
    let removals = 0;
    for (let i = 0; i < str.length - 1; i++) {
      if (str[i] === str[i + 1]) {
        removals++; 
      }
    }
    return removals; 
}
