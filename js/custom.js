
(function ($) {

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
  const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

  const toastTrigger = document.getElementById('liveToastBtn')
  const toastLiveExample = document.getElementById('liveToast')

  if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
      toastBootstrap.show()
    })
  }
   
 
  // ********************* Parallex Animation jarallax ********************* 

  // jarallax(document.querySelectorAll(".jarallax"));
  // jarallax(document.querySelectorAll(".jarallax-keep-img"), {
  //   keepImg: true,
  // });
 
  // ********************* Scroll Animation ScrollMagic ********************* 
    
  if($(".bottom-in, .fadein, .left-in, .right-in ").length){
    var controller = new ScrollMagic.Controller();

    $(".bottom-in").each(function() {
      $(this).addClass("bottom-in-hide");
      var t = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: .80
      }).setClassToggle(this, 'from-bottom')
      .addTo(controller);
    });
  
    $(".fadein").each(function() {
          $(this).addClass("show-item");
          var t = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 1
          }).setClassToggle(this, 'show-item')
          .addTo(controller);
    });
  
    $(".left-in").each(function() {
      $(this).addClass("left-in-hide");
      var t = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: .85,    
      }).setClassToggle(this, 'from-left')
      .addTo(controller);
    });
  
    $(".right-in").each(function() {
      $(this).addClass("right-in-hide");
      var t = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: .85,
  
      }).setClassToggle(this, 'from-right')
      .addTo(controller);
    });
  }
 
  $(window).on("scroll load resize", function() {

    $('.lifeHBKU-count').each( function(i){
      var top_of_object = $(this).offset().top;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if( bottom_of_window > top_of_object ){
        counttrigger();
      } else {}
    });
      
    // if( $(window).scrollTop()>=50) {
    //   $('#scrollToTop').show();
    // } else {
    //   $('#scrollToTop').hide();
    // }
            
    // if( $(window).scrollTop() > $("#pageHeader").outerHeight()) {
    //   $("#pageHeader").addClass("stickyHead");
    // } else {
    //   $("#pageHeader").removeClass("stickyHead");
    // } 

    // ********************* Sticker Header ********************* 

    if( $(window).scrollTop() > $(".home-header").outerHeight()) {
      $(".home-header").addClass("white-header");
    } else {
      $(".home-header").removeClass("white-header");
    }
     
    // ********************* Animation ********************* 

    $('[data-animation]').each( function(i){
      var top_of_object = $(this).offset().top;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if( bottom_of_window > top_of_object ){
        $(this).addClass("animate__animated " + $(this).attr("data-animation"));
      }else {
        $(this).removeClass("animate__animated " + $(this).attr("data-animation"));
      }
    }); 
     
    // ********************* Image Animation ********************* 
    
    $('[data-image]').each( function(i){
      var top_of_object = $(this).offset().top+100;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if( bottom_of_window > top_of_object ){
        $(this).addClass( "imgShow" );
      } else {
        $(this).removeClass( "imgShow");
      }
    }); 

    // $('[data-discover-fixed]').each( function(i){
    //   var top_of_object = $(this).offset().top;
    //   var bottom_of_window = $(window).scrollTop() + $(window).height();
    //   if( bottom_of_window > top_of_object ){
    //     $(".home-discover").addClass("make-it-fixed");
    //   } else {
    //     $(".home-discover").removeClass("make-it-fixed");
    //   }
    // }); 

    // $('[data-discover-hide]').each( function(i){
    //   var top_of_object = $(this).offset().top;
    //   var bottom_of_window = $(window).scrollTop() + $(window).height();
    //   if( bottom_of_window > top_of_object ){
    //     $(".home-discover").addClass("make-it-hide");
    //   } else {
    //     $(".home-discover").removeClass("make-it-hide");
    //   }
    // });
 
    $('[data-side-image]').each( function(i){
      var top_of_object = $(this).offset().top+300;
      var bottom_of_window = $(window).scrollTop() + $(window).height(); 
      let targetImageClass = $(this).attr("data-side-image");
      let targetImage = document.querySelector("." + targetImageClass);

      if( bottom_of_window > top_of_object ){
        $(targetImage).addClass( "img-side-show" );
      } else {
        $(targetImage).removeClass( "img-side-show");
      }
    }); 

    /*if($(".bannerHolderInner , .bannerHolderHome").length == 0){
      $("#pageContent").css("padding-top",$("#pageHeader").outerHeight());
      $("#pageHeader").addClass("noBanner");
    }*/

  });
 
  // $(document).ready(function() {
  //   $('.js-example-basic-multiple').select2();
  //   $('.js-example-basic-single').select2();
  // });

  if($(".role-selector").length > 0){
    if ($(".role-selector")[0]) {
      $(document).ready(function () {
        $('.role-selector').select2();
      });
    }
  }

  if($('[data-toggle="tooltipa"] a').length > 0) {
    $(function () {
      $('[data-toggle="tooltipa"] a').tooltip(); 
    })
  }
   
  // $(function () {
  //     $('[data-toggle="tooltipa"] a').tooltip();
  //    // $( ".datepicker" ).datepicker();
  // })

  //menu click
  $(".navbar-toggler").on('click', function(){  
    setTimeout(function() { 
      $('.mega-menu.show').removeClass('show');
    }, 1000);
  });

  $(".detail-hide .btn-up").click(function(){ 
    $(this).parent().parent().parent(".detail-hide").toggleClass("show-details");
    $(this).toggleClass("active");
  });
   
  $(document).ready(function () {
 
    function updateAccordionImage() {
      $('.accordion-with-change .accordion-collapse.show').each(function() {
          var newSrc = $(this).data('img-src');
          $('.change-img img').fadeOut(300, function() {
            $(this).attr('src', '');
            $(this).attr('src', newSrc).fadeIn(400);
          });
      });
    }
    updateAccordionImage();
    
    $('.accordion-with-change .accordion-button').on('click', function() {
        setTimeout(updateAccordionImage, 400);
    });
  
    function setDropdownAutoClose() {
        if (window.innerWidth >= 1199) {
            $('.nav-item.dropdown .nav-link').attr('data-bs-auto-close', 'true');
        } else {
            $('.nav-item.dropdown .nav-link').attr('data-bs-auto-close', 'outside');
        }
    } 
    setDropdownAutoClose(); 
    $(window).resize(function () {
        setDropdownAutoClose();
    });
  });
    
  $(document).ready(function() { 
    $(".mobi-sub-btn").each(function() {  
      var buttonMenu = $(this);
      buttonMenu.on('click', function(event) {
        event.preventDefault(); 
        $(".mobi-sub-menu").not($(this).parent()).removeClass("active");
        $(this).parent().toggleClass("active"); 
      }); 
    });  
  });

// $(document).ready(function() {
//   $('.mobi-sub-btn').on('click', function(event) {
//     event.preventDefault();
//     $(".mobi-sub-menu").not($(this).parent()).removeClass("active");
//     $(this).parent().toggleClass("active");
//     var $megaMenu = $(this).closest('.mega-menu');
//     if ($(".mobi-sub-menu.active").length > 0) {
//       setTimeout(function() {
//         $megaMenu.addClass('show');
//       }, 1);
//     } else {
//       setTimeout(function() {
//         $megaMenu.removeClass('show');
//       }, 1);
//     }
//   });
// });

  $('.hamburger').keypress(function (e) {
    var key = e.which;
    if(key == 13)
    {
      $('.hamburger').click();
      return false;
    }
  });


  

  //social media button click
  $(".btnSocialmedia").click(function(){
    $(".nav-socialmedia").toggleClass("show");
  }); 
  
  // scroll top script
  $(document).ready(function () {
    $(window).scroll(function () { 
      /*var bannerHeight = $(".banner-holder__inner").height();
      if ($(this).scrollTop() > bannerHeight) {
          $('.content-area-menu').addClass("toFixed");
      } else {
        $('.content-area-menu').removeClass("toFixed");
      }*/
    });
  });

  $(document).ready(function(){  
    $(".collapseAll").each(function() {
      $(this).click(function() {

        let $this = $(this);
        let currentText = $this.text();
        let newText = $this.data('action');


        let button = this;
        let parentContainer = $(button).parent().parent();  
        let accordionCollapse = parentContainer.find('.accordion-collapse');
        let accordionButton = parentContainer.find('.accordion-button');

        $this.text(newText);

        $this.data('action', currentText);

        if (!accordionCollapse.hasClass("show")) {
          accordionCollapse.addClass("show");
          accordionButton.removeClass("collapsed");
          
        } else {
          accordionCollapse.removeClass("show");
          accordionButton.addClass("collapsed");
     
        }
 
      });
    }); 
  });




//   $(document).ready(function(){
//     $(".collapseAll").click(function() {
//         let button = $(this);
//         let parentContainer = button.closest('.tab-pane');
//         let accordionCollapse = parentContainer.find('.collapse');
//         let accordionButton = parentContainer.find('.accordion-button');

//         if (button.text() === 'Expand All') {
//             accordionCollapse.collapse('show');
//             accordionButton.removeClass('collapsed');
//             button.text('Collapse All');
//         } else {
//             accordionCollapse.collapse('hide');
//             accordionButton.addClass('collapsed');
//             button.text('Expand All');
//         }
//     });

//     $('button[data-bs-toggle="pill"]').on('shown.bs.tab', function (e) {
//         let tab = $(e.target).attr("href");
//         $(tab).find('.collapseAll').text('Expand All');
//         $(tab).find('.collapse').collapse('hide');
//         $(tab).find('.accordion-button').addClass('collapsed');
//     });
// });





  $(document).ready(function () {
    // $(window).scroll(function() {
    //   var scrollTop = $(window).scrollTop();
    //   var elementOffset = $('.application-holder').offset().top;
    //   var distance = (elementOffset - scrollTop);
  
    //   if (distance <= $(".home-header").outerHeight()) {
    //     $('.bg-grey-09').addClass('sticky');
    //   } else {
    //     $('.bg-grey-09').removeClass('sticky');
    //   }
    // });
  
    $(window).scroll(function () {
      if ($(this).scrollTop() > 400) {
          $('.scrollup').show();
      } else {
          $('.scrollup').hide();
      } 
    });

    $(".scrollup").click(function(){
      $(window).scrollTop(0);
    });
 
    if($(".js-select2").length > 0) {
      $(".js-select2").select2({
        closeOnSelect : false,
        placeholder : "Placeholder",
        allowHtml: true,
        allowClear: true,
        tags: true 
      });
    }
  });

  
  // Multi-select single

  // if ($(".multi-selector2")[0]) {
  //   $(document).ready(function () {
  //     $(".multi-selector2").select2({
  //       closeOnSelect : false,
  //       tags: true
  //     }).on('change', function() {
  //       var $selected = $(this).find('option:selected');
  //       var $container = $(this).parent(".multi-select").find('.multi-selector-result');
            
  //       var $list = $('<ul>');
  //       $selected.each(function(k, v) {
  //         var $li = $('<li class="yellow-tag">' +'<a> × </a>' + $(v).text() + '</li>');
  //         $li.children('a')
  //         .off('click.select2-copy')
  //         .on('click.select2-copy', function(e) {
  //           var $opt = $(this).data('select2-opt');
        
  //           $opt.prop('selected', false); 
        
  //           $opt.parents('select').trigger('change');
  //         }).data('select2-opt', $(v));
  //         $list.append($li);
  //         $('.selected-items').show();
  //         $('.countryToggle').show();
  //       });
  //       $container.html('').append($list);
  //     }).trigger('change');
  //   });
  // }
 

  $(document).ready(function() { 

    $(".js-playPause").each(function() { 
      var myVideo = $(this).parent().find(".js-video-wrapper");
      var button = $(this);

      function playPause() { 
        if (myVideo.get(0).paused) {
            myVideo.get(0).play();
            button.addClass("playing");
            button.parent().find(".video-img").remove();
            button.remove();
        } else {
            myVideo.get(0).pause();
            button.removeClass("playing");
        }
      }

      button.on("click", playPause);
    }); 
     
    if($('.js-select2-1').length > 0){
      $('.js-select2-1').select2();
      $('.js-select2-1').each(function() {
        if ($(this).hasClass('with-check')) {  
          $(this).on('select2:open', function() {
            $('.select2-container--open').addClass('check-select-wrap');
          });
        } else   {}
      }); 
    }

    function updateSelectResultHolders() {
      setTimeout(function() {
        $('.select-result-holder').has('.select-result .sel-val').addClass('withHas');
      }, 2000);
    } 
    updateSelectResultHolders();
    $('body').on('change', updateSelectResultHolders);
   
    function updateSelectedValues() {
        var result = '';
        $('.js-select2-1').each(function() {
            var selectedOptions = $(this).find(':selected');
            var dropdownId = $(this).attr('id');
            selectedOptions.each(function(index) {
                var itemId = dropdownId + '-' + index;
                result += '<div class="sel-val" id="' + itemId + '" data-dropdown="' + dropdownId + '" data-value="' + $(this).val() + '">' + $(this).text() + '</div>';
            });
        });
        $('#selectedValues').html(result);
    }

    $('.js-select2-1').on('change', function() {
        updateSelectedValues();
        updateSelectResultHolders();
    });

    $('#selectedValues').on('click', '.sel-val', function() {
        var valueToRemove = $(this).data('value');
        var dropdownId = $(this).data('dropdown');
        $(this).remove();
        $('#' + dropdownId + ' option[value="' + valueToRemove + '"]').prop('selected', false);
        $('#' + dropdownId).trigger('change');
    });

    $('#resetButton').on('click', function() {
        $('.js-select2-1').val(null).trigger('change');
        $('#selectedValues').html('');
        $('.select-result-holder').removeClass('withHas');
    });
    
    updateSelectedValues();
    updateSelectResultHolders();
  });

 

 
 
  $(".banner-slick").slick({
    slidesToShow: 1,
    infinite: false,
    arrows: true,
    dots: false
  });

  
  $(".companies-slick").slick({
    slidesToShow: 1,
    infinite: false,
    arrows: true,
    dots: true
  });


   

  // $(document).ready(function(){
  //   $(".btn-filter").click(function(){
  //     $(".result-filter-holder").slideToggle(400);
  //   });
  // });


  $(".faculties-list-js").each(function() {
    $(this).slick({
      rtl: ($('html').attr('dir') == 'rtl') ? true : false,
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: false,
      focusOnSelect: true, 
      arrows: true, 
      dots: false,
      autoplay:true,
      responsive: [{  
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        } 
      }, {
        breakpoint: 576,
        settings: { 
          slidesToShow: 1,
        }
      }]
    });
  });


 
})(jQuery);

 

function CountdownTracker(label, value){

  var el = document.createElement('span');

  el.className = 'flip-clock__piece';
  el.innerHTML = '<b class="flip-clock__card card"><b class="card__top"></b><b class="card__bottom"></b><b class="card__back"><b class="card__bottom"></b></b></b>' + 
    '<span class="flip-clock__slot">' + label + '</span>';

  this.el = el;

  var top = el.querySelector('.card__top'),
      bottom = el.querySelector('.card__bottom'),
      back = el.querySelector('.card__back'),
      backBottom = el.querySelector('.card__back .card__bottom');

  this.update = function(val){
    val = ( '0' + val ).slice(-2);
    if ( val !== this.currentValue ) {
      
      if ( this.currentValue >= 0 ) {
        back.setAttribute('data-value', this.currentValue);
        bottom.setAttribute('data-value', this.currentValue);
      }
      this.currentValue = val;
      top.innerText = this.currentValue;
      backBottom.setAttribute('data-value', this.currentValue);

      this.el.classList.remove('flip');
      void this.el.offsetWidth;
      this.el.classList.add('flip');
    }
  }
  
  this.update(value);
}

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  return {
    'Total': t,
    'Days': Math.floor(t / (1000 * 60 * 60 * 24)),
    'Hours': Math.floor((t / (1000 * 60 * 60)) % 24),
    'Minutes': Math.floor((t / 1000 / 60) % 60),
    'Seconds': Math.floor((t / 1000) % 60)
  };
}

function Clock(countdown,callback) {
  countdown = countdown ? new Date(Date.parse(countdown)) : false;
  callback = callback || function(){};
  
  var updateFn = getTimeRemaining;

  this.el = document.createElement('div');
  this.el.className = 'flip-clock';

  var trackers = {},
      t = updateFn(countdown),
      key, timeinterval;

  for ( key in t ){
    if ( key === 'Total' ) { continue; }
    trackers[key] = new CountdownTracker(key, t[key]);
    this.el.appendChild(trackers[key].el);
  }

  var i = 0;
  function updateClock() {
    timeinterval = requestAnimationFrame(updateClock);
    
    // throttle so it's not constantly updating the time.
    if ( i++ % 10 ) { return; }
    
    var t = updateFn(countdown);
    if ( t.Total < 0 ) {
      cancelAnimationFrame(timeinterval);
      for ( key in trackers ){
        trackers[key].update( 0 );
      }
      callback();
      return;
    }

    for ( key in trackers ){
      trackers[key].update( t[key] );
    }
  }

  setTimeout(updateClock,500);
}

//var deadline = new Date(Date.parse(new Date()) + 12 * 24 * 60 * 60 * 1000);
var deadline = new Date(Date.parse(new Date('2025/12/27')));
var c = new Clock(deadline, function(){ /* Do something when countdouwn is complete */ });
var page_timer = document.getElementById('flip_timer');
if(page_timer){
  if (c && c.el) {
  page_timer.appendChild(c.el);
  }
}

/*
var clock = new Clock();
document.body.appendChild(clock.el);
*/

$(".showmore").on("click", function (e) {
  $(this).stop().toggleClass('on');
  $(".social ul.hidden").stop().slideToggle();
  e.preventDefault();
});

setTimeout(function() {
  $('.mez.alert').fadeOut();
}, 2000);


$(document).ready(function() {
  $(window).scroll(function() {
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();
      var footerOffsetTop = $('.footer-main').offset().top;

      if (scrollTop + windowHeight >= footerOffsetTop) {
          $('.scrollup, .share-banner-wrapper ').addClass('end');
      } else {
          $('.scrollup, .share-banner-wrapper').removeClass('end');
      }
  });

  function paginationHas() {
    setTimeout(function() {
      $('.pagination').addClass('withHas');
    }, 2000);
  } 
  paginationHas();
  $('body').on('change', paginationHas);

  function hasDropdownMenu() {
    $('.header-bottom .nav-item').has('.dropdown-menu').addClass('has-dropdown-menu');
    $('.dropdown-menu').parent().addClass('has-dropdown-menu');
  } 
  setTimeout(function() { 
    hasDropdownMenu();
  }, 1000); 
  $('body').on('change', hasDropdownMenu);

});

$(function() { 
  function hasHeaderInner() {
    $('body').has('.header-inner').addClass('hasHeaderInner');
  } 
  hasHeaderInner();
  $('body').on('change', hasHeaderInner);

  function hasSearchModal() {
    $('.modal.fade').has('.search-modal').addClass('has-search-modal');
  } 
  hasSearchModal();
  $('body').on('change', hasSearchModal);

  
  

  function hasEventsFeatured() {
    $('.home-events div > .events-list.featured').parent().addClass('has-events-featured');
  } 
  hasEventsFeatured();
  $('body').on('change', hasEventsFeatured);
  
  // function testimonialHas() {
  //   $('.testimonial-holder .testimonial-item.slick-current').has('.testimonial-figure').parents(".testimonial-holder").addClass('withHas');
  // } 
  // testimonialHas();
  // $('body').on('change', testimonialHas); 

});

$(document).ready(function() {
  $('.header-main .nav-link').on('click', function() {
      var $dropdownMenu = $(this).siblings('.dropdown-menu.mega-menu');
      if ($dropdownMenu.hasClass('show')) {
        $('.header-main').addClass('hasClass');
        $('.nav-item').removeClass('hasMenuOpen');
        $(this).parent('.nav-item').addClass('hasMenuOpen');
      } else {
        $('.header-main').removeClass('hasClass');
        $(this).parent('.nav-item').removeClass('hasMenuOpen');
      }
  });
});



$(document).ready(function(){
  function initSlick() {
    if ($(window).width() <= 991) {
      if (!$('.cmn-tab-1').hasClass('slick-initialized')) {
        $('.cmn-tab-1').slick({
          rtl: ($('html').attr('lang') == 'ar') ? true : false,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          infinite: false,
          responsive: [{  
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
            } 
          }, {
            breakpoint: 576,
            settings: { 
              slidesToShow: 1,
            }
          }]
        }).on('afterChange', function(event, slick, currentSlide){
          // Trigger the corresponding tab change
          $('.cmn-tab-1 .nav-link').eq(currentSlide).tab('show');
        });
      }
    } else {
      if ($('.cmn-tab-1').hasClass('slick-initialized')) {
        $('.cmn-tab-1').slick('unslick');
      }
    }
  }

  initSlick();
  $(window).on('resize', function(){
    initSlick();
  });

  // $(document).on('click', '.cmn-tab-1 .slick-prev, .cmn-tab-1 .slick-next', function() {
  //   var currentSlide = $('.cmn-tab-1').slick('slickCurrentSlide');
  //   $('.cmn-tab-1 .nav-link').eq(currentSlide).tab('show');

  // });

  $(document).on('click', '.cmn-tab-1 .slick-prev, .cmn-tab-1 .slick-next', function() {
    var currentSlide = $('.cmn-tab-1').slick('slickCurrentSlide');
    var $navLink = $('.cmn-tab-1 .nav-link').eq(currentSlide);
    var dataUrl = $navLink.data('url');
    if (dataUrl) {

        window.open(dataUrl, '_blank');
    } else {
    
        $navLink.tab('show');
    }
});

});




$(document).ready(function() {
  $('.cmn-tab-1').each(function() {
    if ($(this).find('.dropdown-menu').length > 0) {
      $(this).addClass('with-dropdown');
    }
  });


  if ($('.cmn-tab-1.with-dropdown').length) {
    $('.cmn-tab-1.with-dropdown').closest('.container-lg').addClass('overflow-hidden');
  }
});

$(document).ready(function() {
  $(".js-tab-hover .nav-link").mouseenter(function() {
    $(this).tab('show');
  });
});


$(document).ready(function() {

    


  function tabMoveUp() {
    if($(window).width() <= 991){
      $('.cmn-accordion-1 .accordion-header button').on('click', function() {
        var target = $(this).data('bs-target');
        
       
        $(target).on('shown.bs.collapse', function () {
          var headerHeight = $('header').outerHeight();
       
          $('html, body').animate({ 
            scrollTop: $(target).offset().top - (headerHeight + 150), 
          },0);
        });
        
     
        $('header').addClass('reduced');
      });
    }
  }

  tabMoveUp();
 
  $(window).resize(function() {
      tabMoveUp();
  });
 
  $('.cmn-accordion-1 .collapse').on('hidden.bs.collapse', function () {
    if ($('.cmn-accordion-1 .collapse.show').length === 0) {
      $('header').removeClass('reduced');
    }
  });
});



document.addEventListener('DOMContentLoaded', function() {
  var accordions = document.querySelectorAll('.l-accordion__title');
  
  accordions.forEach(function(accordion) {
      accordion.addEventListener('click', function() {
          var content = this.nextElementSibling;
          var icon = this.querySelector('.accordion-icon');

          var isActive = this.classList.contains('active');

          document.querySelectorAll('.l-accordion__content').forEach(function(content) {
              content.style.maxHeight = '0';
              content.style.padding = '0 15px';
          });
          document.querySelectorAll('.accordion-icon').forEach(function(icon) {
              icon.textContent = '+';
          });
          accordions.forEach(function(acc) {
              acc.classList.remove('active');
          });

          if (!isActive) {
              content.style.maxHeight = content.scrollHeight + 'px';
              content.style.padding = '10px 15px';
              icon.textContent = '-';
              this.classList.add('active');
          }
      });
  });
});


// div full width while no content in js-aside-wrap 

document.addEventListener('DOMContentLoaded', function() {

  function checkAndAddClass() {
      var asideWraps = document.querySelectorAll('.js-aside-wrap');
      
      asideWraps.forEach(function(asideWrap) {
          if (asideWrap.innerHTML.trim() === '') {
              asideWrap.closest('.main-holder').classList.add('no-aside');
          } else {
              asideWrap.closest('.main-holder').classList.remove('no-aside');
          }
      });
  }

  checkAndAddClass();

});


$(document).ready(function(){
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
  $(window).on('resize', function(){
    initSlick();
  });

  // $(document).on('click', '.year-tab-js .slick-prev, .year-tab-js .slick-next', function() {
  //   var currentSlide = $('.year-tab-js').slick('slickCurrentSlide');
  //   $('.year-tab-js .nav-link').eq(currentSlide).tab('show');
  // });


});


$(document).ready(function() {
  function toggleClassBasedOnChild() {
      $('.year-tab-js').each(function() {
          if ($(this).find('.slick-arrow').length > 0) {
              $(this).addClass('add-nav');
          } else {
              $(this).removeClass('add-nav');
          }
      });
  }
  toggleClassBasedOnChild();
  $(window).resize(function() {
      toggleClassBasedOnChild();
  });

});