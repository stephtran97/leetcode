/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
  const result = {};
  for (let num of nums) {
    result[num] = !result[num] ? 1 : result[num] + 1;
  }
  const newNums = nums.sort((a, b) => result[a] - result[b] || b - a);
  return newNums;
};
