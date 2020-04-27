const getFrequencies = (arr) => {
  function countFreq(nums) {
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

    return freq;
  }
  console.log(countFreq(arr));
};

module.exports = getFrequencies;
