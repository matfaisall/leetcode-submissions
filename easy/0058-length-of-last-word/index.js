function lengthOfLastWord(s) {
    if (!s || typeof s !== 'string')
        return 0;
    var trimmedString = s.trim();
    if (trimmedString === "")
        return 0;
    var words = trimmedString.split(/\s+/); // split string dengan space / space lebih dari 1
    var lastWord = words[words.length - 1]; // ambil kkata paling terakhir
    return lastWord.length;
}
var result = lengthOfLastWord("Hello World");
var result2 = lengthOfLastWord("   fly me   to   the moon  ");
var result3 = lengthOfLastWord("luffy is still joyboy");
console.log(result);
console.log(result2);
console.log(result3);
