let arr = [];
let string1 = 'acd';
let string2 = 'acd';

for(let i = 0; i < string1.length; i++) {
  arr[i] = Array.apply(null, {length: string2.length}).map(() => {return 0;});
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

function botLCS(S, T) {
  let dp = [];
  const m = S.length;
  const n = T.length;

  for(let i = 0; i < m + 1; i++) {
    dp[i] = new Array(n + 1);
  }

  for(let i = 0; i <= m; i++) {
    for(let j = 0; j <= n; j++) {
      if(i === 0 || j === 0) {
        dp[i][j] = 0;
      } else if(S[i - 1] === T[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j - 1]);
      }
    }
  }

  return dp;
}

console.log(botLCS(string1, string2)[string1.length][string2.length]);