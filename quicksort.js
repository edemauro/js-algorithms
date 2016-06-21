function quickSort(array) {
  quickSortHelper(array, 0, array.length - 1);
}

function quickSortHelper(array, first, last) {
  if(first < last) {
    let index = partition(array, first, last);
    quickSortHelper(array, first, index - 1);
    quickSortHelper(array, index + 1, last);
  }
}

function partition(array, first, last) {
  // set pivot to first element
  let pivot = array[first];
  let left = first + 1;
  let right = last;

  while(left < right) {
    // keep moving left until we find an element bigger than the pivot
    while(array[left] < pivot) {
      left++;
    }

    // keep moving right until we find an element smaller than the pivot
    while(array[right] > pivot) {
      right--;
    }

    // if right hasn't crossed left, swap elements.
    if(left < right) {
      swap(array, left, right);
    }
  }

  // swap right with the pivot to move it into its correct position.
  swap(array, first, right);

  // return the split point
  return right;
}

function swap(array, x, y) {
  let tmp = array[x];
  array[x] = array[y];
  array[y] = tmp;
}

let arr = [54,26,93,17,77,31,44,55,20];
quickSort(arr);
console.log(arr);