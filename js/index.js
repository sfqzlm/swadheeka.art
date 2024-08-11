
  document.addEventListener('mousemove', (event)=> {
    gsap.to('.cursor', {
      x: event.pageX-12,
      y: event.pageY-12
    });
    $(".cursor-point").css({
      left: event.pageX,
      top: event.pageY
    });
  });
  $("a, .btn-close").hover(function(){
    $(".cursor, .cursor-point").addClass("hover");
  }, function(){
    $(".cursor, .cursor-point").removeClass("hover");
  });

  $(".menu-link ul li a").hover(function(){
    $(".cursor, .cursor-point").addClass("menu");
  }, function(){
    $(".cursor, .cursor-point").removeClass("menu");
  });

  $(".menu-link ul li a span").hover(function(){
    $(".cursor, .cursor-point").addClass("menuhover");
  }, function(){
    $(".cursor, .cursor-point").removeClass("menuhover");
  });