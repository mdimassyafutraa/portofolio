// Humberger
const humberger = document.querySelector('#humberger');
const navMenu = document.querySelector('#nav-menu');

humberger.addEventListener('click', function () {
  humberger.classList.toggle('humberger-active');
  navMenu.classList.toggle('hidden');
});

document.addEventListener('click', function (event) {
  if (!navMenu.contains(event.target) && event.target !== humberger) {
    humberger.classList.remove('humberger-active');
    navMenu.classList.add('hidden');
  }
});

// Nav
window.addEventListener('scroll', function () {
  var nav = document.querySelector('nav');

  if (nav) {
    // Periksa apakah elemen ditemukan
    if (window.scrollY > 100) {
      nav.classList.add('navbar-fixed');
    } else {
      nav.classList.remove('navbar-fixed');
    }
  }
});

// scroll
$(document).ready(function () {
  // Add smooth scrolling to all links
  $('a').on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
