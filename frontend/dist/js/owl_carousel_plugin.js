
$(document).ready(function(){
    $(".slider_part").owlCarousel({
      items: 1,
      loop: true,
      margin: 5,
      // dots:false,
      nav:false,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true
    });
    $(".store_add").owlCarousel({
      items: 1,
      loop: true,
      margin: 5,
      dots:false,
      nav:false,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true
    });

    
    $("product_slider").owlCarousel({
      items: 6,
      loop: false,
      margin: 5,
      dots:false,
      nav:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:2,
              nav:true
          },
          425:{
              items:4,
              nav:false
          },
          1000:{
              items:6,
              nav:true,
              loop:false
          }
      }
    });
  });
