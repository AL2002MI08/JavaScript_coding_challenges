// String 1: "abcdefg"
// String 2: "abcqetg" results in [3,5]

const spot = (s1,s2) => [...s1].map((e, i) => i).filter(el => s1[el] !== s2[el])