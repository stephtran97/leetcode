/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let result = {};
    for (let i = 0; i < s.length; i++){
        result[s[i]] = (result[s[i]] ?? 0) + 1
    }
    for (key in result){
        if (result[key] === 1) return s.indexOf(key);
    }
    return -1;
};
