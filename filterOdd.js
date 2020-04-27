const filterOdd = (arr) => {
  function isOdd(num) {
    return (num %2 !== 0);
  }
  return arr.filter(isOdd);
};

module.exports = filterOdd;
