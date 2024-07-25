export function positiveSum(arr:number[]):number {
    return arr.filter(e => e > 0).reduce((acc, el) => acc + el, 0)
  }