const arr = [3, 1, 4, 6, 5];


// inefficient doing it in order of n^3
function isTriplet(arr) 
{ 
    for (let i=0; i<arr.length; i++) 
    { 
       for (let j=i+1; j<arr.length; j++) 
       { 
          for (let k=j+1; k<arr.length; k++) 
          { 
            // Calculate square of array elements 
            let x = arr[i]*arr[i], y = arr[j]*arr[j], z = arr[k]*arr[k]; 
  
            if (x == y + z || y == x + z || z == x + y) 
                 return true; 
          } 
       } 
    } 
  
    // If we reach here, no triplet found 
    return false; 
}

console.log(isTriplet(arr));


// Use sorting to complete in the order of n^2
function isTripletEfficient(arr){
  for (let i=0; i<arr.length; i++) {
    arr[i] = arr[i]*arr[i]; 
  }

  mergeSort(arr);
  // Now fix one element one by one and find the other two 
  // elements 
  for (let i = arr.length-1; i >= 2; i--) 
  { 
        // To find the other two elements, start two index 
        // variables from two corners of the array and move 
        // them toward each other 
        let l = 0; // index of the first element in arr[0..i-1] 
        let r = i-1; // index of the last element in arr[0..i-1] 
        while (l < r) 
        { 
            // A triplet found 
            if (arr[l] + arr[r] == arr[i]) 
                return true; 
  
            // Else either move 'l' or 'r' 
            (arr[l] + arr[r] < arr[i])?  l++: r--; 
        } 
  } 
  return false;
}


console.log(isTripletEfficient(arr))
function mergeSort(arr){
  var len = arr.length;
  if(len <2)
     return arr;
  var mid = Math.floor(len/2),
      left = arr.slice(0,mid),
      right =arr.slice(mid);
  //send left and right to the mergeSort to broke it down into pieces
  //then merge those
  return merge(mergeSort(left),mergeSort(right));
}
   

function merge(left, right){
  var result = [],
      lLen = left.length,
      rLen = right.length,
      l = 0,
      r = 0;
  while(l < lLen && r < rLen){
     if(left[l] < right[r]){
       result.push(left[l++]);
     }
     else{
       result.push(right[r++]);
    }
  }  
  //remaining part needs to be addred to the result
  return result.concat(left.slice(l)).concat(right.slice(r));
}
