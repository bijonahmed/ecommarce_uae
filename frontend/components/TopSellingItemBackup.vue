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
    
                    <div class="row resources ">
                        <div class="container" id="resource-slider">
                            <button class='arrow prev'></button>
                            <button class='arrow next'></button>
                            <div class="resource-slider-frame">
    
                                <div class="resource-slider-item" v-for="item in toproducts" :key="item.id">
                                    <div class="resource-slider-inset">
                                        <div class="resource">
                                            <a href="/whitepapers/securitycenter-continuous-view-support-for-the-nist-cybersecurity-resource-slider-framework-dashboards">
                                                <img :src="item.thumnail">
                                            </a>
                                            <footer class="hmt small">Whitepaper</footer>
                                            <header>
                                                <h4 class="hmt">
                                                    <a href="/whitepapers/securitycenter-continuous-view-support-for-the-nist-cybersecurity-resource-slider-framework-dashboards">First thingy</a></h4>
                                            </header>
                                        </div>
                                    </div>
                                </div>
     
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
    </template>
    
    <script>
    //import $ from 'jquery';
    //import 'owl.carousel/dist/assets/owl.carousel.css';
    //import 'owl.carousel';
    
    export default {
        data() {
            return {
                toproducts: []
            };
        },
        async mounted() {
    this.initOwlCarousel();
            try {
                const response = await this.$axios.get(`/unauthenticate/topSellingProducts`); // Replace with your actual API endpoint
                // this.$nextTick(() => {
                // this.topSellProducts();
                this.toproducts = response.data; // Assuming the API response is an array of products
    
                //  });
            } catch (error) {
                console.error('Error fetching data:', error);
                this.toproducts = []; // Set products to an empty array or handle the error as needed
            }
    
           
    
        },
        
        methods: {
            topSellProducts() {
                // Simulated asynchronous data fetching (replace with actual fetch)
                this.$axios.get(`/unauthenticate/topSellingProducts`).then(response => {
                    this.products = response.data;
                });
            },
            initOwlCarousel() {
                function defer(method) {
                    if (window.jQuery)
                        method();
                    else
                        setTimeout(function () {
                            defer(method)
                        }, 50);
                }
                defer(function () {
                    (function ($) {
    
                        function doneResizing() {
                            var totalScroll = $('.resource-slider-frame').scrollLeft();
                            var itemWidth = $('.resource-slider-item').width();
                            var difference = totalScroll % itemWidth;
                            if (difference !== 0) {
                                $('.resource-slider-frame').animate({
                                    scrollLeft: '-=' + difference
                                }, 500, function () {
                                    // check arrows
                                    checkArrows();
                                });
                            }
                        }
    
                        function checkArrows() {
                            var totalWidth = $('#resource-slider .resource-slider-item').length * $('.resource-slider-item').width();
                            var frameWidth = $('.resource-slider-frame').width();
                            var itemWidth = $('.resource-slider-item').width();
                            var totalScroll = $('.resource-slider-frame').scrollLeft();
    
                            if (((totalWidth - frameWidth) - totalScroll) < itemWidth) {
                                $(".next").css("visibility", "hidden");
                            } else {
                                $(".next").css("visibility", "visible");
                            }
                            if (totalScroll < itemWidth) {
                                $(".prev").css("visibility", "hidden");
                            } else {
                                $(".prev").css("visibility", "visible");
                            }
                        }
    
                        $('.arrow').on('click', function () {
                            var $this = $(this),
                                width = $('.resource-slider-item').width(),
                                speed = 500;
                            if ($this.hasClass('prev')) {
                                $('.resource-slider-frame').animate({
                                    scrollLeft: '-=' + width
                                }, speed, function () {
                                    // check arrows
                                    checkArrows();
                                });
                            } else if ($this.hasClass('next')) {
                                $('.resource-slider-frame').animate({
                                    scrollLeft: '+=' + width
                                }, speed, function () {
                                    // check arrows
                                    checkArrows();
                                });
                            }
                        }); // end on arrow click
    
                        $(window).on("load resize", function () {
                            checkArrows();
                            $('#resource-slider .resource-slider-item').each(function (i) {
                                var $this = $(this),
                                    left = $this.width() * i;
                                $this.css({
                                    left: left
                                })
                            }); // end each
                        }); // end window resize/load
    
                        var resizeId;
                        $(window).resize(function () {
                            clearTimeout(resizeId);
                            resizeId = setTimeout(doneResizing, 500);
                        });
    
                    })(jQuery); // end function
                });
            },
        },
    
    };
    </script>
    
    <style>
    #resource-slider {
        position: relative;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 13em;
        margin: auto;
        border-radius: 3px;
        background: #fff;
        border: 1px solid #DDD;
        overflow: hidden;
    }
    
    #resource-slider .arrow {
        cursor: pointer;
        position: absolute;
        width: 2em;
        height: 100%;
        padding: 0;
        margin: 0;
        outline: 0;
        background: transparent;
    }
    
    #resource-slider .arrow:hover {
        background: rgba(0, 0, 0, 0.1);
    }
    
    #resource-slider .arrow:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 0.75em;
        height: 0.75em;
        margin: auto;
        border-style: solid;
    }
    
    #resource-slider .prev {
        left: 0;
        bottom: 0;
    }
    
    #resource-slider .prev:before {
        left: 0.25em;
        border-width: 3px 0 0 3px;
        border-color: #333 transparent transparent #333;
        transform: rotate(-45deg);
    }
    
    #resource-slider .next {
        right: 0;
        bottom: 0;
    }
    
    #resource-slider .next:before {
        right: 0.25em;
        border-width: 3px 3px 0 0;
        border-color: #333 #333 transparent transparent;
        transform: rotate(45deg);
    }
    
    #resource-slider .resource-slider-frame {
        position: absolute;
        top: 0;
        left: 2em;
        right: 2em;
        bottom: 0;
        border-left: 0.25em solid transparent;
        border-right: 0.25em solid transparent;
        overflow: hidden;
    }
    
    #resource-slider .resource-slider-item {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 25%;
        height: 100%;
    }
    
    #resource-slider .resource-slider-inset {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0.5em 0.25em;
        overflow: hidden;
    }
    
    @media (max-width: 60em) {
        #resource-slider .resource-slider-item {
            width: 33.33%;
        }
    
        #resource-slider {
            height: 16em;
        }
    }
    
    @media (max-width: 45em) {
        #resource-slider .resource-slider-item {
            width: 50%;
        }
    }
    
    @media (max-width: 30em) {
        #resource-slider .resource-slider-item {
            width: 100%;
        }
    
        #resource-slider {
            height: 19em;
        }
    }
    </style>
