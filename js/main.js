$(document).ready(function () {
  var animating = false
  var cardsCounter = 0
  var numOfCards = 6
  var decisionVal = 90
  var pullDeltaX = 0
  var deg = 0
  var card
  var like
  var dislike

  $('.human__events-item-next').on('click', function () {
    if ($(this).hasClass('disable')) {
      return
    } else {
      card = $(this).closest('.buddy')
      pullChange()
      releaseButtons('left')
      $('.human__events-item-next').addClass('disable')
    }
  })

  $('.human__events-item-like').on('click', function () {
    if ($(this).hasClass('disable')) {
      return
    } else {
      card = $(this).closest('.buddy')
      pullChange()
      releaseButtons('right')
      $('.human__events-item-like').addClass('disable')
    }
  })

  function pullChange() {
    animating = true
    deg = pullDeltaX / 20
    card.css('transform', 'translateX(' + pullDeltaX + 'px) rotate(' + deg + 'deg)')

    var opacity = pullDeltaX / 100
    var rejectOpacity = opacity >= 0 ? 0 : Math.abs(opacity)
    var likeOpacity = opacity <= 0 ? 0 : opacity
    dislike.css('opacity', rejectOpacity)
    like.css('opacity', likeOpacity)
  }

  function pullChange2() {
    animating = true
    deg = pullDeltaX / 20
    card.css('transform', 'translateX(' + pullDeltaX + 'px) rotate(' + deg + 'deg)')

    var opacity = pullDeltaX / 100
    var rejectOpacity = opacity >= 0 ? 0 : Math.abs(opacity)
    var likeOpacity = opacity <= 0 ? 0 : opacity
    dislike.css('opacity', rejectOpacity)
    like.css('opacity', likeOpacity)
  }

  function releaseButtons(direction) {
    card.addClass(direction)

    if (direction === 'left') {
      dislike.css('opacity', 1)
    } else if (direction === 'right') {
      like.css('opacity', 1)
    }

    setTimeout(() => {
      dislike.css('opacity', 0)
      like.css('opacity', 0)
    }, 300)

    setTimeout(() => {
      $('.human__events-item-next').removeClass('disable')
      $('.human__events-item-like').removeClass('disable')
    }, 800)

    setTimeout(() => {
      card.addClass('inactive')

      setTimeout(function () {
        card.addClass('below').removeClass('inactive left right')
        cardsCounter++
        if (cardsCounter > 0) {
          $('.buddy.buddy-search').addClass('visible')
        } else {
          $('.buddy.buddy-search').removeClass('visible')
        }
        if (cardsCounter === numOfCards) {
          $('.buddy.buddy-search').removeClass('below')
          cardsCounter = 0
        }
      }, 100)
    }, 100)

    // if (Math.abs(pullDeltaX) < decisionVal) {
    // 	card.addClass('reset')
    // }

    card.addClass('reset')

    setTimeout(function () {
      card.attr('style', '').removeClass('reset').find('.human__like, .human__dislike').attr('style', '')

      pullDeltaX = 0
      animating = false
    }, 100)
  }

  function releaseTouch() {
    if (pullDeltaX >= decisionVal) {
      card.addClass('right')
    } else if (pullDeltaX <= -decisionVal) {
      card.addClass('left')
    }

    if (Math.abs(pullDeltaX) >= decisionVal) {
      card.addClass('inactive')

      setTimeout(function () {
        card.addClass('below').removeClass('inactive left right')
        cardsCounter++
        if (cardsCounter === numOfCards) {
          cardsCounter = 0
          $('.buddy').removeClass('below')
        }
      }, 100)
    }

    if (Math.abs(pullDeltaX) < decisionVal) {
      card.addClass('reset')
    }

    card.addClass('reset')

    setTimeout(function () {
      card.attr('style', '').removeClass('reset').find('.human__like, .human__dislike').attr('style', '')

      pullDeltaX = 0
      animating = false
    }, 100)
  }

  $(document).on('mousedown touchstart', '.buddy:not(.inactive)', function (e) {
    if (animating) return

    card = $(this)
    dislike = $('.human__dislike', card)
    like = $('.human__like', card)
    var startX = e.pageX || e.originalEvent.touches[0].pageX

    $(document).on('mousemove touchmove', function (e) {
      if (card.hasClass('buddy-search')) {
        return false
      } else {
        var x = e.pageX || e.originalEvent.touches[0].pageX
        pullDeltaX = x - startX
        if (pullDeltaX > 35) {
          if (!pullDeltaX) return
          pullChange()
        }
        if (pullDeltaX < -35) {
          if (!pullDeltaX) return
          pullChange2()
        }
      }
    })

    $(document).on('mouseup touchend', function () {
      $(document).off('mousemove touchmove mouseup touchend')
      if (!pullDeltaX) return
      releaseTouch()
    })
  })

  $('.human__events-item-next').click(function () {
    $(this).parent().parent().parent().parent().parent().trigger('swipeleft')
  })

  $('.saidbar__drop-pol').click(function () {
    $('.saidbar__drop-pol').removeClass('active')
    let input = $(this).find('input')
    if (input.is(':checked')) {
      $(this).addClass('active')
    } else {
      $(this).removeClass('active')
    }
  })

  $('.saidbar__drop-photo').click(function () {
    let input = $(this).find('input')
    if (input.is(':checked')) {
      $(this).addClass('active')
    } else {
      $(this).removeClass('active')
    }
  })

  $('.js-range-slider-1').ionRangeSlider({
    type: 'double',
    min: 18,
    max: 65,
    from: 18,
    to: 30,
    onStart: function (data) {
      $('#range-from').html(data.from)
      $('#range-to').html(data.to)
    },
    onChange: function (data) {
      $('#range-from').html(data.from)
      $('#range-to').html(data.to)
    },
  })

  $('.js-range-slider-2').ionRangeSlider({
    from: 34,
    max: 200,
    onStart: function (data) {
      $('#range-km').html(data.from)
    },
    onChange: function (data) {
      $('#range-km').html(data.from)
    },
  })

  $('.js-range-slider-3').ionRangeSlider({
    type: 'double',
    min: 18,
    max: 65,
    from: 18,
    to: 30,
    onStart: function (data) {
      $('#range-from-2').html(data.from)
      $('#range-to-2').html(data.to)
    },
    onChange: function (data) {
      $('#range-from-2').html(data.from)
      $('#range-to-2').html(data.to)
    },
  })

  $('.js-range-slider-4').ionRangeSlider({
    from: 34,
    max: 200,
    onStart: function (data) {
      $('#range-km-2').html(data.from)
    },
    onChange: function (data) {
      $('#range-km-2').html(data.from)
    },
  })

  $('.js-range-slider-5').ionRangeSlider({
    type: 'double',
    min: 18,
    max: 65,
    from: 18,
    to: 30,
    onStart: function (data) {
      $('#range-from-3').html(data.from)
      $('#range-to-3').html(data.to)
    },
    onChange: function (data) {
      $('#range-from-3').html(data.from)
      $('#range-to-3').html(data.to)
    },
  })

  $('.js-range-slider-6').ionRangeSlider({
    from: 34,
    max: 200,
    onStart: function (data) {
      $('#range-km-3').html(data.from)
    },
    onChange: function (data) {
      $('#range-km-3').html(data.from)
    },
  })

  $('.js-range-slider-7').ionRangeSlider({
    from: 170,
    min: 100,
    max: 250,
    onStart: function (data) {
      $('#range-rost').html(data.from)
    },
    onChange: function (data) {
      $('#range-rost').html(data.from)
    },
  })

  $('.js-range-slider-8').ionRangeSlider({
    from: 170,
    min: 100,
    max: 250,
    onStart: function (data) {
      $('#range-modal').html(data.from)
    },
    onChange: function (data) {
      $('#range-modal').html(data.from)
    },
  })

  $('.saidbar__nav-filter').click(function () {
    $(this).toggleClass('active')
    if ($(this).hasClass('active')) {
      $('.saidbar__drop').fadeIn(300)
    } else {
      $('.saidbar__drop').fadeOut(300)
    }
  })

  $('.saidbar__drop-btn.apply').click(function () {
    $('.saidbar__drop').fadeOut(300)
    $('.search__header-drop').fadeOut(300)
    $('.search__header-filter--item').removeClass('active')
    $('.saidbar__nav-filter').removeClass('active')
    $('body').removeClass('mobile-fix')
  })

  $('.search__header-filter--item').click(function () {
    $(this).toggleClass('active')
    if ($(this).hasClass('active')) {
      $('.search__header-drop').fadeIn(300)
      $('body').addClass('mobile-fix')
    } else {
      $('.search__header-drop').fadeOut(300)
      $('body').removeClass('mobile-fix')
    }
  })

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.saidbar__nav-filter, .saidbar__drop').length) {
      $('.saidbar__nav-filter').removeClass('active')
      $('.saidbar__drop').fadeOut(300)
    }
    e.stopPropagation()
  })

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.search__header-filter--item, .search__header-drop').length) {
      $('.search__header-filter--item').removeClass('active')
      $('.search__header-drop').fadeOut(300)
      $('body').removeClass('mobile-fix')
    }
    e.stopPropagation()
  })

  $('.header__burger').click(function () {
    $('.drop-menu').addClass('active')
    $('body').addClass('fixed')
  })

  $('.drop-menu__strong').click(function () {
    $('.drop-menu').removeClass('active')
    $('body').removeClass('fixed')
  })

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.drop-menu, .header__burger').length) {
      $('.drop-menu').removeClass('active')
      $('body').removeClass('fixed')
    }
    e.stopPropagation()
  })

  $('.t-dropdown-input').on('click', function () {
    $(this).parent().toggleClass('active')
    $(this).parent().next().slideToggle('fast')
    $(this).toggleClass('active')
    $(this).parent().next().find('span').hide()
  })

  $('.t-dropdown-input').width($('.t-dropdown-select').width() - $('.t-select-btn').width() - 13)

  $('.t-dropdown-list').width($('.t-dropdown-select').width())

 /*  $('.t-dropdown-input').val('') */

  $('li.t-dropdown-item').on('click', function () {
    var text = $(this).html()
    $(this).parent().parent().prev().find('.t-dropdown-input').val(text)
    $('.t-dropdown-list').slideUp('fast')
  })

  $(document).on('click', function (event) {
    if ($(event.target).closest('.t-dropdown-input, .t-select-btn, label').length) return
    $('.t-dropdown-list').slideUp('fast')
    $('.t-dropdown-select').removeClass('active')
    event.stopPropagation()
  })

  $('.searchable li').click(function () {
    let tags = $(this).parent().parent().parent().parent().prev()
    let tag = $(this).html()
    $(this).addClass('hide')
    setTimeout(() => {
      $(this).parent().parent().prev().find('input').val('')
    }, 1)
    tags.append(
      `
	<div class="edit-profile__lang">
      <span>` +
        tag +
        `</span>
      <img src="images/lang-strong.svg" alt="" onclick="setClick(this)"/>
    </div>
	`
    )
  })

  $('.searchable2 li').click(function () {
    let tags = $(this).parent().parent().parent().parent().prev()
    let tag = $(this).html()
    $(this).addClass('hide')
    setTimeout(() => {
      $(this).parent().parent().prev().find('input').val('')
    }, 1)
    tags.append(
      `
	<div class="edit-profile__lang">
      <span>` +
        tag +
        `</span>
      <img src="images/lang-strong.svg" alt="" onclick="setClick(this)"/>
    </div>
	`
    )
  })

  $('.edit-profile__pol').click(function () {
    $('.edit-profile__pol').removeClass('active')
    let input = $(this).find('input')
    if (input.is(':checked')) {
      $(this).addClass('active')
    } else {
      $(this).removeClass('active')
    }
  })

  $('.edit-profile__want').click(function () {
    $('.edit-profile__want').removeClass('active')
    let input = $(this).find('input')
    if (input.is(':checked')) {
      $(this).addClass('active')
    } else {
      $(this).removeClass('active')
    }
  })

  $('.edit-profile__childrend').click(function () {
    $('.edit-profile__childrend').removeClass('active')
    let input = $(this).find('input')
    if (input.is(':checked')) {
      $(this).addClass('active')
    } else {
      $(this).removeClass('active')
    }
  })

  $('.edit-profile__smoking').click(function () {
    $('.edit-profile__smoking').removeClass('active')
    let input = $(this).find('input')
    if (input.is(':checked')) {
      $(this).addClass('active')
    } else {
      $(this).removeClass('active')
    }
  })

  $('#area-about').on('keydown', function () {
    let values = $(this).val().length
    let span = $('.edit-profile__input-area span b')
    span.html(values)
  })

  $(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 150) {
      $('.wholike').addClass('active')
    } else {
      $('.wholike').removeClass('active')
    }
  })
  $('.chat__tab').click(function () {
    $('.chat__tab').removeClass('active')
    $(this).addClass('active')
    if ($(window).width() <= 767) {
      $(this).parent().parent().fadeOut(150)
      setTimeout(() => {
        $('.chat__content').fadeIn(150)
        $('.header').addClass('header-chat')
        $('.chat').addClass('chat-active')
      }, 150)
    }
  })

  if ($(window).width() <= 767) {
    $('.chat__tab').removeClass('active')
  }

  $('.my-massage .chat__massage-item').click(function () {
    if ($(window).width() <= 767) {
      $(this).addClass('selected')
      $('#chat-nav-user').addClass('active')
      $('body').addClass('fixed2')
    }
  })

  $('.partner-massage .chat__massage-item').click(function () {
    if ($(window).width() <= 767) {
      $(this).addClass('selected')
      $('#chat-nav').addClass('active')
      $('body').addClass('fixed2')
    }
  })

  $(window).resize(function () {
    if ($(window).width() <= 767) {
      $('.chat__tab').removeClass('active')
    }
    $('.chat__tab').click(function () {
      if ($(window).width() <= 767) {
        $(this).parent().parent().fadeOut(300)
        $('.header').removeClass('header-chat')
        setTimeout(() => {
          $('.chat__content').fadeIn(300)
          $('.header').addClass('header-chat')
        }, 300)
      }
    })

    $('.partner-massage .chat__massage-item').click(function () {
      if ($(window).width() <= 767) {
        $('#chat-nav').addClass('active')
        $('body').addClass('fixed2')
        $(this).addClass('selected')
      }
    })

    $('.my-massage .chat__massage-item').click(function () {
      if ($(window).width() <= 767) {
        $(this).addClass('selected')
        $('#chat-nav-user').addClass('active')
        $('body').addClass('fixed2')
      }
    })
  })

  $(document).on('click', function (e) {
    if (
      !$(e.target).closest('.partner-massage .chat__massage-item, .my-massage .chat__massage-item , #chat-nav').length
    ) {
      $('#chat-nav').removeClass('active')
      $('body').removeClass('fixed2')
      $('.partner-massage .chat__massage-item').removeClass('selected')
      $('#chat-nav-user').removeClass('active')
      $('.my-massage .chat__massage-item').removeClass('selected')
    }
    e.stopPropagation()
  })

  $('.chat-nav__answer').click(function () {
    $('#chat-nav').removeClass('active')
    $('body').removeClass('fixed2')
  })

  $('.chat-nav__answer').click(function () {
    let name = $('.chat__content-name').text()
    let text = $('.chat__massage-item.selected').find('.chat__massage-text').html()
    $('.chat__ans').show()
    $('.chat__ans').find('.chat__ans-name').text(name)
    if (text.indexOf('img') > -1 && text.indexOf('src') > -1 && text.indexOf('alt') > -1) {
      $('.chat__ans').find('.chat__ans-text').text('Изображение')
    } else {
      $('.chat__ans').find('.chat__ans-text').text(text)
    }
  })

  $(function () {
    // copy content to clipboard
    function copyToClipboard(element) {
      var $temp = $('<input>')
      $('body').append($temp)
      $temp.val($(element).text()).select()
      document.execCommand('copy')
      $temp.remove()
    }

    // copy coupone code to clipboard
    $('.chat-nav__copy').on('click', function () {
      copyToClipboard('.chat__massage-item.selected')
      $('#chat-nav').removeClass('active')
      $('body').removeClass('fixed2')
      $('.partner-massage .chat__massage-item').removeClass('selected')
    })
  })

  $('.chat__back').click(function () {
    $('.chat__content').fadeOut(300)
    $('.header').removeClass('header-chat')
    setTimeout(() => {
      $('.chat__item').fadeIn(300)
      $('.chat').removeClass('chat-active')
    }, 300)
  })

  $('.chat__massage-text').click(function () {
    $(this).parent().toggleClass('active')
  })

  $('.chat__massage-del').click(function () {
    $(this).parent().parent().parent().hide()
    let items = $(this).parent().parent().parent().parent().find('.chat__massage-item')
    if (items.is(':visible') == false) {
      $(this).parent().parent().parent().parent().parent().hide()
    }
  })

  $('.chat-nav__del').click(function () {
    $('.chat__massage-item.selected').hide()
    let selectItem = $('.chat__massage-item.selected').parent()
    let items = selectItem.find('.chat__massage-item')
    if (items.is(':visible') == false) {
      selectItem.parent().hide()
    }
  })

  $('.chat-nav__edit').click(function () {
    let text = $('.chat__massage-item.selected')
      .find('.chat__massage-text')
      .text()
      .trim()
      .replace(/\s{2,}/g, ' ')
    $('.chat__form-area').val(text)
    $('.chat__form-area').scrollTop($('.chat__form-area')[0].scrollHeight)
  })

  $('.chat__tab').click(function () {
    setTimeout(() => {
      $('.chat__dialog-inner').scrollTop($('.chat__dialog-inner')[0].scrollHeight)
    }, 150)
  })

  $('.chat__massage-edit').click(function () {
    let text = $(this)
      .parent()
      .parent()
      .parent()
      .text()
      .trim()
      .replace(/\s{2,}/g, ' ')
    $('.chat__form-area').val(text)
    $('.chat__form-area').scrollTop($('.chat__form-area')[0].scrollHeight)
  })

  $('.chat__massage-answer').click(function () {
    let name = $('.chat__content-name').text()
    let text = $(this).prev().html()
    $('.chat__ans').show()
    $('.chat__ans').find('.chat__ans-name').text(name)
    if (text.indexOf('img') > -1 && text.indexOf('src') > -1 && text.indexOf('alt') > -1) {
      $('.chat__ans').find('.chat__ans-text').text('Изображение')
    } else {
      $('.chat__ans').find('.chat__ans-text').text(text)
    }
  })

  $('.chat__massage-repost').click(function () {
    let name = $('.chat__content-name').text()
    let text = $(this).parent().parent().prev().html()
    $('.chat__ans').show()
    $('.chat__ans').find('.chat__ans-name').text(name)
    if (text.indexOf('img') > -1 && text.indexOf('src') > -1 && text.indexOf('alt') > -1) {
      $('.chat__ans').find('.chat__ans-text').text('Изображение')
    } else {
      $('.chat__ans').find('.chat__ans-text').text(text)
    }
  })

  $('.chat__ans-strong').click(function () {
    $('.chat__ans').hide()
    $('.chat__massage-item').removeClass('active')
  })

  $('.login__pols-item').click(function () {
    $('.login__pols-item').removeClass('active')
    let input = $(this).find('input')
    if (input.is(':checked')) {
      $(this).addClass('active')
    }
  })

  $('.login__registr-next').click(function () {
    if ($(this).hasClass('disabled')) {
      $(this).parent().parent().addClass('error')
    } else {
      $(this).parent().parent().removeClass('error')
      $('.login__registr-next').addClass('disable')
      $(this).parent().parent().fadeOut(200)
      setTimeout(() => {
        $(this).parent().parent().next().fadeIn(200)
        $('.login__registr-next').removeClass('disable')
      }, 200)
    }
  })

  $('.login__registr-complate').click(function () {
    if ($(this).hasClass('disabled')) {
      $(this).parent().parent().addClass('error')
    } else {
      $(this).parent().parent().removeClass('error')
    }
  })

  $('.login__registr-prev').click(function () {
    if ($(this).hasClass('disable')) {
      return
    } else {
      $('.login__registr-prev').addClass('disable')
      $(this).parent().parent().fadeOut(200)
      setTimeout(() => {
        $(this).parent().parent().prev().fadeIn(200)
        $('.login__registr-prev').removeClass('disable')
      }, 200)
    }
  })

  $('.login__vhod-pass').click(function () {
    $('.login__vhod').fadeOut(200)
    setTimeout(() => {
      $('.login__rearm').fadeIn(200)
    }, 200)
  })

  $('.login__rearm-btn').click(function () {
    if ($(this).hasClass('disabled')) {
      $(this).parent().parent().addClass('error')
    } else {
      $('body').addClass('fixed-code')
      $('.code').fadeIn(200)
      $(this).parent().parent().removeClass('error')
    }
  })

  $('.code__strong').click(function () {
    $('body').removeClass('fixed-code')
    $('.code').fadeOut(200)
  })

  $('.code__strong').click(function () {
    $('body').removeClass('fixed-code')
    $('.new-pass').fadeOut(200)
  })

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.login__rearm-btn, .code').length) {
      $('.code').fadeOut(200)
      $('.new-pass').fadeOut(200)
      $('body').removeClass('fixed-code')
    }
    e.stopPropagation()
  })

  $('.login__rearm-back').click(function () {
    $('.login__rearm').fadeOut(200)
    setTimeout(() => {
      $('.login__vhod').fadeIn(200)
    }, 200)
  })

  $('.login__registr-pass input').on('keyup', function () {
    let values = $(this).val().length
    let see = $(this).parent().find('.login__registr-pass--see')
    if (values > 0) {
      see.addClass('active')
    } else {
      see.removeClass('active')
    }
  })

  $('.login__registr-pass--see').click(function () {
    $(this).toggleClass('see')
    let input = $(this).parent().find('input')
    if ($(this).hasClass('see')) {
      input.attr('type', 'text')
    } else {
      input.attr('type', 'password')
    }
  })

  $('[data-login-type]').on('click', function () {
    if (!$(this).hasClass('active')) {
      var index2 = $(this).index()
      $(this).addClass('active').siblings().removeClass('active')
      $('[data-login-typecontent]').hide().eq(index2).fadeIn()
    }
    return false
  })

  $('#registr-name').on('input', function () {
    let input = $(this).val().length
    let btn = $(this).parent().parent().next().find('.login__registr-next')
    if (input >= 3) {
      btn.removeClass('disabled')
      $(this).css('border', '1px solid #717070')
    } else {
      btn.addClass('disabled')
      $(this).css('border', '1px solid #FF1216')
    }
  })

  $('.login__registr-third .t-dropdown-item').on('click', function () {
    let btn = $('.login__registr-third').find('.login__registr-next')
    let day = $('#registr-day').val().length
    let mounth = $('#registr-mounth').val().length
    let year = $('#registr-year').val().length
    if (day > 0 && mounth > 0 && year > 0) {
      btn.removeClass('disabled')
    } else {
      btn.addClass('disabled')
    }
  })

  $('#registr-city').on('input', function () {
    let input = $(this).val().length
    let btn = $('.login__registr-foure').find('.login__registr-next')
    if (input >= 2) {
      btn.removeClass('disabled')
    } else {
      btn.addClass('disabled')
    }
  })

  $('.login__registr-foure .t-dropdown-item').on('click', function () {
    let input = $('#registr-city').val().length
    let btn = $('.login__registr-foure').find('.login__registr-next')
    if (input >= 2) {
      btn.removeClass('disabled')
    } else {
      btn.addClass('disabled')
    }
  })

  $('.login__registr-five .t-dropdown-item').on('click', function () {
    let input = $('#registr-status').val().length
    let btn = $('.login__registr-five').find('.login__registr-next')
    if (input >= 1) {
      btn.removeClass('disabled')
    } else {
      btn.addClass('disabled')
    }
  })

  $('.login__registr-six .t-dropdown-item').on('click', function () {
    let input = $('#registr-what').val().length
    let btn = $('.login__registr-six').find('.login__registr-next')
    if (input >= 1) {
      btn.removeClass('disabled')
    } else {
      btn.addClass('disabled')
    }
  })

  $('.login__registr-ten input').on('input', function () {
    let input1 = $('.login__registr-ten').find('.password-input').val().length
    let input2 = $('.login__registr-ten').find('.password-input-repeat').val().length
    let btn = $('.login__registr-ten').find('.login__registr-complate')
    if (input1 >= 3 && input2 >= 3) {
      btn.removeClass('disabled')
      $('.login__registr-ten input').css('border', '1px solid #717070')
      $('.login__registr-pass--korekt').show()
      $('.login__registr-pass--korekt span').hide()
    } else {
      btn.addClass('disabled')
      $('.login__registr-ten input').css('border', '1px solid #FF1216')
      $('.login__registr-pass--korekt').show()
      $('.login__registr-pass--korekt span').show()
    }
    if ($('.password-input').val() != $('.password-input-repeat').val()) {
      btn.addClass('disabled')
      $('.login__registr-ten input').css('border', '1px solid #FF1216')
      $('.login__registr-pass--korekt').show()
    } else {
      btn.removeClass('disabled')
      $('.login__registr-pass--korekt').hide()
      $('.login__registr-ten input').css('border', '1px solid #717070')
    }
  })

  $('.login__vhod input').on('input', function () {
    let mail = $('#vhod-mail')
    let pass = $('#vhod-pass')
    if (pass.val().length >= 3) {
      pass.addClass('valid')
    } else {
      pass.removeClass('valud')
    }
    if (mail.hasClass('valid') && pass.hasClass('valid')) {
      $('.login__vhod-btn').removeClass('disabled')
    } else {
      $('.login__vhod-btn').addClass('disabled')
    }
  })

  $('.login input').blur(function () {
    $('html, body').animate(
      {
        scrollTop: $('.login-wrapper').offset().top,
      },
      200
    )
  })

  var swiper = new Swiper('.mySwiper', {
    allowTouchMove: false,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    breakpoints: {
      991: {
        allowTouchMove: true,
      },
    },
  })
})

function myFunc(input) {
  var files = input.files || input.currentTarget.files

  var reader = []
  var images = input.nextElementSibling
  var strong = input.previousElementSibling
  var plus = input.nextElementSibling.nextElementSibling
  images.innerHTML = ''
  images.style.opacity = '1'
  strong.style.opacity = '1'
  plus.style.opacity = '0'
  var name
  for (var i in files) {
    if (files.hasOwnProperty(i)) {
      name = 'file' + i
      reader[i] = new FileReader()
      reader[i].readAsDataURL(input.files[i])

      images.innerHTML += '<img id="' + name + '" src="" />'
      ;(function (name) {
        reader[i].onload = function (e) {
          input.nextElementSibling.firstElementChild.src = e.target.result
        }
      })(name)
    }
  }
}

$('.edit-profile__photo-strong').click(function () {
  $(this).next().next().html('')
  $(this).next().next().next().css('opacity', '1')
  $(this).css('opacity', '0')
})

////////////

function filterFunction(that, event) {
  let container, input, filter, li, input_val
  container = $(that).closest('.searchable')
  input_val = container.find('input').val().toUpperCase()

  if (['ArrowDown', 'ArrowUp', 'Enter'].indexOf(event.key) != -1) {
    keyControl(event, container)
  } else {
    li = container.find('ul li')
    li.each(function (i, obj) {
      if ($(this).text().toUpperCase().indexOf(input_val) > -1) {
        $(this).show()
        $(this).parent().parent().find('span').hide()
      } else {
        $(this).hide()
        let lishki = $(this).parent().parent().find('ul')
        console.log(lishki.height())
        if (lishki.height() <= 30) {
          $(this).parent().parent().find('span').show()
        }
      }
    })

    container.find('ul li').removeClass('selected')
    setTimeout(function () {
      container.find('ul li:visible').first().addClass('selected')
    }, 100)
  }
}

function keyControl(e, container) {
  if (e.key == 'ArrowDown') {
    if (container.find('ul li').hasClass('selected')) {
      if (
        container.find('ul li:visible').index(container.find('ul li.selected')) + 1 <
        container.find('ul li:visible').length
      ) {
        container
          .find('ul li.selected')
          .removeClass('selected')
          .nextAll()
          .not('[style*="display: none"]')
          .first()
          .addClass('selected')
      }
    } else {
      container.find('ul li:first-child').addClass('selected')
    }
  } else if (e.key == 'ArrowUp') {
    if (container.find('ul li:visible').index(container.find('ul li.selected')) > 0) {
      container
        .find('ul li.selected')
        .removeClass('selected')
        .prevAll()
        .not('[style*="display: none"]')
        .first()
        .addClass('selected')
    }
  } else if (e.key == 'Enter') {
    container.find('input').val(container.find('ul li.selected').text()).blur()
    onSelect(container.find('ul li.selected').text())
  }

  container.find('ul li.selected')[0].scrollIntoView({
    behavior: 'smooth',
  })
}

function onSelect(val) {}

$('.searchable input').focus(function () {
  $(this).closest('.searchable').find('ul').show()
  $(this).closest('.searchable').find('ul li').show()
})
$('.searchable input').blur(function () {
  let that = this
  setTimeout(function () {
    $(that).closest('.searchable').find('ul').hide()
  }, 300)
})

$(document).on('click', '.searchable ul li', function () {
  $(this).closest('.searchable').find('input').val($(this).text()).blur()
  onSelect($(this).text())
})

$('.searchable ul li').hover(function () {
  $(this).closest('.searchable').find('ul li.selected').removeClass('selected')
  $(this).addClass('selected')
})

////

function filterFunction2(that, event) {
  let container, input, filter, li, input_val
  container = $(that).closest('.searchable2')
  input_val = container.find('input').val().toUpperCase()

  if (['ArrowDown', 'ArrowUp', 'Enter'].indexOf(event.key) != -1) {
    keyControl(event, container)
  } else {
    li = container.find('ul li')
    li.each(function (i, obj) {
      if ($(this).text().toUpperCase().indexOf(input_val) > -1) {
        $(this).show()
        $(this).parent().parent().find('span').hide()
      } else {
        $(this).hide()
        let lishki = $(this).parent().parent().find('ul')
        if (lishki.height() <= 30) {
          $(this).parent().parent().find('span').show()
        }
      }
    })

    container.find('ul li').removeClass('selected')
    setTimeout(function () {
      container.find('ul li:visible').first().addClass('selected')
    }, 100)
  }
}

function keyControl(e, container) {
  if (e.key == 'ArrowDown') {
    if (container.find('ul li').hasClass('selected')) {
      if (
        container.find('ul li:visible').index(container.find('ul li.selected')) + 1 <
        container.find('ul li:visible').length
      ) {
        container
          .find('ul li.selected')
          .removeClass('selected')
          .nextAll()
          .not('[style*="display: none"]')
          .first()
          .addClass('selected')
      }
    } else {
      container.find('ul li:first-child').addClass('selected')
    }
  } else if (e.key == 'ArrowUp') {
    if (container.find('ul li:visible').index(container.find('ul li.selected')) > 0) {
      container
        .find('ul li.selected')
        .removeClass('selected')
        .prevAll()
        .not('[style*="display: none"]')
        .first()
        .addClass('selected')
    }
  } else if (e.key == 'Enter') {
    container.find('input').val(container.find('ul li.selected').text()).blur()
    onSelect(container.find('ul li.selected').text())
  }

  container.find('ul li.selected')[0].scrollIntoView({
    behavior: 'smooth',
  })
}

function onSelect(val) {}

$('.searchable2 input').focus(function () {
  $(this).closest('.searchable2').find('ul').show()
  $(this).closest('.searchable2').find('ul li').show()
})
$('.searchable2 input').blur(function () {
  let that = this
  setTimeout(function () {
    $(that).closest('.searchable2').find('ul').hide()
  }, 300)
})

$(document).on('click', '.searchable2 ul li', function () {
  $(this).closest('.searchable2').find('input').val($(this).text()).blur()
  onSelect($(this).text())
})

$('.searchable2 ul li').hover(function () {
  $(this).closest('.searchable2').find('ul li.selected').removeClass('selected')
  $(this).addClass('selected')
})

///////

function setClick(elem) {
  elem.parentElement.style.display = 'none'
}

/////

function filterFunction3(that, event) {
  let container, input, filter, li, input_val
  container = $(that).closest('.chat__item')
  input_val = container.find('input').val().toUpperCase()

  if (['ArrowDown', 'ArrowUp', 'Enter'].indexOf(event.key) != -1) {
    keyControl(event, container)
  } else {
    li = container.find('.chat__tabs .chat__tab-name')
    li.each(function (i, obj) {
      if ($(this).text().toUpperCase().indexOf(input_val) > -1) {
        $(this).parent().parent().parent().show()
        $(this).parent().parent().parent().parent().find('span').hide()
      } else {
        $(this).parent().parent().parent().hide()
        let lishki = $(this).parent().parent().parent().parent().parent().find('.chat__tabs')
        if (lishki.height() <= 40) {
          $(this).parent().parent().parent().parent().find('span').show()
        }
      }
    })

    container.find('.chat__tabs .chat__tab').removeClass('selected')
    setTimeout(function () {
      container.find('.chat__tabs .chat__tab:visible').first().addClass('selected')
    }, 100)
  }
}

function keyControl(e, container) {
  if (e.key == 'ArrowDown') {
    if (container.find('.chat__tabs .chat__tab-name').hasClass('selected')) {
      if (
        container
          .find('.chat__tabs .chat__tab-name:visible')
          .index(container.find('.chat__tabs .chat__tab-name.selected')) +
          1 <
        container.find('.chat__tabs .chat__tab-name:visible').length
      ) {
        container
          .find('.chat__tabs .chat__tab-name.selected')
          .removeClass('selected')
          .nextAll()
          .not('[style*="display: none"]')
          .first()
          .addClass('selected')
      }
    } else {
      container.find('.chat__tabs .chat__tab:first-child').addClass('selected')
    }
  } else if (e.key == 'ArrowUp') {
    if (
      container
        .find('.chat__tabs .chat__tab-name:visible')
        .index(container.find('.chat__tabs .chat__tab-name.selected')) > 0
    ) {
      container
        .find('.chat__tabs .chat__tab-name.selected')
        .removeClass('selected')
        .prevAll()
        .not('[style*="display: none"]')
        .first()
        .addClass('selected')
    }
  } else if (e.key == 'Enter') {
    container.find('input').val(container.find('.chat__tabs .chat__tab-name.selected').text()).blur()
    onSelect(container.find('.chat__tabs .chat__tab-name.selected').text())
  }

  container.find('.chat__tabs .chat__tab-name.selected')[0].scrollIntoView({
    behavior: 'smooth',
  })
}

//////////
function filterFunction4(that, event) {
  let container, input, filter, li, input_val
  container = $(that).closest('.searchable4')
  input_val = container.find('input').val().toUpperCase()

  if (['ArrowDown', 'ArrowUp', 'Enter'].indexOf(event.key) != -1) {
    keyControl4(event, container)
  } else {
    li = container.find('ul li')
    li.each(function (i, obj) {
      if ($(this).text().toUpperCase().indexOf(input_val) > -1) {
        $(this).show()
        $(this).parent().parent().find('span').hide()
      } else {
        $(this).hide()
        let lishki = $(this).parent().parent().find('ul')
        console.log(lishki.height())
        if (lishki.height() <= 30) {
          $(this).parent().parent().find('span').show()
        }
      }
    })

    container.find('ul li').removeClass('selected')
    setTimeout(function () {
      container.find('ul li:visible').first().addClass('selected')
    }, 100)
  }
}

function keyControl4(e, container) {
  if (e.key == 'ArrowDown') {
    if (container.find('ul li').hasClass('selected')) {
      if (
        container.find('ul li:visible').index(container.find('ul li.selected')) + 1 <
        container.find('ul li:visible').length
      ) {
        container
          .find('ul li.selected')
          .removeClass('selected')
          .nextAll()
          .not('[style*="display: none"]')
          .first()
          .addClass('selected')
      }
    } else {
      container.find('ul li:first-child').addClass('selected')
    }
  } else if (e.key == 'ArrowUp') {
    if (container.find('ul li:visible').index(container.find('ul li.selected')) > 0) {
      container
        .find('ul li.selected')
        .removeClass('selected')
        .prevAll()
        .not('[style*="display: none"]')
        .first()
        .addClass('selected')
    }
  } else if (e.key == 'Enter') {
    container.find('input').val(container.find('ul li.selected').text()).blur()
    onSelect(container.find('ul li.selected').text())
  }

  container.find('ul li.selected')[0].scrollIntoView({
    behavior: 'smooth',
  })
}

function onSelect(val) {}

$('.searchable4 input').focus(function () {
  $(this).closest('.searchable4').find('ul').show()
  $(this).closest('.searchable4').find('ul li').show()
})
$('.searchable4 input').blur(function () {
  let that = this
  setTimeout(function () {
    $(that).closest('.searchable4').find('ul').hide()
  }, 300)
})

$(document).on('click', '.searchable4 ul li', function () {
  $(this).closest('.searchable4').find('input').val($(this).text()).blur()
  onSelect($(this).text())
})

$('.searchable4 ul li').hover(function () {
  $(this).closest('.searchable4').find('ul li.selected').removeClass('selected')
  $(this).addClass('selected')
})
///////

function onSelect(val) {}

$('.chat__dialog-inner').scrollTop($('.chat__dialog-inner')[0].scrollHeight)