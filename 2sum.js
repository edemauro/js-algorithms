/*
  insert all elements into a hash table
  insertions take O(1). we have n elements to insert, so O(n)
  we then loop over all elements and see if the number we need is in the hash table
  search takes O(1) for hash tables. we have n elements to loop over, so O(n)
  O(n) + O(n) = O(n)
*/ 

let numbers = [10, -25, 8, -10, -7, 4, -3, 2];

function twoSum(arr, target) {
  let hash = {};
  arr.forEach((number) => { hash[number] = number; });
  arr.forEach((number) => {
    if(hash[(target - number)]) {
      console.log(number + ' ' + hash[(target - number)]);
    }
  });
}

twoSum(numbers, 12);