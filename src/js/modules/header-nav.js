class HeaderNav {
    constructor() {
        this.initEvents();
    }

    initEvents() {
        let headerNavigation = document.querySelector('nav');

        document.querySelector('.nav-hamburger')
            .addEventListener('click', function() {
                headerNavigation.classList.toggle('header-nav--visible');
            });

        document.querySelectorAll('.header-nav__list__item__link').forEach(item => {
            item.addEventListener('click', function() {
                headerNavigation.classList.remove('header-nav--visible');

                document.querySelectorAll('.header-nav__list__item__link').forEach(item => {
                    item.parentNode.classList.remove('header-nav__list__item--active');
                });
                item.parentNode.classList.add('header-nav__list__item--active');
            });
        })
    }
}

export default HeaderNav;
