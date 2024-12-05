let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function changeSlide() {
    items.forEach(item => item.classList.remove('active'));
    currentIndex = (currentIndex + 1) % totalItems;
    items[currentIndex].classList.add('active');
}

setInterval(changeSlide, 2000);  // Cambiar cada 3 segundos
