/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const sorted = nums.sort((a,b)=>b-a);
    return (sorted[0]-1)*(sorted[1]-1)
}
// var maxProduct = function(nums) {
//     let num1=nums[0];
//     let num2=0;
//     for (let i = 1; i < nums.length; i++){
//         if (nums[i]>num1){
//             num2 = num1;
//             num1= nums[i];
//         } else if (nums[i]>num2){
//             num2= nums[i]
//         }
//     }
//     return (num1-1)*(num2-1)
// }
