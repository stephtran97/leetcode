/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
  const countVowels = (s)=>{
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    return s.split('').filter(char=>vowels.has(char)).length
  }
  return countVowels(s.substring(0, s.length / 2))===countVowels(secondHalf = s.substring(s.length / 2))
};
