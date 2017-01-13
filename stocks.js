function stockProfit(arr) {
  let profit = 0;
  let cheapest = arr[0];

  for(let i = 1; i < arr.length; i++) {
    cheapest = Math.min(cheapest, arr[i]);

    profit = Math.max(profit, arr[i] - cheapest);
  }

  return profit;
}

function recurStockProfit(arr) {
  if(arr.length <= 1) {
    return 0;
  }

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid + 1);

  let leftBest = recurStockProfit(left);
  let rightBest = recurStockProfit(right);

  let crossBest = Math.max(...right) - Math.min(...left);

  return Math.max(leftBest, rightBest, crossBest);
}

// console.log(stockProfit([1,2,3,4,5]));
console.log(recurStockProfit([1,2,3,4,5]));