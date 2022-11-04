$(document).ready(function() {
    $('.reviews__inner').slick({
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $("#phone").mask("+7 (999) 99-99-999");
    
    $("input#email").inputmask({
        mask: "*{3,20}@*{3,20}.*{2,7}",
        greedy: false,
        clearMaskOnLostFocus: false
    });
});