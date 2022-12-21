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
    if(selectedEl){
        selectedEl.classList.remove("selected");
    }
    this.classList.add("selected");

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
})