function mergeStrings(first, second){
    let mergeStr = 0;
      for(let i=0; i< first.length; i++){
        if(second.startsWith(first.substring(i))){
          mergeStr = first.length - i;
          break
        }
      }
      return first + second.substring(mergeStr)
    }