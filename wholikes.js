function whoLikesThis(name){
    switch(name.length){
        case 0: return `no one likes this`
        case 1: return `${name[0]} likes this`
        case 2: return `${name[0]} and ${name[1]} like this`
        case 3: return `${name[0]}, ${name[1]} and ${name[2]} like this`
        case 4: return `${name[0]}, ${name[1]} and ${name.length - 2} others like this`
    }

}

console.log(whoLikesThis(['John', 'Alex', 'Max', 'Leslie']))