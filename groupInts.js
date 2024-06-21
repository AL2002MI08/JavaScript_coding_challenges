function groupInts(xs,x) {

    let currentGroup = []
    let result = []
    let true_false = (xs[0] < x) 

    if(xs.length === 0){
        return []
    }

    for( let i=0; i<xs.length; i++){
        if((xs[i]<x) === true_false){
            currentGroup.push(xs[i])

        } else {
            result.push(currentGroup)
            currentGroup = [xs[i]]
            true_false = !true_false
        }   }

        result.push(currentGroup)
    return result
  }