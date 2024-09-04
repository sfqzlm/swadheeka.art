
(function ($) {
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        $('.header-main').addClass('small');
      } else {
        $('.header-main').removeClass('small');
      }
    });

    $(window).scroll(function () {
      if ($(this).scrollTop() > 400) {
        $('.scrollup').show();
      } else {
        $('.scrollup').hide();
      }
    });

    $(".scrollup").click(function () {
      $(window).scrollTop(0);
    });
  });

  // Select all links inside the navbar
  $('.navbar-nav a').on('click', function () {
    // Check if the navbar-toggler is visible (indicating the navbar is expanded)
    if ($('.navbar-toggler').is(':visible')) {
      // Collapse the navbar by clicking the toggler button
      $('.navbar-collapse').collapse('hide');
    }
  });

})(jQuery);



$(document).ready(function () {
  function initSlick() {

    if (!$('.year-tab-js').hasClass('slick-initialized')) {
      $('.year-tab-js').slick({
        rtl: ($('html').attr('lang') == 'ar') ? true : false,
        slidesToShow: 10,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        cssEase: 'linear',
        infinite: false,
        centerMode: false,
        responsive: [{
          breakpoint: 2000,
          settings: {
            slidesToShow: 10,
          }
        }, {
          breakpoint: 1280,
          settings: {
            slidesToShow: 8,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 5,
          }
        }, {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
          }
        }]
      })// .on('afterChange', function(event, slick, currentSlide){
      //   // Trigger the corresponding tab change
      //   $('.year-tab-js .nav-link').eq(currentSlide).tab('show');
      // });
    }

  }

  initSlick();
  $(window).on('resize', function () {
    initSlick();
  });

  // $(document).on('click', '.year-tab-js .slick-prev, .year-tab-js .slick-next', function() {
  //   var currentSlide = $('.year-tab-js').slick('slickCurrentSlide');
  //   $('.year-tab-js .nav-link').eq(currentSlide).tab('show');
  // });

});
