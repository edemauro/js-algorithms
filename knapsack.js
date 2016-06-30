const items = [
  { value: 7, weight: 3 },
  { value: 9, weight: 4 },
  { value: 5, weight: 2 },
  { value: 12, weight: 6},
  { value: 14, weight: 7},
  { value: 6, weight: 3},
  { value: 12, weight: 5}
];

let cache = [];

for(let i = 0; i < items.length; i++) {
  cache[i] = [];
}

// top down
function recValue(items, n, S) {
  let result = 0;
  if(n === 0) { return 0; }

  if(cache[n][S]) {
    return cache[n][S];
  }

  if(items[n].weight > S) { 
    result = recValue(items, n - 1, S); 
  } else {
    result = Math.max(items[n].value + recValue(items, n-1, S - items[n].weight), recValue(items, n - 1, S));
  }
  cache[n][S] = result;
  return result;
}

console.log(recValue(items, items.length - 1, 7));

// bottom up
function knapsack(items, capacity) {
  // initialize matrix to build up solution
  let dp = new Array(items.length + 1);

  // fill first column w/ 0's
  for(let i = 0; i <= items.length; i++) {
    dp[i] = new Array(capacity + 1);
    dp[i][0] = 0;
  }

  // fill first row w/ 0's
  for(let i = 0; i <= capacity; i++) {
    dp[0][i] = 0;
  }

  for(let n = 1; n <= items.length; n++) {
    for(let w = 1; w <= capacity; w++) {
      // don't take item n.
      let option1 = dp[n - 1][w];

      // take item n if it fits + optimal value using remaining space.
      let option2 = 0;
      // n - 1 because items array starts w/ index 0.
      if(items[n - 1].weight <= w) {
        option2 = items[n - 1].value + dp[n - 1][w - items[n - 1].weight];
      }
      
      // select better of two options
      dp[n][w] = Math.max(option1, option2);
    }
  }

  return dp;
}

// reconstruct answer by looking at array
// look to see if we used the item. if we used it, look at W - W(i).
console.log(knapsack(items, 7));