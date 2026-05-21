document.addEventListener("DOMContentLoaded", () => {


  const buttons = document.querySelectorAll(".btn");
  const status = document.getElementById("ranking");
  const startBtn = document.getElementById("startBtn");
  const resetBtn = document.getElementById("resetBtn");


  const colors = ["green", "red", "yellow", "blue"];


  let sequence = [];
  let playerSequence = [];
  let canClick = false;
  let level = 0;


  let bestScore =
    Number(localStorage.getItem("bestScore")) || 0;




  /* ========= SOM ========= */


  const sounds = {


    green: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),


    red: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),


    yellow: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),


    blue: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")


  };




  /* ========= FUNÇÃO STATUS ========= */


  function updateStatus(text) {
    status.innerHTML = `${text}<br>Recorde: ${bestScore}`;
  }


  updateStatus("Placar");




  /* ========= INICIAR ========= */


  startBtn.addEventListener("click", startGame);


  resetBtn.addEventListener("click", resetGame);




  function startGame() {


    sequence = [];
    playerSequence = [];
    level = 0;


    nextRound();


  }




  /* ========= RESET ========= */


  function resetGame() {


    sequence = [];
    playerSequence = [];
    level = 0;
    canClick = false;


    updateStatus("Resetado");


  }




  /* ========= NOVA RODADA ========= */


  function nextRound() {


    playerSequence = [];
    level++;


    updateStatus("Rodada: " + level);


    const randomColor =
      colors[Math.floor(Math.random() * colors.length)];


    sequence.push(randomColor);


    showSequence();


  }




  /* ========= MOSTRAR SEQUÊNCIA ========= */


  function showSequence() {


    canClick = false;


    let i = 0;


    const interval = setInterval(() => {


      const color = sequence[i];


      const btn =
        document.querySelector(`[data-color="${color}"]`);


      btn.classList.add("active");


      sounds[color].currentTime = 0;
      sounds[color].play();


      setTimeout(() => {
        btn.classList.remove("active");
      }, 400);


      i++;


      if (i >= sequence.length) {


        clearInterval(interval);


        setTimeout(() => {
          canClick = true;
        }, 500);


      }


    }, 700);


  }




  /* ========= CLIQUES ========= */


  buttons.forEach(btn => {


    btn.addEventListener("click", () => {


      if (!canClick) return;


      const color = btn.dataset.color;


      playerSequence.push(color);


      btn.classList.add("active");


      sounds[color].currentTime = 0;
      sounds[color].play();


      setTimeout(() => {
        btn.classList.remove("active");
      }, 200);


      checkAnswer();


    });


  });




  /* ========= CHECAR ========= */


  function checkAnswer() {


    const index = playerSequence.length - 1;


    if (playerSequence[index] !== sequence[index]) {


      gameOver();


      return;


    }


    if (playerSequence.length === sequence.length) {


      canClick = false;


      setTimeout(nextRound, 1000);


    }


  }




  


  function gameOver() {


    canClick = false;


    if (level > bestScore) {


      bestScore = level;


      localStorage.setItem("bestScore", bestScore);


    }


    updateStatus(
      "VOCÊ PERDEU!<br>Pontuação: " + level
    );


  }


});
const botaoVoltar = document.getElementById("btn-voltar");

botaoVoltar.addEventListener("click", () => {
  window.location.href = "../../index.html";
});