let escolhaJogador = "";
let escolhaMaquina = "";

let pontosJogador = 0;
let pontosMaquina = 0;
let totalEmpates = 0;

const imagemPadrao =
  "https://cdn-icons-png.flaticon.com/512/32/32339.png";

const imagens = {

  pedra:
    "granite.png",

  papel:
    "paper.png",

  tesoura:
    "scissor.png"
};

function jogar(escolha) {

  escolhaJogador = escolha;

  const opcoes = [
    "pedra",
    "papel",
    "tesoura"
  ];

  escolhaMaquina =
    opcoes[Math.floor(Math.random() * 3)];

  document.getElementById("mao1").src =
    imagens[escolhaJogador];

  document.getElementById("mao2").src =
    imagens[escolhaMaquina];

  iniciarAnimacao();
}

function iniciarAnimacao() {

  const mao1 =
    document.getElementById("mao1");

  const mao2 =
    document.getElementById("mao2");

  mao1.classList.add("animar");

  mao2.classList.add("animar");

  setTimeout(() => {

    mao1.classList.remove("animar");

    mao2.classList.remove("animar");

    mostrarResultado();

  }, 2000);
}

function mostrarResultado() {

  const resultado =
    document.getElementById("resultado");

  if (
    escolhaJogador === escolhaMaquina
  ) {

    resultado.innerHTML =
      "🤝 EMPATE!";

    totalEmpates++;
  }

  else if (

    (escolhaJogador === "pedra" &&
      escolhaMaquina === "tesoura") ||

    (escolhaJogador === "papel" &&
      escolhaMaquina === "pedra") ||

    (escolhaJogador === "tesoura" &&
      escolhaMaquina === "papel")

  ) {

    resultado.innerHTML =
      "🏆 VOCÊ VENCEU!";

    pontosJogador++;
  }

  else {

    resultado.innerHTML =
      "🤖 MÁQUINA VENCEU!";

    pontosMaquina++;
  }

  atualizarRanking();
}

function atualizarRanking() {

  document.getElementById(
    "pontosJogador"
  ).innerHTML = pontosJogador;

  document.getElementById(
    "pontosMaquina"
  ).innerHTML = pontosMaquina;

  document.getElementById(
    "empates"
  ).innerHTML = totalEmpates;
}

function reiniciar() {

  pontosJogador = 0;
  pontosMaquina = 0;
  totalEmpates = 0;

  atualizarRanking();

  proximaRodada();
}

function proximaRodada() {

  escolhaJogador = "";
  escolhaMaquina = "";

  document.getElementById(
    "resultado"
  ).innerHTML =
    "Escolha sua jogada!";

  document.getElementById(
    "mao1"
  ).src = imagemPadrao;

  document.getElementById(
    "mao2"
  ).src = imagemPadrao;
}
const botaoVoltar = document.getElementById("btn-voltar");

botaoVoltar.addEventListener("click", () => {
  window.location.href = "../../index.html";
});