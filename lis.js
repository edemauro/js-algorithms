/* 
2^n total subseqeuence (we either take the element or we don't). 
Thus, brute force is O(2^n). O(n^2) dynamic programming implementation below.
*/

function lis(array) {
  let maxLength = 1;
  let DP = [1];

  for(let i = 1; i < array.length; i++) {
    DP[i] = 1;

    for(let j = i - 1; j>= 0; j--) {
      if(DP[j] + 1 > DP[i] && array[j] < array[i]) {
        DP[i] = DP[j] + 1;
      }
    }

    if(DP[i] > maxLength) {
      maxLength = DP[i];
    }
  }

  return maxLength;
}

console.log(lis([5,6,7,1,2,3,4])); // 4