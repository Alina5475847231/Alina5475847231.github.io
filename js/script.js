$(document).ready(function() {

    /* Бургер */

    burger = $('.header__burger');
    menu = $('.header__nav');

    burger.on("click load resize", function() {
        menu.toggleClass('show');
        $(this).toggleClass('active');
        $('body').toggleClass('no-scroll');
    });

    /* Фиксрованная шапка */

    let header = $('#header');
    let intro = $('#intro');
    let introH;
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if(scrollPos > introH) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    });

    /* SMOOTH SCROLL */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        $("html, body").animate({
            scrollTop: elementOffset - 150
        }, 2000);

        menu.removeClass('show');
        $('body').removeClass('no-scroll');
        burger.removeClass('active');
    });

    /* Модальное окно */

    let close = $('.modal__close')

    $("[data-modal]").on("click", function(event) {
        event.preventDefault();

        $('#modal').addClass('show');
        $('body').addClass('no-scroll');

    });

    close.on("click", function() {
        $('#modal').removeClass('show');
        $('body').removeClass('no-scroll')
    });

    $('#modal').on('click', function() {
        $('#modal').removeClass('show');
        $('body').removeClass('no-scroll')
    });

    $('.modal__dialog').on("click", function(event) {
        event.stopPropagation();
    })

    /* Показать ещё */

    $(".btn-show").on("click", function(event) {
        $('.hide').toggleClass('show');
    });
});

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