$(document).ready(function() {
    /* Слайдер */
    $('.projects__inner').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    centerMode: true,
    variableWidth: true,
    });

    $('.team__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
    });

    /* Попап */

    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function() {
        let $this = $(this);
        let modalId = $(this).data('modal');

        $(modalId).addClass('show');
        $("body").addClass('no-scroll');

        setTimeout(function() {
            $(modalId).find(".modal__dialog").css({
                opacity: "1"
            });
        }, 200);
    });

    modalClose.on("click", function() {
        let $this = $(this);
        let modalParent = $(this).parents('.modal');

        modalParent.find(".modal__dialog").css({
            opacity: "0"
        });

        setTimeout(function() {
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });

    $('.modal').on("click", function() {
        let $this = $(this);
        $this.find(".modal__dialog").css({
            opacity: "0"
        });

        setTimeout(function() {
            $this.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });

    $('.modal__dialog').on("click", function(event) {
        event.stopPropagation();
    });
});