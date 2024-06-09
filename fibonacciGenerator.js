function* fibonacciGenerator(limit) {
    let a = 0, b = 1;
    while (a <= limit) {
        yield a;
        [a, b] = [b, a + b];
    }
}
for (let number of fibonacciGenerator(2)) {
    console.log(number);
}