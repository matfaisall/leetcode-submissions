
function lengthOfLongestSubstring(s: string): number {
  const currentSubstring: string[] = []
  let maxLength = 0

  for(const char of s) {
    // console.log('indexOf =>',currentSubstring.indexOf(char))
    const duplicateIndex = currentSubstring.indexOf(char);

    // cek jika ada karakter yang sudah pernah ada maka hapus sebelum sampai karakter yang duplicate
    if(duplicateIndex !== -1) {
      currentSubstring.splice(0, duplicateIndex + 1);
    }
    currentSubstring.push(char);
    maxLength = Math.max(maxLength, currentSubstring.length);  // perbaharui panjang string saat ini

  }

  // console.log(currentSubstring)
  return maxLength;
}

const result = lengthOfLongestSubstring("zpwwkew");
console.log(result);