(function($){
    $(document).ready(function(){
        $('#image_carousel').owlCarousel({
            loop: true,
            margin: 24,
            nav: false,
            dots: false,
            autoWidth: true,
            center:true,
            startPosition: 2,
        });

        $('#testimonial_carousel').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            items: 1,
            navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M6 12L7.4 10.55L3.85 7H16V5H3.85L7.4 1.45L6 0L0 6L6 12Z" fill="#5E7E33"></svg>','<svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M10 12L8.6 10.55L12.15 7H0V5H12.15L8.6 1.45L10 0L16 6L10 12Z" fill="#5E7E33"></svg>'],
        });

    });
}(jQuery));