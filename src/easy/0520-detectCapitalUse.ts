function detectCapitalUse(word: string): boolean {
  if(!word) return false

  const w = word === word.toUpperCase() && /[A-Z]/.test(word);

  return w

}


console.log(detectCapitalUse("USA"))
console.log(detectCapitalUse("Flag"));
