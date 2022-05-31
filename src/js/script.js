import HeaderNav from './modules/header-nav.js';
import Accordion from './modules/accordion.js';
import Testimonials from './modules/testimonials.js';

window.addEventListener('load', () => {
    new HeaderNav();
    new Accordion();
    new Testimonials();
});
