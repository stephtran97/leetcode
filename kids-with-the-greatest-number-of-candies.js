/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let result = candies.map(candy=>{
        const newCandies = candy+extraCandies
        return Math.max(newCandies,...candies) === newCandies
    })

    return result
};
