// Personagens JavaScript //

let currentIndex = 0;
const images = document.querySelectorAll('.banner img');

function mostrarImagem(direction) {
    images[currentIndex].classList.remove('active'); // Oculta a imagem atual
    currentIndex = (currentIndex + direction + images.length) % images.length; // Atualiza o índice
    images[currentIndex].classList.add('active'); // Mostra a nova imagem
}

function fecharBanner() {
    document.getElementById('banner').style.display = 'none'; // Oculta o banner
}

// Muda a imagem a cada 3 segundos (opcional)
setInterval(() => mostrarImagem(1), 3000);