function reverseStr(s: string, k: number): string {
  let arr = s.split("");

  // loop melali string dgn step 2k
  for (let i = 0; i < arr.length; i += k * k) {
    const end = Math.min(i + k, arr.length); // pastiin ndak mebdih dr panjang string
    const subArray = arr.slice(i, end).reverse(); //

    arr.splice(i, subArray.length, ...subArray); // balikin subarray yang udah di balik ke array lagi
  }

  return arr.join("");
}

// console.log(reverseStr("abcdefg", 2));
console.log(reverseStr("abcd", 2));
