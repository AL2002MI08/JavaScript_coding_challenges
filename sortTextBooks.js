function sorter(textbooks) {
    return textbooks.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : 
                                    a.toLowerCase() < b.toLowerCase() ? -1  : 0)
  }
  console.log(sorter(['Algebra', 'History', 'Geometry', 'English']))