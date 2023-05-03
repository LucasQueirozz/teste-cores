let placarJogo = prompt("digite aqui o placar do jogo do vasco")

alert(placarJogo)


const button = document.getElementById('button');
const colors = ['red', 'black', 'white'];
function change() {
  document.body.style.background = colors[Math.floor(7 * Math.random())];
}
button.addEventListener('click', change);