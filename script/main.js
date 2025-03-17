function mostrarPopup(mensagem) {
  document.getElementById("popup-message").innerHTML = mensagem;

  const popup = document.getElementById("popup");
  const overlay = document.getElementById("overlay");

  popup.classList.add("show");
  overlay.classList.add("show");
}

function fecharPopup() {
  const popup = document.getElementById("popup");
  const overlay = document.getElementById("overlay");

  popup.classList.remove("show");
  overlay.classList.remove("show");
}

const robotron = document.querySelector("#Robotron");
const controles = document.querySelectorAll("[data-controle]");

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controles.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
  });
});

function manipulaDados(operacao, controle) {
  const pecaRobo = controle.querySelector("[data-contador]");

  if (operacao === "-") {
    pecaRobo.value--;
  } else {
    pecaRobo.value++;
  }
}

function dizOi() {
  mostrarPopup(
    "Olá,<br>Devo me fortalecer para a invasão que está prestes a começar.<br>Vamos fazer alguns upgrades para nos prepararmos para o combate."
  );
}

robotron.addEventListener("click", dizOi);
