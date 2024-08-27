const slides = document.querySelectorAll('.carousel-item');
let currentSlide = 0;

document.getElementById('nextBtn').addEventListener('click', () => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
  updateCarouselPosition();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  updateCarouselPosition();
});

function updateCarouselPosition() {
  const offset = -currentSlide * 100;
  document.querySelector('.carousel-slides').style.transform = `translateX(${offset}%)`;
}



// Exibe o botão quando o usuário desce 200px da parte superior da página
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const backToTopButton = document.getElementById("backToTop");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

// Faz a rolagem suave até o topo ao clicar no botão
document.getElementById('backToTop').addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});




let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', () => {
  menu.classList.add('abrir-menu1')
});

menu.addEventListener('click', () => {
  menu.classList.remove('abrir-menu1')
});

overlay.addEventListener('click', () => {
  menu.classList.remove('abrir-menu1')
});