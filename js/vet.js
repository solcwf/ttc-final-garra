'use strict';

/**
 * Navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

// Verifica se todos os elementos foram encontrados no DOM
if (navOpenBtn && navbar && navCloseBtn) {
  // Array de elementos para adicionar o evento de clique
  const navElemArr = [navOpenBtn, navCloseBtn];

  // Adiciona o evento de clique para abrir ou fechar a navegação
  navElemArr.forEach(function (elem) {
    elem.addEventListener("click", function () {
      navbar.classList.toggle("active");
    });
  });
} else {
  console.error("Um dos elementos não foi encontrado no DOM.");
}


/**
 * toggle navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
  });
}





/**
 * header active when window scrolled down
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 50 ? header.classList.add("active")
    : header.classList.remove("active");
});


//agendar consulta ]
document.addEventListener('DOMContentLoaded', function() {
  const btnAgendarConsulta = document.getElementById('btnAgendarConsulta');

  btnAgendarConsulta.addEventListener('click', function() {
    const telefone = '+5511941383505';
    const linkTelefone = 'tel:' + telefone;
    window.location.href = linkTelefone;
  });
});

document.addEventListener("DOMContentLoaded", function() {
    // Array que armazena todas as imagens que devem ser pré-carregadas
    var images = [
        "imagem1.jpg",
        "imagem2.jpg"
        // Adicione mais imagens conforme necessário
    ];

    // Contador para acompanhar quantas imagens já foram carregadas
    var imagesLoaded = 0;

    // Função para verificar se todas as imagens foram carregadas
    function checkImagesLoaded() {
        imagesLoaded++;
        if (imagesLoaded === images.length) {
            // Todas as imagens foram carregadas, então mostra o conteúdo da página
            document.getElementById("content").style.display = "block";
        }
    }

    // Loop através das imagens e pré-carregá-las
    for (var i = 0; i < images.length; i++) {
        var img = new Image();
        img.onload = checkImagesLoaded;
        img.src = images[i];
    }
});