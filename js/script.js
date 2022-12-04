$(document).ready(function(event) {

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

/*     $('#button-1').on('click', function() {
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
    }); */

    $('.certificate__gallery-item').on('click', function() {
        $(this).toggleClass('active');
    });

    /* Fixed Header */

    let header = $('#header');
    let intro = $('#intro');
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function() {

        scrollPos = $(this).scrollTop();

        if(scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });


    hotkeys('Enter', function(event, handler) {
        !$('.current').is(':last-child') && $('.current').removeClass('current').next().addClass('current');
    });

    hotkeys('Left', function(event, handler) {
        !$('.current').is(':first-child') && $('.current').removeClass('current').prev().addClass('current');
    });

    /* Photo */

    const modalCall = $('[data-photo]');
    const modalClose = $('[data-close]');

    modalCall.on("click", function(event) {
        let $this = $(this);
        let modalId = $this.data('photo');

        $(modalId).toggleClass('show');
        $(this).toggleClass('active');
        $('body').addClass('no-scroll');
    });

    modalClose.on("click", function(event) {
        let $this = $(this);
        let modalParent = $this.parents('.photo');

        modalParent.removeClass('show');
        $('body').removeClass('no-scroll');
    });

    $('.photo').on("click", function(event) {
        $(this).removeClass('show');
        $('body').removeClass('no-scroll');
    });

    $('.photo__dialog').on("click", function(event) {
        event.stopPropagation();
        $(this).removeClass('show');
    });

    /* Form */

    const formCall = $('[data-form]');
    const formClose = $('[data-close]');

    formCall.on("click", function(event) {
        let $this = $(this);
        let modalId = $this.data('form');

        $(modalId).toggleClass('show');
        $(this).toggleClass('active');
        $('body').addClass('no-scroll');
    });

    formClose.on("click", function(event) {
        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.removeClass('show');
        $('body').removeClass('no-scroll');
    });

});

$(document).ready(() => {
    $('.kviz__bottom-btn').click(() => !$('.current').is(':last-child') && $('.current').removeClass('current').next().addClass('current'));
    $('.kviz__bottom-arrow').click(() => !$('.current').is(':first-child') && $('.current').removeClass('current').prev().addClass('current'));
});