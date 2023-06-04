$(document).ready(function() {

    /* Бургер */

    let burger = $('.header__menu');
    let menu = $('.header__nav');

    burger.on('click', function() {
        menu.toggleClass('show');
        $(this).toggleClass('active');
    });

    let header = $('#header');
    let headerH;
    let scrollPos = $(window).scrollTop;

    $(window).on("scroll load resize", function() {
        let headerH = header.innerHeight();

        scrollPos = $(this).scrollTop();

        if(scrollPos > headerH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });

    $('.minimized').click(function(event) {
        var i_path = $(this).attr('src');
        $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
        $('#overlay, #magnify').fadeIn('fast');
        $('body').addClass('no-scroll');
      });
      
      $('body').on('click', '#close-popup, #overlay', function(event) {
        event.preventDefault();
        $('body').removeClass('no-scroll');
    
        $('#overlay, #magnify').fadeOut('fast', function() {
          $('#close-popup, #magnify, #overlay').remove();
        });
      });

    /* Свайп */

    const slider = document.querySelector('.scroll');
    let isDown = false;
    let startX;
    let scrollLeft;
    if (slider) {
        slider.addEventListener('mousedown', (e)=>{
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        }
        );
        slider.addEventListener('mouseleave', ()=>{
            isDown = false;
            slider.classList.remove('active');
        }
        );
        slider.addEventListener('mouseup', ()=>{
            isDown = false;
            slider.classList.remove('active');
        }
        );
        slider.addEventListener('mousemove', (e)=>{
            if (!isDown)
                return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 3;
            //scroll-fast
            slider.scrollLeft = scrollLeft - walk;
            console.log(walk);
        }
        );
    }
});

/* Табы */

let tab = function () {
    let tabNav = document.querySelectorAll('.tab');
    let tabContent = document.querySelectorAll('.content');
    let tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav(event) {
        event.preventDefault();
        tabNav.forEach(item=> {
            item.classList.remove('active');
        });
        this.classList.add('active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName)? item.classList.add('active'): item.classList.remove('active');
        });
    }
};

tab();