function firstNonRepeatingLetter(s) {
    if(s.length === 0) return ''
    let str = s.toLowerCase()
    // let repeatingChar = [...str].filter(e => str.indexOf(e) === str.lastIndexOf(e))[0]
    // return str.indexOf(repeatingChar) !== -1 ? s[str.indexOf(repeatingChar)] : ''
    let repeatingChar = [...str].find(e => str.indexOf(e) === str.lastIndexOf(e))
    return repeatingChar ? s[str.indexOf(repeatingChar)] : ''
    }
    console.log(firstNonRepeatingLetter('AbbaS'))