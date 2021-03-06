$(document).ready(function () {

  // Change device orientation

  window.addEventListener("orientationchange", function() {
    location.reload();
  }, false);


  // Load page on window orientation

  window.addEventListener("orientationchange", function() {
    location.reload();
  }, false);


  // Hamburger

  function hamburgerClose() {
    $('.header__hamburger').removeClass('js-open')
    $('#overlay').fadeOut(300)
    $('html, body').removeClass('js-overflow')
    $('.navbar').removeClass('js-nav-active')
  }

  $('.header__hamburger').on('click', function (event) {
    $(this).toggleClass('js-open')
    $('html, body').toggleClass('js-overflow')
    $('.navbar').toggleClass('js-nav-active')

    $('#overlay').click(function (event) {
      hamburgerClose()
    })

    if ($(this).hasClass('js-open')) {
      $('#overlay').fadeIn(300).css('z-index', '10')

      document.onkeydown = function (e) {
        if (e.keyCode === 27) {
          hamburgerClose()

          return false
        }
      }

    } else {
      hamburgerClose()
    }
  })


// Header

  window.addEventListener('scroll', () => {

    if ($(window).scrollTop() > 75) {
      $('.header').addClass('js-header-fixed')
    } else {
      $('.header').removeClass('js-header-fixed')
    }
  });


  // Mouse click scroll

  $('.mouse-link').on('click', function (event) {
    let id = $(this).attr('data-scroll'),
        top = $(id).offset().top;
    $('html, body').animate({scrollTop: top - $('.header').height() + 30}, 1000);
  })


  // Blocks

  $('.product-item').parent().addClass('product-item__parent')
  $('.advantages-item').parent().addClass('advantages-item__parent')
  $('.news-card').parent().addClass('news-card__parent')

  if ($(window).width() <= 991) {

    $('.feedback-img').parents('.col-lg-6').fadeOut()

  }


  // Accordion desktop disable

  if ($(window).width() > 991) {

    accordionDesktopDisable()

  }

  function accordionDesktopDisable() {

    let accordionLink = $('.sidebar-accordion .accordion__link')

    accordionLink.next().removeAttr('id')
    accordionLink.next().removeClass('show collapse')
    accordionLink.removeAttr('data-target data-toggle')

  }

})