// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n,row = 0,level='') {

    if(row === n){
        return;
    }
    if(level<n*2 -1){
        console.log(level);
        return pyramid(n,row+1);
    }
    let midpoint = Math.floor((n*2-1)/2);
    let add;
    if(midpoint-row <= level.length && midpoint+row >= level.length){
        add = '#'
    }else{
        add = ' '
    }
    pyramid(n,row, level+add)

}

module.exports = pyramid;


//
// function pyramid(n) {
//
//     for(let row =0; row<n;row++){
//         let level ='';
//         let midpoint = Math.floor((n*2-1)/2);
//         for(let column= 0 ; column<n*2-1 ;column++){
//             if (midpoint - row <= column && midpoint+row>=column){
//                 level +='#';
//             }else {
//                 level += ' ';
//             }
//
//         }
//         console.log(level);
//     }
// }