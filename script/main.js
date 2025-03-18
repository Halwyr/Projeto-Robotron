function mostrarPopup(mensagem) {
  document.getElementById('popup-message').innerHTML = mensagem;

  const popup = document.getElementById('popup');
  const overlay = document.getElementById('overlay');

  popup.classList.add('show');
  overlay.classList.add('show');
};

function fecharPopup() {
  const popup = document.getElementById('popup');
  const overlay = document.getElementById('overlay');

  popup.classList.remove('show');
  overlay.classList.remove('show');
};

const robotron = document.querySelector('#Robotron');
const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');
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
};

controle.forEach((elemento) => {
  elemento.addEventListener('click', (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode, evento.target.dataset.peca);
  })
});

function manipulaDados(operacao, controle, peca) {
  const contador = controle.querySelector('[data-contador]');
  let valorAtual = parseInt(contador.value);

  if (operacao === '-' && valorAtual > 0) {
    contador.value = valorAtual - 1;
    atualizaEstatisticas(peca, -1);
  } else if (operacao === '+') {
    contador.value = valorAtual + 1;
    atualizaEstatisticas(peca, 1);
  }
};

function atualizaEstatisticas(peca, operacao) {
    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + (pecas[peca][elemento.dataset.estatistica] * operacao);
    });
};

robotron.addEventListener('click', dizOi);

function dizOi() {
  mostrarPopup(
    'Olá,<br>Devo me fortalecer para a invasão que está prestes a começar.<br>Vamos fazer alguns upgrades para nos prepararmos para o combate.'
  );
};
