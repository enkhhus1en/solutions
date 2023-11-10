/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let ans = [];
    for(let i=0; i<nums.length; i++){
        ans.push(nums[nums[i]])
    }

    return ans;
};

//additional solution
//return nums.map((v)=>nums[v])