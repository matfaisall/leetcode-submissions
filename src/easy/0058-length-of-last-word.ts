function lengthOfLastWord(s: string): number {
  if(!s || typeof s !== 'string') return 0;

  const trimmedString = s.trim();
  if(trimmedString === "") return 0;

  const words = trimmedString.split(/\s+/); // split string dengan space / space lebih dari 1
  const lastWord = words[words.length - 1] // ambil kkata paling terakhir
  return lastWord.length

}


const result = lengthOfLastWord("Hello World");
const result2 = lengthOfLastWord("   fly me   to   the moon  ")
const result3 = lengthOfLastWord("luffy is still joyboy")

console.log(result)
console.log(result2)
console.log(result3)

