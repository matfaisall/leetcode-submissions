function reverseStr(s: string, k: number): string {
  let arr = s.split("");

  // loop melali string dgn step 2k
  for (let i = 0; i < arr.length; i += 2 * k) {
    const end = Math.min(i + k, arr.length); // pastiin ndak mebdih dr panjang string
    const subArray = arr.slice(i, end).reverse(); //

    arr.splice(i, subArray.length, ...subArray); // balikin subarray yang udah di balik ke array lagi
  }

  return arr.join("");
}

// console.log(reverseStr("abcdefg", 2));
console.log(reverseStr("abcd", 2));

// === opsi solusi terbaik dari leetcode ===
function reverseStrBestSolution(s: string, k: number): string {
  let arr = s.split("");
  for (let i = 0; i < s.length; i += 2 * k) {
    // Reverse the first k characters for every 2k segment
    let left = i;
    let right = Math.min(i + k - 1, s.length - 1);
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return arr.join("");
}
