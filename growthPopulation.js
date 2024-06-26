// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?

// const nYear = (p0, percent, aug, p) => {
//     for(var years = 0; p0<p; years++){
//         p0 = Math.floor(p0 + (p0 *(percent/100)) + aug)
//     }
//     return years;
// }
const nYear = (p0, percent, aug, p) => {
    let count = 0
    while(p0<p){
        p0 = Math.floor(p0 + (p0 *(percent/100)) + aug)
        count++
    }
    return count;
}

console.log(nYear(1500, 5, 100, 5000))