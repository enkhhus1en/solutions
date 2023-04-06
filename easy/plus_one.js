/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 0

  for (var i = digits.length - 1; i > -1; i--) {
    if (i === digits.length - 1) {
      if (digits[i] === 9) {
        digits[i] = 0
        carry++
        if (i === 0) {
          digits.unshift(1)
          return digits
        }
      } else {
        digits[i]++
        return digits
      }
    } else {
      if (carry > 0) {
        if (digits[i] === 9) {
          digits[i] = 0
          if (i === 0) {
            digits.unshift(1)
            return digits
          }
        } else {
          digits[i]++
          carry = 0
          return digits
        }
      } else {
        return digits
      }
    }
  }

  return digits
}
