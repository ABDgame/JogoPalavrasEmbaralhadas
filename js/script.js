const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time"),  
inputField = document.querySelector("input"),  
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");

let correctWord, timer;

const initTimer = maxTime => {
  clearInterval(timer);
  timer = setInterval(() => {
    if(maxTime > 0){
        maxTime--; // decrement maxTime by -1
        return timeText.innerText = maxTime;   
    }
    clearInterval(timer);
    alert('Faltam! $(userWord.toUpperCase()) para digitar a palavra');
    initGame(); // calling initGame function, so the game restart
  }, 1000);
  
}

const initGame = () => {
  initTimer(30); // calling initTimer function with passing 30 as maxTime value
  let randomObj = words[Math.floor(Math.random() * words.length)]; // getting random object from words
  let wordArray = randomObj.word.split(""); //splitting each letter of random word
  for (let i = wordArray.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); //getting random number
      // shuffling and swiping wordArray letters randomly
      [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }
  wordText.innerText = wordArray.join(""); // passing shuffled word as word text
  hintText.innerText = randomObj.hint; // passing random object hint as hint text
  correctWord =  randomObj.word.toLowerCase(); //passing random word to correctWord
  inputField.value = "";
  inputField.setAttribute("maxlength", correctWord.length); // setting input maxlength attr value to word length 
  
}
initGame();

const checkWord = () => {
  let userWord = inputField.value.toLocaleLowerCase(); //getting user value
  if(!userWord) return alert('Por favor digite a palavra correta'); //if user didn't enter anything
  
  //if user word doesn't matched with the correct word
  if(userWord !== correctWord) return alert('Não $(userWord)é a palavra correta');
  
  //if above two if conditions are falled then show congrats alert because user word is correct
  alert('Parabéns $(userWord.toUpperCase())é a palavra correta');
  initGame();
}
refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);
