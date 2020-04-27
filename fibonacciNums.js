const fibonacciNums = (n) => {
    let fib = [];
    var prev = 0, pres = 1, next = 1;
    for (var i = 0; i < n; i++) {
      fib.push(prev);
      next = prev + pres;
      prev = pres;
      pres = next
    }
    return fibSeq(n);
};

module.exports = fibonacciNums;
