//Problem 1 - Acronym
//Convert a phrase to its acronym.

function acronym(phrase: string) {
  const words: string[] = phrase.split(" ");
//   console.log(words);
  const acronym: string = words.map((word) => word[0]).join("");
//   console.log(acronym);
  const upperAcronym: string = acronym.toUpperCase();
  return upperAcronym;
}

console.log(acronym("I LOVE YOU"));
console.log(acronym("kak bagas the best teacher of all times"));
