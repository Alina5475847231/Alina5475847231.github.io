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

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true
                }
            },
        ]
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

    /* Бриф */

    const formCall = $("[data-form]");
    const formClose = $("[data-close]");

    formCall.on("click", function() {
        let $this = $(this);
        let formId = $(this).data('form');

        $(formId).addClass('show');
        $("body").addClass('no-scroll');

        console.log(formId);
    });

    formClose.on("click", function() {
        let $this = $(this);
        let formParent = $this.parents('.form');

        formParent.removeClass('show');
        $("body").removeClass('no-scroll');
    });

    /* Радиокнопки */

    $.each($('.form__radiobutton'), function(index, val) {
        if($(this).find('input').prop('checked')==true) {
            $(this).addClass('active');
        }
    });

    $(document).on("click", '.form__radiobutton', function(event) {
        $(this).parents('.form__radiobuttons').find('.form__radiobutton').removeClass('active');
        $(this).parents('.form__radiobuttons').find('.form__radiobutton input').prop('checked', false);
        $(this).toggleClass('active');
        $(this).find('input').prop('checked', true);
        return false;
    });

    /* Бургер */

    burger = $('.header__burger');
    body = $('.header__mobile');

    burger.on("click", function() {
        body.toggleClass('active');
        $(this).toggleClass('active');
        $("body").toggleClass('no-scroll');
    });

    /* Фиксированная шапка */

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

    /* Скролл */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        console.log(elementOffset);

        $("html, body").animate({
            scrollTop: elementOffset - 100
        }, 1000);
    });
});

/* Анимация */

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if(animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if(animItem.classList.contains('._anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
}