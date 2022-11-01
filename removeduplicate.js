console.log("duplicate");

var removeDuplicates = function (nums) {
  var expected = [];
  var flag = 0;
  var k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      flag = flag + 1;
    } else {
      expected.push(nums[i]);
      k = k + 1;
    }
  }
  for (let j = 0; j < expected.length; j++) {
    nums[j] = expected[j];
  }
  // unique upto length k
  console.log(k);
  return nums;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
