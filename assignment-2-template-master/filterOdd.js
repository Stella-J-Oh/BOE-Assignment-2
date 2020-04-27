const filterOdd = (arr) => {
  function isOdd(num) {
    if (num %2 !== 0) return num;
  }
  console.log(arr.filter(isOdd));
};

module.exports = filterOdd;
