export function generateShape(int: number): string {
    let res = '+'.repeat(int)
    return Array(int).fill(res).join('\n')
  }