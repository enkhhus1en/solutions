/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  var arr = s.split(' ')
  var temp = []

  arr.forEach((x) => {
    if (x != '') {
      temp.push(x)
    }
  })

  return temp[temp.length - 1].length
}
