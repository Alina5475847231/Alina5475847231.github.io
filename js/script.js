$(document).ready(function() {
    $('.menu__head').click(function(event) {
        if($('.menu').hasClass('one')) {
            $('.menu__head').not($(this)).removeClass('active');
            $('.menu__submenu').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});