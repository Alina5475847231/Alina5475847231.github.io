function outputUpdate(vol) {
    var output = document.querySelector('#volume');
    output.value = vol;
    output.style.left = vol - 20 + 'px';

    if(output.value > 9) {
        output.style.left = vol - 30 + 'px';
    }

    if(output.value > 99) {
        output.style.left = vol - 40 + 'px';
    }

    if(output.value > 240) {
        output.style.left = vol - 45 + 'px';
    }

    if(output.value > 430) {
        output.style.left = vol - 50 + 'px';
    }
}

document.querySelector('.order__form-select').addEventListener('click', function() {
    document.querySelector('.order__form-body').classList.toggle('order__form-body--visible');
    this.classList.add('order__form-select--active');
});

document.querySelectorAll('.order__form-body-item').forEach(function(listItem) {
    listItem.addEventListener('click', function(e) {
        e.stopPropagation();
        document.querySelector('.order__form-select').innerHTML = this.innerHTML;
        document.querySelector('.order__form-select').focus();
        document.querySelector('.order__form-body').classList.remove('order__form-body--visible');
        document.querySelector('.order__form-body-item').classList.toggle('order__form-body--active');
        document.querySelector('.order__form-select').classList.remove('order__form-select--active');
    });
});

document.addEventListener('click', function(e) {
    if (e.target !== document.querySelector('.order__form-select')) {
        document.querySelector('.order__form-body').classList.remove('order__form-body--visible');
        document.querySelector('.order__form-select').classList.remove('order__form-select--active');
    }
})