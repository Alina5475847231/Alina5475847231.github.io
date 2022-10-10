$(document).ready(function() {
    $('.cost__inner').slick( {
        slidesToShow: 4,
        variableWidth: true,
        autoplay: true,

        responsive: [
            {
                breakpoint: 1241,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });

    $('.programm__inner').slick({
        centerMode: true,
        dots: true,
    });

    $('.telegramm__inner').slick({
        centerMode: true,
        dots: true,
    });

    $(".questions__item-title").on("click", function() {
        $(this).toggleClass('active').next().slideToggle(300);
    });

    $.each($(".radiobattons__item"), function(index, val) {
        if($(this).find('input').prop('checked')==true) {
            $(this).addClass('active');
        }
    });

    $(document).on("click", ".radiobattons__item", function (event) {
        $(this).parents('.radiobattons').find('.radiobattons__item').removeClass('active');
        $(this).parents('.radiobattons').find('.radiobattons__item input').prop('checked', false);
        $(this).toggleClass('active');
        $(this).find('input').prop('checked', true);
        return false;
    });
});