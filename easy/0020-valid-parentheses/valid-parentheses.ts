function isValid(s: string): boolean {
  const stack: string[] = [];
  const mapping = {
    ')' : '(',
    ']' : '[', 
    '}' : '{',
  }

  for(let char of s) {
    if(char in mapping) {
      const top = stack.length > 0 ? stack.pop() : "*"; // mengambil char paling atas dari stack kalo ndak kosong

      // mencocokkan pasangan parentheses
      if(mapping[char] !== top) {
        return false
      }
    } else {
      // jika dia tanda buka maka masukkan ke stack
      stack.push(char)
    }
  }

  return stack.length === 0
}

console.log(isValid("()[]{}"))
