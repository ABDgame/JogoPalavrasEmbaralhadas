const wordText = document.querySelector(".word");

const initGame = () = > {
  let randomObj = words[Math.floor(Math.random() * words.length)]; // getting random object from words
  let wordArray = randomObj.word.split(""); //splitting each letter of random word
  for (let i = wordArray.length -1; i > 0; i--){
      let j = Math.floor(Math.random() * (i + 1)); //getting random number
      // shuffling and swiping wordArray letters randomly
      [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }
  console.log(wordArray, randomObj.word);
}
initGame();
