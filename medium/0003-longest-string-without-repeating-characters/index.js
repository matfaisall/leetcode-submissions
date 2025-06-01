function lengthOfLongestSubstring(s) {
    var currentSubstring = [];
    var maxLength = 0;
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        // console.log('indexOf =>',currentSubstring.indexOf(char))
        var duplicateIndex = currentSubstring.indexOf(char);
        // cek jika ada karakter yang sudah pernah ada maka hapus sebelum sampai karakter yang duplicate
        if (duplicateIndex !== -1) {
            currentSubstring.splice(0, duplicateIndex + 1);
        }
        currentSubstring.push(char);
        maxLength = Math.max(maxLength, currentSubstring.length); // perbaharui panjang string saat ini
    }
    // console.log(currentSubstring)
    return maxLength;
}
var result = lengthOfLongestSubstring("zpwwkew");
console.log(result);
