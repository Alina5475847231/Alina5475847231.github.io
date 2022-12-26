document.querySelectorAll('.card__element-dropdown').forEach(function(dropDownWrapper) {

    const dropDownBtn = dropDownWrapper.querySelector('.card__element-button');
    const dropDownList = dropDownWrapper.querySelector('.card__element-body');
    const dropDownListItems = dropDownList.querySelectorAll('.card__element-body-item');
    
    dropDownBtn.addEventListener('click', function() {
        dropDownList.classList.toggle('card__element-body--visible');
        this.classList.toggle('card__element-button--active');
    });
    
    dropDownListItems.forEach(function(listItem) {
        listItem.addEventListener('click', function(e) {
            e.stopPropagation();
            dropDownBtn.innerText = this.innerText;
            dropDownBtn.focus();
            dropDownList.classList.remove('card__element-body--visible');
            document.querySelector('.card__element-body-item').classList.toggle('card__element-body--active');
            document.querySelector('.card__element-button').classList.remove('card__element-button--active');
        });
    });
    
    document.addEventListener('click', function(e) {
        if (e.target !== dropDownBtn) {
            dropDownList.classList.remove('card__element-body--visible');
            dropDownBtn.classList.remove('card__element-button--active');
        }
    });
});