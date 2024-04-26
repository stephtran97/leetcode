/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const checkIsSmaller = (num)=>nums.reduce((acc,cur)=>cur !== num && cur < num  ?acc + 1 : acc, 0)
    return nums.map(item=>checkIsSmaller(item))
};
