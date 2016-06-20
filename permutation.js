/*

In permutations, order does matter. {a,b} is NOT the same as {b,a}

n! / (n - c)!

*/

function perm(s) {
  permHelper("", s);
}

function permHelper(prefix, string) {
  // avoid printing the empty set
  if(prefix){
      console.log(prefix);
  }

  // for each character, print the combination using the letter as a prefix
  // and the combinations using the remaining characters before and after said 
  // character
  for(let i = 0; i < string.length; i++) {
    permHelper(prefix + string.charAt(i), string.slice(0, i) + string.slice(i + 1));
  }
}

perm('abc');