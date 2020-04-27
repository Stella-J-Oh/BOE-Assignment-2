const getFrequencies = (arr) => {
    arr.sort();
    let freq = {};

    for (var i = 0; i < nums.length; i++) {
      if (freq[nums[i]]) {
        freq[nums[i]] += 1;
      }
      else {
        freq[nums[i]] = 1;
      }
    }
  console.log(freq);
};

module.exports = getFrequencies;
