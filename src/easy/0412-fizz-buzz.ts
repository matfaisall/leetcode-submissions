const fizzBuzz = (n: number): string[] => {
  let answer: string[] = [];

  for (let i = 1; i <= n; i++) {
   let str = "";
   console.log(str)

   if(i % 3 === 0) str += "Fizz";
   if(i % 5 === 0) str += "Buzz";
   if(str === "") str = i.toString();
  
   answer.push(str);
  }

  return answer;
}


console.log(fizzBuzz(15))