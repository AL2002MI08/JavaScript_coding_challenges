export function *fibonacciSequence(): Iterator<bigint> {
    let [a ,b] = [1n, 0n]
    while(true){
        [a, b] = [b, a + b]
        yield b;
    }
}