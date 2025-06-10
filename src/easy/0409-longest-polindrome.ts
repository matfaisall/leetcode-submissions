const longestPalindrome = (s: string): number => {
  const frequencyMap = new Map<string, number>();
  let length = 0;
  let hasOdd = false;

  for (const char of s) {
    frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1); // freq for counting the frequency of each char
  }

  for (const count of frequencyMap.values()) {
    if (count % 2 === 0) {
      length += count;
    } else {
      length += count - 1;
      hasOdd = true;
    }
  }

  console.log(frequencyMap);

  return hasOdd ? length + 1 : length;
};

console.log(longestPalindrome("abccccdd"));
