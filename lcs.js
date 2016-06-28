let arr = [];
let string1 = 'acdb';
let string2 = 'dba';

for(let i = 0; i < string1.length; i++) {
  arr[i] = new Array(string2.length);
}

// top down
function lcs(S, n, T, m) {
  let result = 0;

  if(n === -1 || m === -1) { return 0; }

  if(arr[n][m]) {
    return arr[n][m];
  }

  if(S[n] === T[m]) {
    result = 1 + lcs(S, n-1, T, m-1);
  } else {
    result = Math.max(lcs(S, n-1, T, m), lcs(S, n, T, m-1))
  }

  arr[n][m] = result;
  return result;
}

console.log(lcs(string1, string1.length - 1, string2, string2.length - 1));
console.log(arr);