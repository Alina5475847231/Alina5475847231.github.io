$(document).ready(function() {

    $.each($('.contact__form-checkbox'), function(index, val) {
        if($(this).find('input').prop("checked")==true){
            $(this).addClass('active');
        }
    });

    $(document).on("click", '.contact__form-checkbox', function(event) {
        if($(this).hasClass('active')){
            $(this).find('input').prop("checked", false);
        }else{
            $(this).find('input').prop("checked", true);
        }
        $(this).toggleClass('active');

        return false;
    });

    $.each($('.kviz__form-item'), function(index, val) {
        if($(this).find('input').prop('chekced')==true) {
            $(this).addClass('active');
        }
    });

    $(document).on('click', '.kviz__form-item', function(event) {
        $(this).parents('.kviz__form').find('.kviz__form-item').removeClass('active');
        $(this).parents('.kviz__form').find('.kviz__form-item input').prop('checked', false);
        $(this).toggleClass('active');
        $(this).find('input').prop('checked', true);
        return false;
    });

    $('#button-1').on('click', function() {
        $('#quiz-1').removeClass('active');
        $('#quiz-2').addClass('active');
    });

    $('#button-2').on('click', function() {
        $('#quiz-2').removeClass('active');
        $('#quiz-3').addClass('active');
    });

    $('#button-3').on('click', function() {
        $('#quiz-3').removeClass('active');
        $('#quiz-4').addClass('active');
    });

    $('#button-4').on('click', function() {
        $('#quiz-4').removeClass('active');
        $('#quiz-5').addClass('active');
    });

    $('#button-5').on('click', function() {
        $('#quiz-5').removeClass('active');
        $('#quiz-6').addClass('active');
    });

    $('#back-2').on('click', function() {
        $('#quiz-1').addClass('active');
        $('#quiz-2').removeClass('active');
    });

    $('#back-3').on('click', function() {
        $('#quiz-2').addClass('active');
        $('#quiz-3').removeClass('active');
    });

    $('#back-4').on('click', function() {
        $('#quiz-3').addClass('active');
        $('#quiz-4').removeClass('active');
    });

    $('#back-5').on('click', function() {
        $('#quiz-4').addClass('active');
        $('#quiz-5').removeClass('active');
    });
});