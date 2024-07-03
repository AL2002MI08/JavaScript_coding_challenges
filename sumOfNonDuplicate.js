const sumNoDuplicates = (numList) => {
    return numList.filter(e => numList.indexOf(e) === numList.lastIndexOf(e)).reduce((acc, val) => acc + val, 0)
  }