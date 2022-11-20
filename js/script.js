$(document).ready(function() {
  /* Sliders */

    $('.intro').slick({
        slidesToShow: 1,
        arrows: false,
        dots: true
    });

    $('.card__slide-bg').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.card__slide'
  });

    $('.card__slide').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.card__slide-bg',
      arrows: true,
      focusOnSelect: true
  });

  $('.banner__close').on("click", function() {
    $('.banner').addClass('hide');
  });

  $('input.deletable').wrap('<span class="deleteicon"></span>').after($('<span>x</span>').click(function() {
    $(this).prev('input').val('').trigger('change').focus();
  }));

   $('#product').on("click", function(event) {
    event.preventDefault();
    $('#subnav').addClass('active');
    $('.nav__link').addClass('gray');
    $('.social__item').addClass('gray');
    $('.header__pers-item').addClass('gray');
    $(".nav__link-green").addClass('green');
  });  


  /* Product Close */

$('.product__close').on('click', function(event) {
  event.preventDefault();
  $('#subnav').removeClass('active');
  $('.nav__link').removeClass('gray');
  $('.social__item').removeClass('gray');
  $('.header__pers-item').removeClass('gray');
  $(".nav__link-green").removeClass('green');
});

  $('#header-search').on("click", function(event) {
    event.preventDefault();
    $('.header__poisk').toggleClass('active');
  });

  $('#header-search-mob').on("click", function(event) {
    event.preventDefault();
    $('.header__poisk').addClass('active');
  });

  $('.header__poisk-close').on("click", function(event) {
    event.preventDefault();
    $('.header__poisk').removeClass('active');
  });

  $('#back').on("click", function(event) {
    event.preventDefault();
    $('.header__product').removeClass('show');
    $('.header__mob-icons').removeClass('hide');
    burger.removeClass('hide');
    $('.header__menu-close').removeClass('show');
  });

  $('.nav-product').on("click", function(event) {
    event.preventDefault();
    $('.header__product').addClass('show');
    $('.header__mob-icons').addClass('hide');
    burger.addClass('hide');
    $('.header__menu-close').addClass('show');
  });

  /* Links' animate */

    $("a").each(function () {
      if ($(this).attr('href') === window.location.pathname) {
          $(this).css('color', '#000');
      }
  });

  /* Burger-menu */

    let burger = $('.header__burger');
    let menu = $('.header__body-mob');

        burger.on("click", function() {
            $(this).toggleClass('active');
            $('.header__search').addClass('active');
            $("body").toggleClass('no-scroll');
            $('.header__search').toggleClass('active');
            menu.toggleClass('active');
    });

    $('.header__menu-close').on("click", function() {
      $('.header__product').removeClass('show');
      $('.header__mob-icons').removeClass('hide');;
      burger.removeClass('hide');
      $(this).removeClass('show');
});

    /* Radiobutton */

    $.each($('.form__radiobutton'), function(index, val) {
      if($(this).find('input').prop('checked')==true) {
          $(this).addClass('active');
      }
  });

  $(document).on("click", '.form__radiobutton', function(event) {
      $(this).parents('.form__radiobuttons').find('.form__radiobutton').removeClass('active');
      $(this).parents('.form__radiobuttons').find('.form__radiobutton input').prop('checked', false);
      $(this).toggleClass('active');
      $(this).find('input').prop('checked', true);
      return false;
  });

  /* Modal windows */

  modalButton = $("[data-modal]");
  modalWindow = $("#popup");
  modalClose = $("[data-close]")

  modalButton.on("click", function() {
      modalWindow.addClass('active');
      $("body, html").addClass('no-scroll');
      $('#subnav').removeClass('active');
      $('.nav__link').removeClass('gray');
      $('.social__item').removeClass('gray');
      $('.header__pers-item').removeClass('gray');
      $(".nav__link-green").removeClass('green');
  });

  modalClose.on("click", function() {
      modalWindow.removeClass('active');
      $("body, html").removeClass('no-scroll');
  });


  /* Filters */

  let filter = $("[data-filter]");
  let body = $(".search__inner");

  filter.on("click", function(event) {
      event.preventDefault();

      let cat = $(this).data('filter');

      if (cat == 'all') {
          $('[data-cat]').removeClass("hide");
      } else {
          $("[data-cat]").each(function() {

              let workCat = $(this).data("cat");
  
              if (workCat != cat) {
                  $(this).addClass('hide');
              } else {
                  $(this).removeClass('hide');
              }
  
          });
      }
  });

  /* Fix header */

  let header = $('#header');
  let headerW = $('#headerW');
  let headerH;
  let productH;
  let headerHW;
  let scrollPos = $(window).scrollTop;
  let scrollPosW = $(window).scrollTop;

  $(window).on("scroll load resize", function() {
      let headerH = header.innerHeight();

      scrollPos = $(this).scrollTop();

      if(scrollPos > headerH) {
          header.addClass("fixed");
      } else {
          header.removeClass("fixed");
      }
  });

  $(window).on("scroll load resize", function() {
    let headerHW = headerW.innerHeight();

    scrollPosW = $(this).scrollTop();

    if(scrollPosW > headerHW) {
        headerW.addClass("fix");
    } else {
        headerW.removeClass("fix");
    }
});

$(window).on("scroll load resize", function() {
  let productH = $('#productFixed').innerHeight();

  scrollPos = $(this).scrollTop();

  if(scrollPos > productrH) {
    $('#productFixed').addClass("fixed");
  } else {
    $('#productFixed').removeClass("fixed");
  }
});

  /* Dropdown-menu */

  $('.btn').on('click', function(event) {
    event.preventDefault();
    $('.projects-list').toggleClass('show');
  });
  $('.projects-list__link').on('click', function() {
    $('.projects-list').toggleClass('show');
  });

  /* Scroll */

  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let elementId = $(this).data("scroll");
    let elementOffset = $(elementId).offset().top;

    $("html, body").animate({
        scrollTop: elementOffset - 1
    });

    $('#product').on('click', function(event) {
      event.preventDefault();
      $('.product__subnav').toggleClass('active');
    });

});

/* --------------------------------------- */

$('document').ready(function() {
  $('#button').on('click', function() {
    $('.form_box .rfield').each(function() {
      if ($(this).val() != '') {
        console.log(32);
        // Если поле не пустое удаляем класс-указание
        $(this).removeClass('empty_field');
      } else {
        console.log(33);
        // Если поле пустое добавляем класс-указание
        $(this).addClass('empty_field');
      }
    });
  });
});

});

/* Modal window */

modalClick = $("[data-register]");
modalWin = $("#register");
modalClose = $("[data-close]")

modalClick.on("click", function() {
  modalWin.addClass('active');
    $("body, html").addClass('no-scroll');
    modalWindow.removeClass('active');
});

modalClose.on("click", function() {
    modalWin.removeClass('active');
    $("body, html").removeClass('no-scroll');
});

/* ------------------------------ */

$("[data-tab]").on("click", function() {
  $("#thanks").addClass('active');
    $("body, html").addClass('no-scroll');
    modalWin.removeClass('active');
});

modalClose.on("click", function() {
  $("#thanks").removeClass('active');
    $("body, html").removeClass('no-scroll');
});

/* Add files */

try{
  var el=document.getElementById('msgText').getElementsByTagName('a');
  var url=document.location.href;
  for(var i=0;i<el.length; i++){
  if (url==el[i].href){
  el[i].className += ' act';
  };
  };
  }catch(e){}

  function uploadFile(target) {
    document.getElementById("file-name").innerHTML = target.files[0].name;
}

/* Checkboxes */

$(document).ready(function() {
  $.each($('.contact__form-checkbox'), function(index, val) {
      if($(this).find('input').prop("checked")==true){
          $(this).addClass('active');
      }
  });

  $(document).on("click", '.contact__form-checkbox', function(event) {
      if($(this).hasClass('active')){
          $(this).find('input').prop("checked", false);
      }else{
          $(this).find('input').prop("checked", true);
      }
      $(this).toggleClass('active');

      return false;
  });
});

function highlightCurrent() {
  const curPage = document.URL;
  const links = document.getElementsByTagName('a');
  for (let link of links) {
    if (link.href == curPage) {
      link.classList.add("current");
    }
  }
}


document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    highlightCurrent()
  }
};

$(document).ready(function() {
  $('ul#my-menu ul').each(function(index) {
  $(this).prev().addClass('collapsible').click(function() {
  if ($(this).next().css('display') == 'none') {
  $(this).next().slideDown(200, function () {
  $(this).prev().removeClass('collapsed').addClass('expanded');
  });
  }else {
  $(this).next().slideUp(200, function () {
  $(this).prev().removeClass('expanded').addClass('collapsed');
  $(this).find('ul').each(function() {
  $(this).hide().prev().removeClass('expanded').addClass('collapsed');
  });
  });
  }
  return false;
  });
  });
  });

  const dropdown = new bootstrap.Dropdown(element, {
    popperConfig(defaultBsPopperConfig) {
      // const newPopperConfig = {...}
      // use defaultBsPopperConfig if needed...
      // return newPopperConfig
    }
  })

/* */

$(".btn").mouseup(function(e){
  e.preventDefault();
});

$(document).ready(function() {
    $.each($('.modal__checkbox'), function(index, val) {
        if($(this).find('input').prop('chekced')==true) {
            $(this).addClass('active');
        }
    });

    $(document).on('click', '.modal__checkbox', function(event) {
        if($(this).hasClass('active')) {
            $(this).find('input').prop('checked', false);
        }else{
            $(this).find('input').prop('checked', true);
        }

        $(this).toggleClass('active')

        return false;
    });
});

/* --------------------------------------- */

$(".button").click(function() {
  $('.toggled_block').toggle();
});
$(document).on('click', function(e) {
  if (!$(e.target).closest(".parent_block").length) {
    $('.toggled_block').hide();
  }
  e.stopPropagation();
});