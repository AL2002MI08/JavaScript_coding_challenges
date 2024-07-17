// Convert number to reversed array of digits
export const digitize = (n: number): number[] => {
    return n.toString().split('').map(e => Number(e)).reverse()
  };