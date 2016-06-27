// http://interactivepython.org/runestone/static/pythonds/Recursion/DynamicProgramming.html
// DP = recursion + memoization. Use it when there are recursive subproblems that are not independent.
function recMC(list, change) {
  let minCoins = change;

  if(change === 0) {
    return 0;
  } else {
    list.forEach((coin) => {
      if(coin <= change) {
        let numCoins = 1 + recMC(list, change - coin);

        if(numCoins < minCoins) {
          minCoins = numCoins;
        }
      }
    });
  }

  return minCoins;
}

console.log(recMC([1,5,10,25], 9));