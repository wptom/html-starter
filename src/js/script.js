// ***********************************************************
// Testimonials
// ***********************************************************
let testimonialsSlider = tns({
    container: '.testimonials-slider',
    controls: true,
    controlsPosition: 'bottom',
    controlsContainer: '#customize-controls',
    nav: false,
    navAsThumbnails: false,
    items: 1,
    slideBy: 'page',
    center: true,
    mouseDrag: true,
    autoplay: false
});

// ***********************************************************
// Navigation
// ***********************************************************
let headerNavigation = document.querySelector('nav');

document.querySelector('.nav-hamburger')
    .addEventListener('click', function() {
        console.log('clicked');
        headerNavigation.classList.toggle('header-nav--visible');
    });

// ***********************************************************
// Accordion
// ***********************************************************

let acc = document.getElementsByClassName('js-accordion-title');

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
        this.classList.toggle('accordion__titlea--active');
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });
}
