/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const digits = n.toString().split('').map(d=>+d);
    const p = digits.reduce((acc,cur)=>acc=acc*cur,1);
    const s = digits.reduce((acc,cur)=>acc=acc+cur,0);
    return (p-s)
};
