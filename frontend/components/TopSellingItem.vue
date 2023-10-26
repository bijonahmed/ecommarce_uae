<template>
<div>
    <div class="row">
        <div class="col-12">
            <div class="top_selling">
                <div class="row mb-2">
                    <div class="col-6">
                        <div class="sell_title">
                            <h5>Top Selling items</h5>
                        </div>
                    </div>
                </div>
                <div class="">
                    <div class="owl-carousel owl-carousel_s product_slider">
                        <div class="swiper-slide">
                            <a href="product-details.html">
                                <div class="sell_itm">
                                    <img src="/images/product(1).jpg" class=" img-fluid" alt="">
                                    <span>-10%</span>
                                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nam nostrum! Qui ad quos provident doloremque nostrum maiores a vitae.</h5>
                                    <h6> 2,000TK</h6>
                                    <h6><strike> 2,000TK</strike></h6>
                                </div>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="product-details.html">
                                <div class="sell_itm">
                                    <img src="/images/product(2).jpg" class=" img-fluid" alt="">
                                    <span>-100%</span>
                                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nam nostrum! Qui ad quos provident doloremque nostrum maiores a vitae.</h5>
                                    <h6> 2,000TK</h6>
                                    <h6><strike> 2,000TK</strike></h6>
                                </div>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="product-details.html">
                                <div class="sell_itm">
                                    <img src="/images/product(3).jpg" class=" img-fluid" alt="">
                                    <span>-59%</span>
                                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nam nostrum! Qui ad quos provident doloremque nostrum maiores a vitae.</h5>
                                    <h6> 2,000TK</h6>
                                    <h6><strike> 2,000TK</strike></h6>
                                </div>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="product-details.html">
                                <div class="sell_itm">
                                    <img src="/images/product(4).jpg" class=" img-fluid" alt="">
                                    <span>-55%</span>
                                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nam nostrum! Qui ad quos provident doloremque nostrum maiores a vitae.</h5>
                                    <h6> 2,000TK</h6>
                                    <h6><strike> 2,000TK</strike></h6>
                                </div>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="product-details.html">
                                <div class="sell_itm">
                                    <img src="/images/product(5).jpg" class=" img-fluid" alt="">
                                    <span>-50%</span>
                                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nam nostrum! Qui ad quos provident doloremque nostrum maiores a vitae.</h5>
                                    <h6> 2,000TK</h6>
                                    <h6><strike> 2,000TK</strike></h6>
                                </div>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="product-details.html">
                                <div class="sell_itm">
                                    <img src="/images/product(6).jpg" class=" img-fluid" alt="">
                                    <span>-80%</span>
                                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nam nostrum! Qui ad quos provident doloremque nostrum maiores a vitae.</h5>
                                    <h6> 2,000TK</h6>
                                    <h6><strike> 2,000TK</strike></h6>
                                </div>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="product-details.html">
                                <div class="sell_itm">
                                    <img src="/images/product(7).jpg" class=" img-fluid" alt="">
                                    <span>-90%</span>
                                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nam nostrum! Qui ad quos provident doloremque nostrum maiores a vitae.</h5>
                                    <h6> 2,000TK</h6>
                                    <h6><strike> 2,000TK</strike></h6>
                                </div>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="product-details.html">
                                <div class="sell_itm">
                                    <img src="/images/product(8).jpg" class=" img-fluid" alt="">
                                    <span>-10%</span>
                                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nam nostrum! Qui ad quos provident doloremque nostrum maiores a vitae.</h5>
                                    <h6> 2,000TK</h6>
                                    <h6><strike> 2,000TK</strike></h6>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    mounted() {
        this.$nextTick(function () {
            $('.owl-carousel_s').owlCarousel({
                items: 6, // Adjust the number of items to your needs
                nav: true, // Enable navigation buttons
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
      },
            });
            
        });
    },
};
</script>
<style>
 
</style>