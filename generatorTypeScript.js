export function* generator(a: number) : Generator<string>{
    let b: number = 1
    while(true){
       yield `${a} x ${b} =${a * b}`
       b++
    }
    }