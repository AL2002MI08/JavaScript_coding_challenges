const findLongestSubstr = s => {
    const re = /([a-zA-Z0-9])\1*/g;
    const matches = s.match(re);

    if (!matches) return []; 
    let longest = matches.reduce((max, curr) => curr.length > max.length ? curr : max, "");
    const startIndex = s.indexOf(longest);
    const endIndex = startIndex + longest.length - 1;
    const asciiCode = longest[0].charCodeAt(0).toString();
    return [asciiCode, longest.length, [startIndex, endIndex]];
}