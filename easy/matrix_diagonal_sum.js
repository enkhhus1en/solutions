/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let sum = 0
  for (var i = 0; i < mat.length; i++) {
    for (var j = 0; j < mat[i].length; j++) {
      if (i == j) {
        sum = sum + mat[i][j]
      } else if (i + j == mat[i].length - 1) {
        sum = sum + mat[i][j]
      }
    }
  }

  return sum
}

// 0 0
// 1 1
// 2 2
// 3 3

// 0 3
// 1 2
// 2 1
// 3 0
