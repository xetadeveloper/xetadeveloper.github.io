// CSS
import '../css/home.css';

// JS
const introHeader = document.querySelector('.intro-header');
const introText = document.querySelector('.intro-text');
const devTitle = document.querySelector('.dev-title');
const devStack = document.querySelector('.dev-stack');
const ctaHolder = document.querySelector('.cta-holder');
const introStack = document.querySelector('.intro-stack');

const fadeElem = [
  introHeader,
  introText,
  devTitle,
  introStack,
  devStack,
  ctaHolder,
];

console.log('In consleo');

function fadeIn(elem, delay) {
  console.log('Delay: ', delay);
  setTimeout(() => {
    console.log('Adding element');
    elem.classList.add('show');
  }, delay);
}   

window.addEventListener('load', () => {
  for (let delay = 2000, index = 0; index < fadeElem.length; index++) {
    if (index === 0) {
      fadeIn(fadeElem[index], 500);
    } else {
      fadeIn(fadeElem[index], delay);
      delay += 1000;
    }
  }
});
