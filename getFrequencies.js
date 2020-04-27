const getFrequencies = (arr) => {
    arr.sort();
    let freq = {};

    for (var i = 0; i < arr.length; i++) {
      if (freq[arr[i]]) {
        freq[arr[i]] += 1;
      }
      else {
        freq[arr[i]] = 1;
      }
    }
  return freq;
};

module.exports = getFrequencies;
