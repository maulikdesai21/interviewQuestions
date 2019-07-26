// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     return str.split('').reduce((reversed,char)=> char+reversed,'');

// }


module.exports = reverse;




// function reverse(str) {
//
//     return str.split("").reverse().join('');
//
// }

function reverse(str) {

    let reversed = '';
    console.log(str);

    for(let char of str){
        console.log(char);
        reversed = char +reversed;
        console.log(reversed)
    }

    return reversed;
}

reverse('Maulik');