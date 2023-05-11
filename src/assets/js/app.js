import $ from "jquery";
import "slick-carousel";

$(document).ready(function() {

    /* Главнаый слайдер */

    $('.intro__slider').slick({
        slideToShow: 1,
        dots: true,

        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false
                }
            }
          ]
    });

    /* Каталог-меню */

    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function() {
        let $this = $(this);
        $this.toggleClass('active');
        let modalId = $(this).data('modal');

        $(modalId).toggleClass('active');

        setTimeout(function() {
            $(modalId).find(".catalog__container").css({
                opacity: "1"
            });
        }, 0);
    });

    modalClose.on("click", function() {
        let $this = $(this);
        let modalParent = $(this).parents('.catalog');

        modalParent.removeClass('active');
    });

    $('.catalog').on("click", function() {
        let $this = $(this);
        $this.find(".catalog__container").css({
            opacity: "0"
        });

        modalCall.removeClass('active');

        setTimeout(function() {
            $this.removeClass('active');
        }, 0);
    });

    $('.catalog__container').on("click", function(event) {
        event.stopPropagation();
    });

    /* Мобильный каталог */

    $('.catalog__link').on('click', function() {
        $(this).next().css({
            display: "block"
        });

        $('body').toggleClass('no-scroll');
    });

    $('.subnav__back').on('click', function() {
        $('.catalog__link').next().css({
            display: "none"
        });
    });

    $('#catalog').on('click', function() {
        $('body').toggleClass('no-scroll');
    });
});