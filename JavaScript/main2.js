const carousel = document.querySelector('.carousel-clients');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let offset = 0;

prevBtn.addEventListener('click', () => {
    if (offset > 0) {
        offset -= 1;
    } else {
        offset = carousel.children.length - 5; // Assume que são mostrados 5 logos ao mesmo tempo
    }
    carousel.style.transform = `translateX(-${offset * 170}px)`; // Ajuste para o tamanho do seu logo
});

nextBtn.addEventListener('click', () => {
    if (offset < carousel.children.length - 3) {
        offset += 1;
    } else {
        offset = 0;
    }
    carousel.style.transform = `translateX(-${offset * 170}px)`;
});



