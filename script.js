let currentIndex = 0; // Controla a imagem que está sendo exibida
const images = document.querySelectorAll('.carousel-image');
const carousel = document.querySelector('.carousel');
const totalImages = images.length;

function changeImage() {
    // Move as imagens para a esquerda
    currentIndex = (currentIndex + 1) % totalImages; // Controla o índice das imagens
    carousel.style.transform = `translateY(-${currentIndex * 100}%)`; // Faz a transição para a próxima imagem
}

// Muda a imagem a cada 5 segundos
setInterval(changeImage, 5000);

function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000);
}

setInterval(createHeart, 300);

