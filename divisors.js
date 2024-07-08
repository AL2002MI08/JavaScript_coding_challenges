"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divisors = divisors;
function divisors(n) {
    var count = [];
    for (var i = 1; i <= n; i++) {
        if (n % i == 0) {
            count.push(i);
        }
    }
    return count.length;
}
console.log(divisors(12))