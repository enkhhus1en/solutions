/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let index = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i - 1] != nums[i]) {
      nums[index] = nums[i];
      index++;
    }
  }

  return index;
};
