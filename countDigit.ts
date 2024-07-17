export function countDigit (number: string, digit: string, base: number, fromBase: number): number {
    let n = Number(number)
    n = parseInt(number, fromBase)
    
    return n.toString(base).split('').filter(e => e == digit).length
  }