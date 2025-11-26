// cara ku
const twoSum = (nums: number[], target: number) => {
  const result: number[] = [];

  // disini saya menggunakan pendekatan force sum, jadi nilai pertama dan mencocokkan semua angka sesudahnya sampai ketemu jumlah targetnya.

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i, j);
      }
    }
  }

  return result;
};

console.log(twoSum([4, 1, 2, 3, 5], 3));

// cara paling keren dari leetcode

function twoSumExample(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];

    const complement = target - value;

    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }

    map.set(value, i);
  }
  return [];
}
