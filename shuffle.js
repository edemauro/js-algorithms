let numbers = [1,2,3,4,5];

function shuffle(arr) {
  let start = 0;

  for(let i = 1; i < arr.length; i++) {
    let rand = getRandomInt(i, arr.length - 1);
    swap(arr, start, rand);
    start++;
  }

  return arr;
}

function swap(arr, x, y) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(shuffle(numbers));