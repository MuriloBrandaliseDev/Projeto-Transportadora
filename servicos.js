document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.1 }); 

    document.querySelectorAll('.servico img').forEach(img => {
        observer.observe(img);
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.1 }); 

    document.querySelectorAll('.servico img, .texto-servico, .texto-servico-esquerda').forEach(element => {
        observer.observe(element);
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('meuVideo');

    video.addEventListener('click', function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});



// Exibe o botão quando o usuário desce 200px da parte superior da página
window.onscroll = function() {
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
  document.getElementById('backToTop').addEventListener('click', function() {
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