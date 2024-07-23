export class Kata {
    static disemvowel(str: string): string {
      let vowels = 'aeiouAEIOU'
      return str.replace(/[aeiou]/gi, '');
    }
  }