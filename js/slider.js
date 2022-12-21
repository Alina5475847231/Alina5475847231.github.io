/* let dots = document.getElementsByClassName('slider__dots-item'),
    dotsArea = document.getElementsByClassName('slider__dots')[0],
    slides = document.getElementsByClassName('slider__item'),
    prevBtn = document.getElementById('slider__left'),
    nextBtn = document.getElementById('slider__right'),
    slideIndex = 1;

showSlides(slideIndex);

function showSlides (n) {
    if (n < 1) {
        slideIndex = slides.length;
    } else if (n > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');
}

function plusSlides (n) {
    showSlides(slideIndex +=n);
}

function currentSlide (n) {
    showSlides(slideIndex = n);
}

prevBtn.onclick = function() {
    plusSlides(-1);
}

nextBtn.onclick = function() {
    plusSlides(1);
}

dotsArea.onclick = function(e) {
    for (let i = 0; i < dots.length + 1; i++) {
        if (e.target.classList.contains('slider__dots-item') && e.target == dots[i - 1]) {
            currentSlide(i);
        }
    }
} */

/* ------------------------------------ */

/* const slider = document.querySelector('.like__slider');
const container = document.querySelector('.like__inner-subcatalog');
const slids = document.querySelectorAll('.like__col');
const navigations = document.querySelectorAll('.like__nav');

let activeOrder = 0;

init();

function init() {
    for (let i = 0; i < slids.length; i++) {
        const slide = slids[i]

        slide.dataset.order = i;
    };

    activeOrder = Marh.floor(slids.length / 2);

    update();
}

function update() {

} */

 /* const item = document.querySelector('.like__col'); */
/*     let position = 0;
    const slidesToShow = 5.5;
    const slidesToScroll = 2;
    const container = document.querySelector('.like__slider');
    const track = document.querySelector('.like__inner')
    const btnPrev = document.querySelector('.btn-prev');
    const btnNext = document.querySelector('.btn-next');
    const items = document.querySelectorAll('.like__col')
    const itemsCount = items.length;
    const itemWidth = container.clientWidth / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    items.forEach((item) => {
        item.style.minWidth = `${itemWidth}px`;
    });

    btnNext.addEventListener('click', () => {
        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
        
        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkBtns();

        btnPrev.classList.add('active');
    });

    btnPrev.addEventListener('click', () => {
        const itemsLeft = Math.abs(position) / itemWidth;

        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkBtns();
    });

    const setPosition = () => {
        track.style.transform = `translateX(${position}px)`;
    };

    const checkBtns = () => {
        btnPrev.disabled = position === 0;
        btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
    };

    checkBtns(); */

$(document).ready(function() {
    $('.like__inner-subcatalog').slick( {
        slidesToShow: 3,
        variableWidth: true,
        slidesToScroll: 6,
        infinite: false
    });

    $('.slider__body').slick( {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: false,

        responsive: [
            {
              breakpoint: 954,
              settings: {
                arrows: false
              }
            }
          ]
    });
}); 