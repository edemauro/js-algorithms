/*
  Merge sort implementation of counting inversions.
*/

let count = 0;
function countInversions(array) {
  if(array.length > 1) {
    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);

    countInversions(left);
    countInversions(right);

    let i = 0;
    let j = 0;
    let k = 0;

    while(i < left.length && j < right.length) {
      if(left[i] < right[j]) {
        array[k++] = left[i++];
      } else {
        array[k++] = right[j++];
        count += left.length;
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

countInversions([6,5,4,3,2,1]);
console.log(count); // 15