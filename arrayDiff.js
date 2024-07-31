function arrayDiff(a, b) {
    return a.filter(e=> b.filter(el=> el=== e).length?false:true)
  
  }