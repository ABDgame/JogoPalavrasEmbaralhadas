const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),  
inputField = document.querySelector("input"),  
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");

let correctWord, timer;

const initTimer = maxTime => {
  clearInterval(timer);
  timer = setInterval(() => {
    if(maxTime > 0){
        maxTime--; // diminuir maxTime em -1
        return timeText.innerText = maxTime;   
    }
    clearInterval(timer);
    alert(`Faltam! ${correctWord.toUpperCase()} para digitar a palavra`);
    initGame(); // chamando a função initGame, para que o jogo reinicie
  }, 1000); 
}

const initGame = () => {
  initTimer(30); // chamando a função initTimer passando 30 como valor maxTime
  let randomObj = words[Math.floor(Math.random() * words.length)]; // obtendo objeto aleatório de palavras
  let wordArray = randomObj.word.split(""); //dividindo cada letra de palavra aleatória
  for (let i = wordArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); //obtendo número aleatório
      // embaralhando e passando letras do wordArray aleatoriamente
      [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }
  wordText.innerText = wordArray.join(""); // passando palavra embaralhada como texto de palavra
  hintText.innerText = randomObj.hint; // passando dica de objeto aleatório como texto de dica
  correctWord =  randomObj.word.toLowerCase(); // passando palavra aleatória para correctWord
  inputField.value = "";
  inputField.setAttribute("maxlength", correctWord.length); // definindo o valor de atributo maxlength de entrada para o comprimento da palavra 
}
initGame();

const checkWord = () => {
  let userWord = inputField.value.toLocaleLowerCase(); //obtendo valor do usuário
  if(!userWord) return alert("Por favor digite a palavra correta"); //se o usuário não digitou nada
  
  //se a palavra do usuário não corresponder à palavra correta
  if(userWord !== correctWord) return alert(`Ixii! ${userWord} não é a palavra correta`);
  
  //mostra alerta de parabéns porque a palavra do usuário está correta
  alert(`Parabéns ${userWord.toUpperCase()} é a palavra correta`);
  initGame();
}
refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);
