$(document).ready(function() {
    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");
    
    modalCall.on("click", function(event) {
        let $this = $(this);
        let modalId = $this.data('modal');
    
        $(modalId).addClass('show');
        $("body").addClass('no-scroll');
    });
    
    modalClose.on("click", function(event) {
        let $this = $(this);
        let modalParent = $this.parents('.modal');
    
        modalParent.removeClass('show');
        $("body").removeClass('no-scroll');
    });

    $('.modal').on("click", function(event) {
        $(this).removeClass('show');
        $("body").removeClass('no-scroll');
    });

    $('.modal__dialog').on("click", function(event) {
        event.stopPropagation();
    });

    $("#phone").mask("+7 (999) 99-99-999");

    burger = $('.header__burger');
    menu = $('.nav__inner');

    burger.on("click", function() {
        $(this).toggleClass('active');
        menu.toggleClass('show');
        $("body").toggleClass('no-scroll');
    });
});