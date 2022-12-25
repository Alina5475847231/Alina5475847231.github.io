document.querySelector('.header__data-item-btn').addEventListener('click', function() {
    document.querySelector('.header__cab').classList.toggle('header__cab--visible');
    this.classList.toggle('header__data-item-btn--active');
});

var x = document.getElementsByClassName('page__content-color')
for (var i = 0; i < x.length; i++) {
    x[i].addEventListener("click", function(){

    var selectedEl = document.querySelector(".selected");
    if(selectedEl){
        selectedEl.classList.remove("selected");
    }
    this.classList.add("selected");

    }, false);;
}

var filter = document.getElementsByClassName('buy__top-name')
for (var i = 0; i < filter.length; i++) {
    filter[i].addEventListener("click", function(){

    var selectedEl = document.querySelector(".selected");
    this.classList.toggle("selected");
    if(selectedEl){
        selectedEl.classList.remove("selected");
    }

    }, false);;
}

var menu = document.getElementsByClassName('navigation__item')
for (var i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", function(){

    var selectedEl = document.querySelector(".selected");
    this.classList.toggle("selected");
    if(selectedEl){
        selectedEl.classList.remove("selected");
    }

    }, false);;
}

var dropdown = document.getElementsByClassName('card__element-body-item')
for (var i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function(){

    var selectedEl = document.querySelector(".selected");
    this.classList.toggle("selected");
    if(selectedEl){
        selectedEl.classList.remove("selected");
    }

    }, false);;
}

var slider = document.getElementsByClassName('card__right-card')
for (var i = 0; i < slider.length; i++) {
    slider[i].addEventListener("click", function(){

    var selectedEl = document.querySelector(".selected");
    if(selectedEl){
        selectedEl.classList.remove("selected");
    }
    this.classList.add("selected");

    }, false);;
}

var sliderMin = document.getElementsByClassName('card__left-min-item')
for (var i = 0; i < sliderMin.length; i++) {
    sliderMin[i].addEventListener("click", function(){

    var selectedEl = document.querySelector(".active");
    if(selectedEl){
        selectedEl.classList.remove("active");
    }
    this.classList.add("active");

    }, false);;
}

$(document).ready(function() {
    let buyMin = $('.buyMin');
    let buyBig = $('.buyBig');

    buyMin.on('click', function() {
        $('.buy__inner-min').addClass('active');
        $('.buy__inner-big').removeClass('active');
        $(this).addClass('active');
        buyBig.removeClass('active');
    });

    buyBig.on('click', function() {
        $('.buy__inner-big').addClass('active');
        $('.buy__inner-min').removeClass('active');
        $(this).addClass('active');
        buyMin.removeClass('active');
    });

    /* ------------------------------------ */

    $('.buy__top-name').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('active');
    })

    /* ------------------------------------ */

    $('#first').on('click', function() {
        modal.removeClass('show');
    });

    /* ------------------------------------- */

    $('.modal__close-arrow').on('click', function() {
        $('.modal').addClass('hide');
    });

    $('.modal__mobile-title').on('click', function(){
        $(this).closest('.modal__mobile').removeClass('modal__mobile--visible');
    });

    /* ---------------------------------- */

    const modalCall = $("[data-filter]");

    modalCall.on("click", function(event) {
        event.preventDefault();
        let $this = $(this);
        let modalId = $this.data('filter');

        $(modalId).slideToggle();
        $(this).toggleClass('active');
    });

    /* ------------------------------------------- */

    $('.reviews__mob-button').on('click', function() {
        $('.card__product').addClass('hide');
        $('.card__reviews').addClass('show');
        $('.header').addClass('hide');
    });

    $('.card__reviews-header-arrow').on('click', function() {
        $('.card__product').removeClass('hide');
        $('.card__reviews').removeClass('show');
        $('.header').removeClass('hide');
        $(modalId).slideToggle().stop();
    });
});

const swiper = new Swiper('.card__left-photos-mob-body', {
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass +'"> </span>' + '/' + '<span class="' + totalClass +'"> </span>'
        }
    },

    slidesPerView: 1.5,
    centeredSlides: true,
    slidesPerGroup: 1,
    paginationClickable: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },

        555: {
            slidesPerView: 1.5,
        }
    },
});