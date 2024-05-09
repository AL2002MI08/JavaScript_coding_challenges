const nameStr = (str, name) => {
    const loStr = str.toLowerCase()
    const loName = name.toLowerCase();
    let index = 0
    for(let i of str){
      if(i === name[index]){
        index++
      }
    }
    return index === name.length;
  }