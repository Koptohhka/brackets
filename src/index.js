module.exports = function check(str, arr) {
    let countArr = []
    for (let i = 0; i < str.length; i += 1) {
      let check = false
      for (let j = 0; j < arr.length; j += 1) {
  
        if (str[i] === arr[j][0]) {
          check = true
          if (arr[j][0] === arr[j][1]) {
            if (countArr[countArr.length - 1] === arr[j][0]) {
              countArr.pop()
              break
            }
          }
          countArr.push(arr[j][1])
          break
        }
      }
  
      if (!check) {
        if (countArr.length === 0 || str[i] !== countArr[countArr.length - 1]) {
          return false
        }
        countArr.pop()
      }
      console.log(countArr)
    }

    if (countArr.length === 0) {
        return true;
    } else {
        return false;
    }
}
