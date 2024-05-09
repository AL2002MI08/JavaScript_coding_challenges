function sumOfIntegersInString(s){
    const numbers = '1234567890'
    let res = ''
    let sum = 0
      for (let i = 0; i <= s.length; i += 1) {
        if (numbers.includes(s[i])) {
          res += s[i]
        }
        else {
          if (res !== '') {
            sum = sum + parseInt(res)
            res = ''
          }
        }
      }
      return sum
    }