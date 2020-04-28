let time = 3000;
let currentImageIndex = 0;
let images = document.querySelectorAll("#slider img");
let max = images.length;

function nextImage() {
  // no elemento atual remova a classe select
  images[currentImageIndex].classList.remove("selected");

  //faz o incremento na index
  currentImageIndex++;

  // caso chegue ao maximo do indice faca o reset das posicoes
  if(currentImageIndex >= max) {
    currentImageIndex = 0;
  }

  // para cada imagem da nodelist adiciona a classe selected, ou seja fazendo aparecer
  images[currentImageIndex].classList.add("selected");
}

function start() {
  // rodara uma funcao a cada tempo(time) definido
  setInterval(() => {
    // chama a nossa logica para trocar as imagens
    nextImage()  
  }, time)
}



// quando a pagina for carregada o evendo dispara a funcao start
window.addEventListener('load', start())