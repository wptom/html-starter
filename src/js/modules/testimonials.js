class Testimonials {
    constructor() {
        this.initEvents();
    }

    initEvents() {
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
    }
}

export default Testimonials;
