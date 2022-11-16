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

    $('.card__slider').slick({
        slidesToShow: 1,
        arrows: true,
        dots: true,
        infinite: false
    });

    $('.header__menu').on("click", function() {
        $(this).toggleClass('active');
        $('.header__nav').toggleClass('show');
        $("body").toggleClass('no-scroll');
    });

    $("#phone").mask("+7 (999) 99-99-999");

    $('.mask-date').mask('99.99.9999');
});
