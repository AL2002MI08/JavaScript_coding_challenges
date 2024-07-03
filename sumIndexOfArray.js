const addArrays = (array1, array2) => {
    if(array1.length !== array2.length) throw Error
    return array1.map((e, i) => e + array2[i])
    }