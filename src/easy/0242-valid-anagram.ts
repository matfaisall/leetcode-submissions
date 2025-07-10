function isAnagram(s: string, t: string): boolean {
  if(s.length !== t.length) return false;

  const sString = s.split("").sort((a: string, b: string) => a.localeCompare(b)).join("")
  const tString = t.split("").sort((a: string, b: string) => a.localeCompare(b)).join("")

  return sString === tString;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));