const canBeTypedWords = (text: string, brokenLetters: string): number => {
  let words = text.split(" "); // ["Hello", "World"]
  const brokenLetterSplit = brokenLetters.split(""); // ["a", "d"]

  for (let i = 0; i < brokenLetterSplit.length; i++) {
    words = words.filter((w) => {
      // Hello
      return !w.includes(brokenLetterSplit[i]); // cek apakah ada kata yang mengandung brokenLeter
    });
  }

  return words.length;
};

console.log(canBeTypedWords("Hello World", "ad"));
// console.log(result)
