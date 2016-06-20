/*
Print all subsets.

In combinations, order does NOT matter. {a,b} is the same as {b,a}
Another way: We can count from 0 to 2^N - 1 and look at the bit
representation.

*/

function comb(s) {
  combHelper("", s);
}

function combHelper(prefix, string) {
  // avoid printing the empty set
  if(prefix){
      console.log(prefix);
  }

  // for each character, we print said character and print the subsets of said
  // character using the remaining characters after said character
  for(let i = 0; i < string.length; i++) {
    combHelper(prefix + string.charAt(i), string.substring(i + 1));
  }
}

comb('abc');