
let current_background = 1;
showBack(m);
// current_back;
function next(){
    showBack(current_background +=1);
}
function back(){
    showBack(current_background -=1);
}
function current_back(m){
    showBack(current_background = m);
}
function showBack(m){
    if(current_background<1){
        current_background=3;
    }
    if(current_background>3){
        current_background=1;
    }
    // alert(current_background);
    if(current_background ==1){
        document.getElementById("block1").style.backgroundImage = "url(img/main/block1/background1.jpg)";
    }
    if(current_background ==2){
        document.getElementById("block1").style.backgroundImage = "url(img/main/block1/background2.jpg)";
    }
    if(current_background ==3){
        document.getElementById("block1").style.backgroundImage = "url(img/main/block1/background3.jpg)";
    }
}
document.getElementsByClassName("")

$(document).ready(function() {
    $("#phone").mask("+7 (999) 99-99-999");

    close = $('.map__content-close');
    close.on("click", function() {
        $('.map__content').addClass('hide');
    });
});