// Seleciona a tela inicial (splash)
const splash = document.getElementById("splash");

// Fecha a tela inicial ao clicar
splash.addEventListener("click", () => {
  splash.classList.add("fade-out");

  setTimeout(() => {
    splash.style.display = "none";
  }, 600);
});

// Seleciona todos os botões dentro do card
const botoes = document.querySelectorAll("#card button");

// JOGO DA MEMÓRIA
botoes[0].addEventListener("click", () => {
  window.location.href = "./menu/JogoMemoria/index.html";
});

// JOGO DA VELHA
botoes[1].addEventListener("click", () => {
  window.location.href = "./menu/JogoVelha/index.html";
});

// ADIVINHAÇÃO
botoes[2].addEventListener("click", () => {
  window.location.href = "./menu/JogoAdivinhacao/index.html";
});

// JOKENPÔ
botoes[3].addEventListener("click", () => {
  window.location.href = "./menu/JogoJokempo/index.html";
});
