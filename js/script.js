$(document).ready(function() {
  /* Выезжающий сайдбар */

  $('.burger__sidebar').on("click", function() {
    $(this).toggleClass('active');
    $('.sidebar').toggleClass('show');
  });
});