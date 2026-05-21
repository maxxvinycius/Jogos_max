let numeroSecreto = Math.floor(Math.random() * 100) + 1;

let tentativas = 0;

function verificarNumero() {

  const input = document.getElementById("palpite");

  const mensagem = document.getElementById("mensagem");

  const tentativasTexto = document.getElementById("tentativas");

  let palpite = Number(input.value);

  if (!palpite || palpite < 1 || palpite > 100) {

    mensagem.innerHTML =
      "⚠ Digite um número entre 1 e 100!";

    mensagem.style.color = "red";

    return;
  }

  tentativas++;

  tentativasTexto.innerHTML =
    `Tentativas: ${tentativas}`;

  if (palpite === numeroSecreto) {

    mensagem.innerHTML =
      `🎉 PARABÉNS! Você acertou o número ${numeroSecreto}!`;

    mensagem.style.color = "#00ff99";

  }

  else if (palpite < numeroSecreto) {

    mensagem.innerHTML =
      "📉 O número secreto é MAIOR!";

    mensagem.style.color = "orange";
  }

  else {

    mensagem.innerHTML =
      "📈 O número secreto é MENOR!";

    mensagem.style.color = "orange";
  }

  input.value = "";

  input.focus();
}

function reiniciarJogo() {

  numeroSecreto =
    Math.floor(Math.random() * 100) + 1;

  tentativas = 0;

  document.getElementById("mensagem").innerHTML = "";

  document.getElementById("tentativas").innerHTML =
    "Tentativas: 0";

  document.getElementById("palpite").value = "";
}
const botaoVoltar = document.getElementById("btn-voltar");

botaoVoltar.addEventListener("click", () => {
  window.location.href = "../../index.html";
});