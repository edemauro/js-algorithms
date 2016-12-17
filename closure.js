function factWrap(n) {
  var ret = [];

  fact(n, ret, 0);

  return ret;
}

function fact(n, results, level) {
  if(n > 1) {
    results[level] = n * fact(n - 1, results, level + 1);
    return results[level];
  } else {
    results[level] = 1;
    return 1;
  }
}

var t = factWrap(5);

t.forEach(function(el) { console.log(el); });

function factClosureWrap(n) {
  var results = [];

  function closureFact(n, level) {
    if(n > 1) {
      results[level] = n * closureFact(n - 1, level + 1);
      return results[level];
    } else {
      results[level] = 1;
      return 1;
    }
  }

  closureFact(n, 0);

  return results;
}

var n = factClosureWrap(5);
n.forEach(function(el) { console.log(el); });