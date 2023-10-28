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

// Typing
document.addEventListener('DOMContentLoaded', function () {
  const headingElement = document.getElementById('typing-heading');
  const subheadingElement = document.getElementById('typing-subheading');
  const paragraphElement = document.getElementById('typing-paragraph');
  const text = 'I am a student majoring in D3 Informatics Engineering at Amikom University Yogyakarta. Currently, I am doing an internship at UPT Balai Yasa Lahat.';
  const buttonElement = document.getElementById('typing-button');

  function typeText(text, element, index, speed, callback) {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      setTimeout(function () {
        typeText(text, element, index + 1, speed, callback);
      }, speed);
    } else {
      if (callback) {
        callback();
      }
    }
  }

  function animateHeading() {
    headingElement.style.opacity = 1;
    headingElement.style.transform = 'translateY(0)';
    // Set a delay for the subheading animation
    setTimeout(animateSubheading, 1000);
  }

  function animateSubheading() {
    subheadingElement.style.opacity = 1;
    subheadingElement.style.transform = 'translateY(0)';
    // Set a delay for the paragraph animation
    setTimeout(function () {
      typeText(text, paragraphElement, 0, 50, animateButton);
      animateParagraph();
    }, 1000);
  }

  function animateParagraph() {
    paragraphElement.style.opacity = 1;
    paragraphElement.style.transform = 'translateY(0)';
  }

  function animateButton() {
    buttonElement.style.opacity = 1;
    buttonElement.style.transform = 'translateY(0)';
  }

  // Hide elements initially
  headingElement.style.opacity = 0;
  headingElement.style.transform = 'translateY(20px)';
  subheadingElement.style.opacity = 0;
  subheadingElement.style.transform = 'translateY(20px)';
  paragraphElement.style.opacity = 0;
  paragraphElement.style.transform = 'translateY(20px)';
  buttonElement.style.opacity = 0;
  buttonElement.style.transform = 'translateY(20px)';

  // Start animations with a delay
  setTimeout(animateHeading, 1000);
});

// Botton Top

// Fungsi untuk menunjukkan atau menyembunyikan tombol scroll to top berdasarkan posisi scroll
function toggleScrollTopButton() {
  const scrollTopButton = document.getElementById('scrollTopButton');
  if (window.scrollY > 300) {
    scrollTopButton.classList.add('active');
  } else {
    scrollTopButton.classList.remove('active');
  }
}

// Fungsi untuk menggulir halaman ke atas saat tombol scroll to top diklik
function scrollToTop() {
  const scrollDuration = 1000; // Durasi pengguliran dalam milidetik
  const scrollStep = -window.scrollY / (scrollDuration / 15);

  const scrollInterval = setInterval(function () {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}

// Event listener untuk tombol scroll to top
document.getElementById('scrollTopButton').addEventListener('click', scrollToTop);

// Event listener untuk mengonfirmasi perilaku tombol saat menggulir
window.addEventListener('scroll', toggleScrollTopButton);

// Cek link Aktif
// Fungsi untuk menentukan apakah tautan harus aktif atau tidak
function setActiveLink() {
  var menuItems = document.querySelectorAll('#nav-menu a');
  menuItems.forEach(function (item) {
    var targetId = item.getAttribute('href').substring(1);
    var targetElement = document.getElementById(targetId);

    if (targetElement && isElementInViewport(targetElement)) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// Fungsi untuk mengecek apakah elemen berada di dalam viewport
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}

// Panggil setActiveLink saat halaman dimuat dan saat jendela di-scroll
window.addEventListener('load', setActiveLink);
window.addEventListener('scroll', setActiveLink);
