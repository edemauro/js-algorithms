// https://www.cs.cmu.edu/~avrim/451f09/lectures/lect1001.pdf

// https://www.youtube.com/watch?v=32LpoRHCeJA&list=PLLH73N9cB21VPj3H2xwTTye5TC8-UniA2&index=45

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
    console.log('using cache');
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

console.log(recValue(items, items.length - 1, 13));
