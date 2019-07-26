function rotateAMatrix(matrix) {
  const n = matrix.length;
  const x = Math.floor(n/ 2);
  const y = n - 1;
  for (let i = 0; i < x; i++) {
     for (let j = i; j < y - i; j++) {
        k = matrix[i][j];
        matrix[i][j] = matrix[y - j][i];
        matrix[y - j][i] = matrix[y - i][y - j];
        matrix[y - i][y - j] = matrix[j][y - i]
        matrix[j][y - i] = k
     }
  }
}

function diagonalTraversal(matrix){
  let cols = matrix.length;
  let rows = matrix[0].length;
  for(let k=0;k<=rows-1;k++){
    let i=k;
    let j=0;
    let arr = [];
    while(i>=0){
      arr.push(matrix[i][j]);
      i=i-1;
      j=j+1;
    }
    console.log(arr);
  }
  for(let k=1;k<=cols-1;k++){
    let j=k;
    let i=rows-1;
    let arr = [];
    while(j<=cols-1){
      arr.push(matrix[i][j]);
      i=i-1;
      j=j+1;
    }
    console.log(arr);
  }
}

const A = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];

console.group("Rotate a Matrix")
console.log(A)
rotateAMatrix(A); // a function
console.log(A);
console.groupEnd();


console.group("\n Diagonal Traversal of a Matrix");
diagonalTraversal(A);
console.groupEnd();




