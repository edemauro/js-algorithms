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

function dynamicMC(arr, change) {
  let minCoins = []; // array to hold min coins to make each change value.

  minCoins[0] = 0; // 0 coins to make 0 change

  for(let i = 1; i < change + 1; i++) { // rest of entries are infinity
    minCoins[i] = Infinity;
  }
  
  for(let j = 1; j < change + 1; j++) { // for all values of change
    for(let i = 0; i < arr.length; i++) { // try all of the coins
      if(1 + minCoins[j - arr[i]] < minCoins[j]) { // if 1 coin + min number of coins to make remaining change
        minCoins[j] = 1 + minCoins[j - arr[i]]; // then update min coins
      }
    }
  }

  return minCoins[change];
}

console.log(dynamicMC([1,5,10,25], 6));