// no BigInt, parceInt / Number, no built-in library

const addStrings = (num1: string, num2: string): string => {
  let i: number = num1.length - 1;
  let j: number = num2.length - 1;

  let carry: number = 0; // ini untuk penjumlahan lebih dari 9
  let result: string = ""; // hasil dari penjumlahan

  while (i >= 0 || j >= 0 || carry > 0) {
    // Ambil digit terakhir (0–9) tanpa convert ke integer penuh
    const digit1: number = i >= 0 ? num1.charCodeAt(i) - "0".charCodeAt(0) : 0;
    const digit2: number = j >= 0 ? num2.charCodeAt(j) - "0".charCodeAt(0) : 0;

    const sum: number = digit1 + digit2 + carry;

    result = (sum % 10) + result; // digit terakhir result
    carry = Math.floor(sum / 10); // simpan carry

    i--;
    j--;
  }
  return result;
};

console.log(addStrings("10", "19"));
