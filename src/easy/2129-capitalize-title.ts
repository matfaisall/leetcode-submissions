const capitalizeTitle = (title: string) => {
  const result = title.split(" ").map((word) => {
    if (word.length <= 2) {
      return word.toLowerCase();
    }

    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return result.join(" ");
};

// const theTitleOne = capitalizeTitle("Aza");
// console.log(theTitleOne);
const theTitleTwo = capitalizeTitle("capiTalIze tHe titLe");
console.log(theTitleTwo);

const theTitleThree = capitalizeTitle("First leTTeR of EACH Word");
console.log(theTitleThree);
