// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const container = {};
    for(let char of str){
        container[char] = (container[char])?container[char]++ : 1;
    }

    let max = 0, maxChar = '';

    for (let char in container){
       if(container[char]>max){
           max = container[char];
           maxChar = char;
       }
    }
    return maxChar;



}

module.exports = maxChar;
