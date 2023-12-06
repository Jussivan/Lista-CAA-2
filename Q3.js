function twoSum(nums, target) {
  const numMap = new Map();
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    const complement = target - nums[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i);
  }
  return [];
}
