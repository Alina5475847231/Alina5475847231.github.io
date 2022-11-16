$(document).ready(function() {
    $('.intro__main').slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.catalog__slide').slick({
        slidesToShow: 1,
        arrows: true,
        dots: false,
        infinite: false
    });
});
