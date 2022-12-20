burger = $('.header__burger');
    body = $('.header__nav');

    burger.on("click", function() {
        body.toggleClass('active');
        $(this).toggleClass('active');
        $("body").toggleClass('no-scroll');
    });