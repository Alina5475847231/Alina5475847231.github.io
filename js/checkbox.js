$(document).ready(function() {

    /* Чекбоксы */

    $.each($('.page__content-checkbox'), function(index, val) {
        if($(this).find('input').prop("checked")==true){
            $(this).addClass('active');
        }
    });

    $(document).on("click", '.page__content-checkbox', function(event) {
        if($(this).hasClass('active')){
            $(this).find('input').prop("checked", false);
        }else{
            $(this).find('input').prop("checked", true);
        }
        $(this).toggleClass('active');

        return false;
    });

    /* Радиокнопки */

    $.each($('.page__content-radio-btn'), function(index, val) {
        if($(this).find('input').prop('checked')==true) {
            $(this).addClass('active');
        }
    });

    $(document).on("click", '.page__content-radio-btn', function(event) {
        $(this).parents('.page__content-radio').find('.page__content-radio-btn').removeClass('active');
        $(this).parents('.page__content-radio').find('.page__content-radio-btn input').prop('checked', false);
        $(this).toggleClass('active');
        $(this).find('input').prop('checked', true);
        return false;
    });
});