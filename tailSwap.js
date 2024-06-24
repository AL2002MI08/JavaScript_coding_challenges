function tailSwap(arr) {
    const [first, second] = arr.map(e => e.split(':'));
    return [`${first[0]}:${second[1]}`, `${second[0]}:${first[1]}`]
    }

    console.log(tailSwap(['abc:123', 'cde:456']))