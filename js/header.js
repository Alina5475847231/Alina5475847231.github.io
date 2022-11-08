$(document).ready(function() {
    let header = $('#header');
    let headerMod = $('#header-mobile');
    let intro = $('#intro');
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function() {
        scrollPos = $(this).scrollTop();

        if (scrollPos > introH) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }

        if (scrollPos > introH) {
            headerMod.addClass('fixed');
        } else {
            headerMod.removeClass('fixed');
        }
    });

    /* Scroll */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top;

        $("html, body").animate({
            scrollTop: elementOffset - 150
        }, 2000);

        burger.removeClass('active');
        menu.removeClass('active');
        $("body").removeClass('no-scroll');
    });

    let burger = $('.header__menu');
    let menu = $('.header__mobile');

    burger.on("click", function() {
        menu.toggleClass('active');
        $(this).toggleClass('active');
        $("body").toggleClass('no-scroll');
    });
});