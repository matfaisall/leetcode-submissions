function toLowerCase(s: string): string {
  // return s.toLowerCase();
  let lowerString = "";
  for (const char of s) {
    const charCode = char.charCodeAt(0);
    // console.log(charCode);

    if (charCode >= 65 && charCode <= 90) {
      lowerString += String.fromCharCode(charCode + 32);
    } else {
      lowerString += char;
    }
  }
  return lowerString;
}

console.log(toLowerCase("Hello World"));
