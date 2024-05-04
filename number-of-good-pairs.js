/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let result = 0;
    for (let i = 0; i< nums.length; i++){
        for (let j = i + 1; j <nums.length;j++){
            if (nums[i] === nums[j]) result++;
        }
    }
    return result;
};
// var numIdenticalPairs = function (nums) {
//   let result = 0;
//   const count = {};
//   for (let num of nums) {
//     result += count[num] || 0;
//     count[num] = (count[num] || 0) + 1;
//   }
//   return result;
// };
