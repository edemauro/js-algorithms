function mergeSort(array) {
  if(array.length > 1) {
    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);

    mergeSort(left);
    mergeSort(right);

    let i = 0;
    let j = 0;
    let k = 0;

    while(i < left.length && j < right.length) {
      if(left[i] < right[j]) {
        array[k++] = left[i++];
      } else {
        array[k++] = right[j++];
      }
    }

    while(i < left.length) {
      array[k++] = left[i++];
    }

    while(j < right.length) {
      array[k++] = right[j++];
    }
  }

  return array;
}

console.log(mergeSort([4,5,2,1,3,5]));