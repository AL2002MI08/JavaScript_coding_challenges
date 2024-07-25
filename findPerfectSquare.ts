export function findNextSquare(sq:number):number {
    if(Math.sqrt(sq)% 1 == 0)
        return Math.pow((Math.sqrt(sq) + 1), 2)
    else return -1
   
   }