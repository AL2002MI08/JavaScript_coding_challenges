function smallest(n){
    let str = `${n}`
    let res = [n, 0, 0]
    for(let i = 0; i< str.length; i++){
        let trimedStr = str.slice(0, i) + str.slice(i+1)
    for(let j=0; j<=trimedStr.length;j++){
        let num = Number(trimedStr.slice(0,j) + str[i] + trimedStr.slice(j))
        if(num < res[0]) res = [num, i, j]
    }
}
return res;

}

console.log(smallest(261235))