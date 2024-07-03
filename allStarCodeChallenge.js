// Create a function called scoring() that takes an array of Player objects and returns an array of player names, in order of descending score (highest score is index 0, 2nd highest is index 1, etc.).

function score(obj) {
    return obj.normKill * 100 + obj.assist * 50 + obj.damage * .5 + 
             obj.healing + Math.pow(2, obj.streak) + obj.envKill * 500;
}

function scoring(arr) {
    return arr.sort((a,b) => score(b)-score(a)).map(a=>a.name);
}