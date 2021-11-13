// CSS
import './css/global.css';
import './css/main.css';

// Icon Library
import feather from 'feather-icons';
import '@fortawesome/fontawesome-free/js/solid.js';
import '@fortawesome/fontawesome-free/js/brands.js';
import '@fortawesome/fontawesome-free/js/fontawesome.js';

// JS

// To replace all data-feather elements with featherIcon svg
feather.replace();

// HTML Elements
const navbar = document.querySelector('.nav-container');

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    console.log('Document is reade...');
    window.onscroll = evt => {
      if (window.scrollY > 0) {
        navbar.classList.add('nav-container-alt');
      } else {
        navbar.classList.remove('nav-container-alt');
      }
    };
  }
};
