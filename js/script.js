$(document).ready(function() {
    burger = $('.header__burger');
    menu = $('.header__nav');

    burger.on("click", function() {
        menu.toggleClass('show');
        $(this).toggleClass('active');
    });
});