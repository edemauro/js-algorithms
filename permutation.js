/*

In permutations, order does matter. {a,b} is NOT the same as {b,a}

*/

function perm(s) {
  permHelper("", s);
}

function permHelper(prefix, string) {
  // avoid printing the empty set
  if(prefix){
      console.log(prefix);
  }

  // for each character, we print said character and print the subsets of said
  // character using the remaining characters before AND after said character
  for(let i = 0; i < string.length; i++) {
    permHelper(prefix + string.charAt(i), string.slice(0, i) + string.slice(i + 1));
  }
}

perm('abc');