$(document).ready(function() {
    let burger = $('.header__menu');
    let menu = $('.header__mobile');

    burger.on("click", function() {
        menu.toggleClass('active');
        $(this).toggleClass('active');
        $("body").toggleClass('no-scroll');
    });
});