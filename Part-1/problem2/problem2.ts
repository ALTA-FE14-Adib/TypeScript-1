//Problem 2 - Atbash Cipher
//The Atbash cipher is simple substitution cipher that relies on transposing all the letters in the
//alphabet such that the resulting alphabet is backwards. The first letter is replaced with the last letter
//the second with the second-last and so on.
//An Atbash cipher for the latin alphabet would be as follows:
//Plain : abcdefghijklmnopqrstuvwxyz
//Cipher : zyxwvutsrqpomnlkjihgfedcba

function decryptAtbash(cipherText: string): string {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (let i = 0; i < cipherText.length; i++) {
    const char = cipherText[i].toLowerCase();
    const index = alphabets.indexOf(char);

    if (index !== -1) {
      const reverseAlphabets = alphabets.length - index - 1;
      result += alphabets[reverseAlphabets];
    } else {
      result += char;
    }
  }
  return result;
}

const cipheredText = decryptAtbash("svool dliow! r zn ovzimrmt gbkvhxirkg");
console.log(cipheredText);
