function quickSort(array, left, right) {
  let pivot = array[ Math.floor((left + right) / 2) ];
  let i = left;
  let j = right;

  while( i <= j ) {
    while( array[i] < pivot ) i++;

    while( array[j] > pivot ) j--;

    if( i <= j ) {
      swap(array, i, j);
      i++;
      j--;
    } 
  }

  if( left < j ) {
    quickSort(array, left, j);
  }

  if( i < right ) {
    quickSort(array, i, right);
  }
}

function swap(array, x, y) {
  let tmp = array[x];
  array[x] = array[y];
  array[y] = tmp;
}

let arr = [54,26,93,17,77,31,44,55,20];
quickSort(arr, 0, arr.length - 1);
console.log(arr);

let arr2 = [100, 50, 25];
quickSort(arr2, 0, arr2.length - 1);
console.log(arr2);