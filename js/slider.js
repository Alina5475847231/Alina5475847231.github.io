$(document).ready(function() {
    $('.docs__inner').slick({
        slidesToShow: 4,
        infinite: true,
        autoplay: true,
        variableWidth: true,
        autoplaySpeed: 2000,

        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                arrows: false
              }
            },
        
        ]
    });

    $('.partners__inner').slick({
        slidesToShow: 2,
        infinite: true,
        autoplay: true,
        variableWidth: true,
        autoplaySpeed: 2000,
        dots: true,
    });

    $('.reviews__inner').slick({
        slidesToShow: 2,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true,

        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                arrows: false
              }
            },
        
        ]
    });
});