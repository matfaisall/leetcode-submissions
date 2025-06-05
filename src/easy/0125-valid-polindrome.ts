const isPalindrome = (s: string): boolean  =>{
    const cleaned = s.replace(/[^a-zA-Z0-9]/g, ""); // regex for deleting all, exact alphabets and numbers
    const firstWord = cleaned.split("").reverse().join("").toLowerCase();
    const secondWord = cleaned.split("").join("").toLowerCase();
    
    return firstWord === secondWord
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))