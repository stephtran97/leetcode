/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let result=[nums[0]];
    for (let i = 1; i < nums.length; i++){
        result.push(result[i-1]+nums[i])
    }
    return result;
};
// var runningSum = function(nums) {
//     let total = 0
//     return nums.map((num)=>{
//         total+=num;
//         return total;
//     })
// };
