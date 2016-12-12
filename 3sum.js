/*
  Naive is n^3. We just check every 3-number combination w/ brute force.
  Better is n^2. Sort first and then check every number w/ start and end
  variables that increase or decrease.
*/

let numbers = [10, -25, 8, -10, -7, 4, -3, 2];

numbers.sort((a, b) => { return a - b; });

for(let i = 0; i < numbers.length - 3; i++) {
  let a = numbers[i];
  let start = i + 1;
  let end = numbers.length - 1;

  while(start < end) {
    let b = numbers[start];
    let c = numbers[end];
    
    if(a + b + c === 0) {
      console.log(a + ' ' + b + ' ' + c);
      end -= 1;
    } else if (a + b + c > 0) {
      end -= 1;
    } else {
      start += 1;
    }
  }
}

console.log(numbers);