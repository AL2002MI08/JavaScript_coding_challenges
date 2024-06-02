function topThreeWords(str){
    let splittedWords = str.toLowerCase().match(/\b[\w']+\b/g);
    const obj ={}
    for(let string of splittedWords){
        obj[string] = (obj[string] || 0) + 1
    }
    const wordCount = [...new Set(Object.entries(obj).sort((a,b) => b[1] - a[1]))].map(el => el[0]).slice(0, 3)
    return wordCount;
}

let str = "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income."
console.log(topThreeWords(str))

// function topThreeWords(str) {
//     let words = str.toLowerCase().match(/\b[\w']+\b/g);
//     if (!words) return []; 

//     const wordCount = {};
//     for (let word of words) {
//         wordCount[word] = (wordCount[word] || 0) + 1;
//     }
//     return Object.entries(wordCount)
//         .sort((a, b) => b[1] - a[1])
//         .slice(0, 3)
//         .map(entry => entry[0]);
// }