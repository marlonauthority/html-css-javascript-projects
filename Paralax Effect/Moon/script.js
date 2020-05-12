// Vamos pegar os elementos pelo ID
let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("text");


function eScroll() {
  var valueScrollY = window.scrollY;
  // Faz o background rolar mais devagar em relacao aos outros
  bg.style.top = valueScrollY * 0.5 + 'px';
  // Faz a  lua ir para esquerda
  moon.style.left = -valueScrollY * 0.5 + 'px';
  // Faz a monta emergir diante da estrada
  mountain.style.top = -valueScrollY * 0.15 + 'px';
  // Faz a rodovia subir
  road.style.top = valueScrollY * 0.15 + 'px';
  // Faz o texto sumir diante da rodovia (z-index: 2) no css
  text.style.top = valueScrollY * 1 + 'px';
}

// Criar o evento
window.addEventListener('scroll', eScroll);