'use strict';

/**
 * add event on element
 */
const addEventOnElem = function (elem, type, callback) {
  if (elem instanceof NodeList) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

document.getElementById('userButton').addEventListener('click', function() {
  window.location.href = '../garra-master/loginregistro.html';
});

//toggler

const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

// Função para alternar o estado do navbar (abrir/fechar)
const toggleNavbar = function () {
 navbar.classList.toggle("active");
 navToggler.classList.toggle("active");
}

// Adiciona evento de clique ao toggler do navbar
navToggler.addEventListener("click", toggleNavbar);

// Função para fechar o navbar quando um link é clicado
const closeNavbar = function () {
 navbar.classList.remove("active");
 navToggler.classList.remove("active");
}

// Adiciona evento de clique para fechar o navbar para cada link do menu
navbarLinks.forEach(function(link) {
 link.addEventListener("click", closeNavbar);
});


/**
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);
