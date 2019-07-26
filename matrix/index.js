// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const results = [];
    for(let i=0;i<n;i++){
        results.push([]);
    }
    let counter = 1;
    let startColumn=0,endcolumn=n-1,startRow=0,endRow=n-1;

    while (startColumn<=endcolumn && startRow<=endRow){
        //Top Row
        for (let i= startColumn; i<=endcolumn;i++){
            results[startRow][i] = counter;
            counter++;
        }
        startRow++;
        //Right Column
        for(let i = startRow ;i<=endRow;i++){
            results[i][endcolumn] = counter;
            counter++
        }
        endcolumn--;

        //Bottom row
        for(let i = endcolumn ;i>=startColumn;i-- ){
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;

        //First Column
        for(let i = endRow;i>=startRow;i--){
            results[i][startColumn] = counter;
            counter++
        }
        startColumn++;



    }
    return results;
}

module.exports = matrix;
