function binarySearch (list, value) {
  // initial values for start, middle and end
  let start = 0
  let stop = list.length - 1
  let middle = Math.floor((start + stop) / 2)

  // While the middle is not what we're looking for and the list does not have a single item
  while (list[middle] !== value && start < stop) {
    if (value < list[middle]) {
      stop = middle - 1
    } else {
      start = middle + 1
    }

    // recalculate middle on every iteration
    middle = Math.floor((start + stop) / 2)
  }

  // if the current middle item is what we're looking for return it's index, else return -1
  return (list[middle] !== value) ? -1 : middle
}

function recursiveBinarySearch(list,value){
  function search(list,value,start,end){  
    if(start>end){
      return -1;
    }
    let mid = Math.floor(((start+end)/2));
    if(list[mid]===value){
      return mid;
    }else if(value<list[mid]){
      return search(list,value,start,mid-1);
    }else if(value>list[mid]){
      return search(list,value,mid+1,end);
    }

  }

  return search(list,value,0,list.length-1);
}

const list = [2, 5, 8, 9, 13, 45, 67, 99]
console.log(binarySearch(list, 3)) 
console.log(binarySearch(list, 67)) 
console.log(recursiveBinarySearch(list, 3)) 
console.log(recursiveBinarySearch(list, 67)) 