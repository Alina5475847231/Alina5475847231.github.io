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

let headerW = $('#headerW');
  let header = $('#header');
  let headerHeight;
  let scrollPos = $(window).scrollTop();

  $(window).on("scroll resize load", function() {
    headerHeight = header.innerHeight();
    scrollPos = $(this).scrollTop();

    checkScroll(scrollPos, headerHeight);
  });

  function checkScroll(scrollPos, headerHeight) {
    if (scrollPos > headerHeight) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
  }

  $(window).on("scroll resize load", function() {
    headerH = headerW.innerHeight();
    scrollPos = $(this).scrollTop();

    checkScroll(scrollPos, headerH);
  });

  function checkScroll(scrollPos, headerH) {
    if (scrollPos > headerH) {
      headerW.addClass('fix');
    } else {
      headerW.removeClass('fix');
    }
  }