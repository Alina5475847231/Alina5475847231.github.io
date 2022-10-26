let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);
currentSlide(n);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide(){
    showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide(){
    showSlides(slideIndex -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
    // n = showSlides(slideIndex);
}

/* Функция перелистывания: */
function showSlides(n) {
    let slidese =  event.currentTarget.parentNode.children;
    let slides = [];
    for (i=0; i<slidese.length-2; ++i)
    {
        slides.push(slidese[i]);
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "block";
        slide.style.width = "15.25%";
        slide.style.height = "14.26%";
        slide.style.order = "4";
    }
    /* Делаем элемент блочным: */
    if(slideIndex<=7){
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-1].style.width = "100%";
    slides[slideIndex-1].style.height = "100%";
    slides[slideIndex-1].style.marginBottom = "10px";
    slides[slideIndex-1].style.order = "-3";
        }
        else{
    slideIndex = 1;
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-1].style.width = "100%";
    slides[slideIndex-1].style.height = "100%";
    slides[slideIndex-1].style.marginBottom = "10px";
    slides[slideIndex-1].style.order = "-3";
        }
}
function show() {
    let current_block = event.currentTarget.nextSibling.nextSibling;
    let current_collection = event.currentTarget;
    current_collection.style.display = "none";
    current_block.style.display = "flex";
    current_block.style.transition = "display 5s";
}
function returned(){
    let current_leave = event.currentTarget;
    current_leave.previousSibling.previousSibling.style.display = "flex";
    current_leave.style.display = "none";
}
