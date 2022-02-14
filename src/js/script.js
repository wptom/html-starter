// ***********************************************************
// Navigation
// ***********************************************************
let headerNavigation = document.querySelector('nav');

document.querySelector('.nav-hamburger')
    .addEventListener('click', function() {
        console.log('clicked');
        headerNavigation.classList.toggle('nav--visible');
    });
