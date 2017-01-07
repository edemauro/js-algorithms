/*

In permutations, order does matter. {a,b} is NOT the same as {b,a}

n! / (n - c)!

There is NO Stringbuilder class, so we have to start with an empty string.

*/

function perm(s) {
  permHelper("", s);
}

function permHelper(prefix, string) {
  if(string.length == 0) {
    console.log(prefix);
  }

  // for each character, print the permutation using the letter as a prefix
  // and appending the permutations using the remaining letters
  for(let i = 0; i < string.length; i++) {
    permHelper(prefix + string.charAt(i), string.slice(0, i) + string.slice(i + 1));
  }
}

perm('abc');