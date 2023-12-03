
      // officaial slider part start here 
      var swipers = new Swiper(".office_slide", {
        spaceBetween: 30,
        effect: "fade",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });



      // Product slider 
      const swiper = new Swiper('.pro_slider', {
      slidesPerView: 6,
      breakpoints: {
        0: {
          slidesPerView: 2
        },
        // when window width is >= 320px
        320: {
          slidesPerView: 4
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 4
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4
        },
        768:{
          
          slidesPerView: 6
        }
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
})
    