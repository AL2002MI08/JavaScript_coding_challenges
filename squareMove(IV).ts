export function rot90Counter(strng: string): string {
    console.log(strng)
   return strng.split('\n').map((el,i,arr) =>{
     let str="";
     arr.forEach(item=> str+= item[item.length-1 - i])
     return str
   }).join('\n') 
 }
 
 export function diag2Sym(strng: string): string {
   return rot90Counter(strng).split('\n').map(el=> el.split('').reverse().join('')).join('\n')
 }
 
 export function selfieDiag2Counterclock(strng: string): string {
   return strng.split('\n').map((el, i)=> {
     return `${el}|${diag2Sym(strng).split("\n")[i]}|${rot90Counter(strng).split("\n")[i]}`
   }).join('\n')
 }
 
 export function oper(fct: (s: string) => string, s: string): string {
   return fct(s)
 }
 
 
 
 