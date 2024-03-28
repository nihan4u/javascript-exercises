const reverseString = function(word) {
    if (typeof word !== `string`) {
        return "Invalid Input";
    }  
    let reversedWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }
    return reversedWord;
};

/* Alternative Solution
const reverseString = function(word) {
    if (typeof word !== 'string') return 'Invalid Input';
    return word.split('').reverse().join('');
};
*/
// Do not edit below this line
module.exports = reverseString;
