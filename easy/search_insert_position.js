/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums[nums.length - 1] < target) {
    return nums.length
  }

  if (nums[0] > target || nums[0] === target) {
    return 0
  }

  for (var i = 1; i < nums.length; i++) {
    if (nums[i] === target) {
      return i
    }

    if (nums[i - 1] < target && nums[i] > target) {
      return i
    }
  }
}
