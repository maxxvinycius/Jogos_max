const celulas = document.querySelectorAll(".celula");
const resetBtn = document.getElementById("reset");

let jogadorAtual = "X";
let jogoAtivo = true;

const combinacoes = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

celulas.forEach(celula => {
  celula.addEventListener("click", () => {
    if (!jogoAtivo || celula.textContent !== "") return;

    celula.textContent = jogadorAtual;

    verificarVitoria();

    jogadorAtual = jogadorAtual === "X" ? "O" : "X";
  });
});

function verificarVitoria() {
  combinacoes.forEach(comb => {
    const [a,b,c] = comb;

    if (
      celulas[a].textContent &&
      celulas[a].textContent === celulas[b].textContent &&
      celulas[a].textContent === celulas[c].textContent
    ) {
      alert("Jogador " + celulas[a].textContent + " venceu!");
      jogoAtivo = false;
    }
  });
}

resetBtn.addEventListener("click", () => {
  celulas.forEach(c => c.textContent = "");
  jogadorAtual = "X";
  jogoAtivo = true;
});
const botaoVoltar = document.getElementById("btn-voltar");

botaoVoltar.addEventListener("click", () => {
  window.location.href = "../../index.html";
});