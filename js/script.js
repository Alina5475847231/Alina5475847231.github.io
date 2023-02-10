$.each($('.form__checkbox-body'), function(index, val) {
    if($(this).find('input').prop("checked")==true){
        $(this).addClass('active');
    }
});

$(document).on("click", '.form__checkbox-body', function(event) {
    if($(this).hasClass('active')){
        $(this).find('input').prop("checked", false);
    }else{
        $(this).find('input').prop("checked", true);
    }
    $(this).toggleClass('active');

    return false;
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

function textAreaAdjust(element) {
    element.style.height = "1px";
    element.style.height = (5+element.scrollHeight)+"px";
}

$(document).ready(function() {
    $('.slider').slick();
})