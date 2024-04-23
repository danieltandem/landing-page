/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
const boton = document.getElementById("boton");
const audio = document.getElementById("audio");

boton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        boton.classList.remove("boton-pausar");
        boton.classList.add("boton-reproducir");
    } else {
        audio.pause();
        boton.classList.add("boton-pausar");
        boton.classList.remove("boton-reproducir");
    }
});

const toggleModeButton = document.getElementById("toggle-mode");

toggleModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  // Opcional: guarda la preferencia del usuario en localStorage
});
const cambiarImagenButton = document.getElementById("toggle-mode");
const imagen1 = document.getElementById("imagen1");
const imagen2 = document.getElementById("imagen2");

cambiarImagenButton.addEventListener("click", () => {
  if (imagen1.style.display === "none") {
    imagen1.style.display = "block";
    imagen2.style.display = "none";
  } else {
    imagen1.style.display = "none";
    imagen2.style.display = "block";
  }
});
window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      document.body.classList.add('scrolled');
    } else {
      document.body.classList.remove('scrolled');
    }
  });
