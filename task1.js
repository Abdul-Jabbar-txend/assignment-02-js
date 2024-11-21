function getVowels(givenString) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  return givenString.split(" ").filter((word) => vowels.includes(word[0]));
}
const lowerCase =
  "The journey of life is not defined by the destination, but by the experiences and growth along the way.";
const upperCase =
  "THE JOURNY OF LIFE IS NOT DEFINED BY THE DESTINATION,BUT BY THE EXPERIENCES AND GROWTH ALONG THE WAY";
const result = getVowels(lowerCase);
const result2 = getVowels(upperCase);
console.log(result);
console.log(result2);
