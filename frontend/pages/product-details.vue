<template>
<div>
    <LogoAndPayment />
    <!-- navbar section start here  -->
    <section class="search_bar">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-lg-3 col-md-4 col-4">
                    <div class="logo nav_tab">
                        <!-- mobile view sidebar  -->
                        <button type="button" class="btn_menu mobile_view" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><i class="fa-solid fa-bars-staggered"></i></button>
                        <!-- sidebar offcanvas  -->
                        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                            <div class="offcanvas-header">
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Ecommerce</h5>
                            </div>
                            <div class="offcanvas-body">
                                <!-- offf canvas start here  -->
                                <Common_MobileSidebar />
                            </div>
                        </div>
                        <!-- mini tab view navbar here  -->
                        <Common_MiniTabNavbar />
                        <!-- nav end  -->
                        <Nuxt-link to="/">Ecommerce <i class=" fa-regular fa-star"></i></Nuxt-link>
                    </div>
                </div>
                <div class="col-6 desktop_view mini_tab_hide">
                    <form action="" class="">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" name="" id="" placeholder="Search Product" class="form-control"> <button type="button">Search</button>
                    </form>
                </div>
                <!-- desktop_view options  -->
                <DesktopViewOption />
                <!-- mobile view options  -->
                <div class="col-4 ms-auto  mobile_view">
                    <div class="mobile_nav_option">
                        <a class="search_form"><i class="fa-solid fa-magnifying-glass"></i></a>
                    </div>
                </div>
                <!-- search modal  -->
                <Common_MobileSearchProduct />
            </div>
        </div>
    </section>

    <section class="main_content">
        <div class="container">
            <div class="row">
                <!-- left side  -->
                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                    <div class="product_details_part">
                        <div class="row">
                            <!-- left part  -->
                            <div class="col-md-5">
                                <!-- image gallary or slider  -->
                                <div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="swiper mySwiper2 details_slide2 slider2">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide big_img">
                                            <img src="/images/product(1).jpg" />
                                        </div>
                                        <div class="swiper-slide big_img">
                                            <img src="/images/product(2).jpg" />
                                        </div>
                                        <div class="swiper-slide big_img">
                                            <img src="/images/product(3).jpg" />
                                        </div>
                                        <div class="swiper-slide big_img">
                                            <img src="/images/product(4).jpg" />
                                        </div>
                                        <div class="swiper-slide big_img">
                                            <img src="/images/product(5).jpg" />
                                        </div>
                                        <div class="swiper-slide big_img">
                                            <img src="/images/product(6).jpg" />
                                        </div>
                                        <div class="swiper-slide big_img">
                                            <img src="/images/product(7).jpg" />
                                        </div>
                                        <div class="swiper-slide big_img">
                                            <img src="/images/product(8).jpg" />
                                        </div>
                                        <div class="swiper-slide big_img">
                                            <img src="/images/product(9).jpg" />
                                        </div>
                                    </div>
                                    <div class="swiper-button-next"></div>
                                    <div class="swiper-button-prev"></div>
                                </div>
                                <div thumbsSlider="" class="swiper mySwiper details_slide slider1">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <img src="/images/product(1).jpg" />
                                        </div>
                                        <div class="swiper-slide">
                                            <img src="/images/product(2).jpg" />
                                        </div>
                                        <div class="swiper-slide">
                                            <img src="/images/product(3).jpg" />
                                        </div>
                                        <div class="swiper-slide">
                                            <img src="/images/product(4).jpg" />
                                        </div>
                                        <div class="swiper-slide">
                                            <img src="/images/product(5).jpg" />
                                        </div>
                                        <div class="swiper-slide">
                                            <img src="/images/product(6).jpg" />
                                        </div>
                                        <div class="swiper-slide">
                                            <img src="/images/product(7).jpg" />
                                        </div>
                                        <div class="swiper-slide">
                                            <img src="/images/product(8).jpg" />
                                        </div>
                                        <div class="swiper-slide">
                                            <img src="/images/product(9).jpg" />
                                        </div>
                                    </div>
                                </div>
                                <!-- image slider end here  -->
                                <div class="social_share">
                                    <h5>Share This Product</h5>
                                    <ul>
                                        <li>
                                            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- right part  -->
                            <div class="col-md-7">
                                <div class="pro_info">
                                    <div class="badgeses">
                                        <div>
                                            <span>Official store</span>
                                            <strong>free delivery</strong>
                                            <span style="background-color: red;"><a href="affiliate.html" style="color: #fff;">Click to Get Your affiliate link</a></span>
                                        </div>
                                        <button> <i class="fa-regular fa-heart"></i></button>
                                    </div>
                                    <div class="details_title">
                                        <h1>Samsung Galaxy A14 6.6" 4GB RAM/128GB ROM Android 13 - Black</h1>
                                        <h6>Brand: <a href="#">Samsung</a>|<a href="#">Similer product from samsung </a></h6>
                                    </div>
                                    <div class="price_div">
                                        <h5>Tk2,000 <p> <strike>TK 1,500</strike></p> <span>-8%</span></h5>
                                        <p>in stock</p>
                                    </div>
                                    <div class="ratings_pro">
                                        <p>+shipping Tk 50 In Dhaka</p>
                                        <div class="d-flex align-items-center">
                                            <ul class="ratingW">
                                                <li class="on"><a href="javascript:void(0);">
                                                        <div class="star"></div>
                                                    </a></li>
                                                <li class="on"><a href="javascript:void(0);">
                                                        <div class="star"></div>
                                                    </a></li>
                                                <li class="on"><a href="javascript:void(0);">
                                                        <div class="star"></div>
                                                    </a></li>
                                                <li><a href="javascript:void(0);">
                                                        <div class="star"></div>
                                                    </a></li>
                                                <li><a href="javascript:void(0);">
                                                        <div class="star"></div>
                                                    </a></li>
                                            </ul>
                                            <h6>( <a href="#feedback">188 verified ratings</a>)</h6>
                                        </div>
                                        <div class="d-flex align-items-end">
                                            <div class="size_attr">
                                                <label for="">Color:</label>
                                                <select name="" id="" required class="form-control">
                                                    <option value="">Black</option>
                                                    <option value="">White</option>
                                                    <option value=""> Red</option>
                                                    <option value=""> Blue</option>
                                                    <option value=""> Yellow</option>
                                                    <option value=""> navy Blue</option>
                                                </select>
                                            </div>
                                            <div class="size_attr">
                                                <label for="">Size:</label>
                                                <select name="" id="" required class="form-control">
                                                    <option value=""> XS</option>
                                                    <option value=""> S</option>
                                                    <option value=""> M</option>
                                                    <option value=""> L</option>
                                                    <option value=""> XL</option>
                                                    <option value=""> XXL</option>
                                                </select>
                                            </div>
                                            <div class="number">
                                                <span class="minus">-</span>
                                                <input type="text" value="1" />
                                                <span class="plus">+</span>
                                            </div>
                                        </div>
                                        <button type="button" class="btn_cart" style="visibility: unset;"><i class="fa-solid fa-cart-shopping"></i>Add to Cart </button>
                                    </div>
                                    <div class="also_buy">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <h6>You can also buy:</h6>
                                            <a href="#">Details</a>
                                        </div>
                                        <div class="buy_sugg">
                                            <div class="pro_insurance">
                                                <div>
                                                    <img src="/images/product(2).jpg" alt="">
                                                </div>
                                                <div>
                                                    <h4>Ecommerce Protect - Device Insurance</h4>
                                                    <p>+ TK 1,000</p>
                                                </div>
                                            </div>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <h3>total </h3>
                                                    <span>3000</span>
                                                </div>
                                                <div>
                                                    <button type="button" class="btn_cart" style="visibility: unset;">BUY BOTH</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="promotion">
                                        <h4>Promotions</h4>
                                        <ul>
                                            <li>
                                                <a href="#"><i class="fa-solid fa-shield-halved"></i>Need extra money? Loan up to N500,000 on the ECOMMERCEPay Android app.</a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="fa-solid fa-shield-halved"></i>Enjoy cheaper shipping fees when you select a PickUp Station at checkout.</a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="fa-solid fa-shield-halved"></i>Transfer up to N200,000 to any bank in Nigeria for FREE!</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="report">
                                <a href="#">Report Incorrect product information</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- right sidebar    -->
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div class="right_sidebar_top">
                        <div class="return_div">
                            <div class="side_title">
                                <h5>Delivery Returns</h5>
                            </div>
                            <h6>Ecommerce Express</h6>
                            <p>Free delivery on thousands of products in Lagos, Ibadan & Abuja Details</p>
                        </div>
                        <div class="location_div">
                            <div class="side_title">
                                <h5>Choose Your Location</h5>
                            </div>
                            <select name="" id="">
                                <option value="">Banani</option>
                                <option value="">Mohakhali</option>
                                <option value="">Gulshan</option>
                                <option value="">Rampura</option>
                                <option value="">Banasee</option>
                                <option value="">Malibag</option>
                                <option value="">Khilgaon</option>
                                <option value="">Mirpur</option>
                                <option value="">Gabtoli</option>
                            </select>

                            <select name="" id="">
                                <option value="">Road-1 Banani</option>
                                <option value="">Road-1Mohakhali</option>
                                <option value="">Road-1Gulshan</option>
                                <option value="">Road-1Rampura</option>
                                <option value="">Road-1Banasee</option>
                                <option value="">Road-1Malibag</option>
                                <option value="">Road-1Khilgaon</option>
                                <option value="">Road-1Mirpur</option>
                                <option value="">Road-1Gabtoli</option>
                            </select>

                            <div class="delivery_location">
                                <ul>
                                    <li>
                                        <div>
                                            <i class="fa-solid fa-truck"></i>
                                        </div>
                                        <div>
                                            <div class="d-flex justify-content-between">
                                                <h6>Door Delivery</h6>
                                                <a href="#">Details </a>
                                            </div>
                                            <h5>Delivery TK 1,770</h5>
                                            <p>Ready for delivery between 18 August & 22 August when you order within next 6hrs 1mins</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <i class="fa-solid fa-truck"></i>
                                        </div>
                                        <div>
                                            <div class="d-flex justify-content-between">
                                                <h6>Door Delivery</h6>
                                                <a href="#">Details </a>
                                            </div>
                                            <h5>Delivery TK 1,770</h5>
                                            <p>Ready for delivery between 18 August & 22 August when you order within next 6hrs 1mins</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div class="seller_div">
                            <div class="side_title">
                                <h5>Deller Information</h5>
                                <a href="#"><i class="fa-solid fa-chevron-right"></i></a>
                            </div>
                            <h3>SUN WORLDWIDE DISTRIBUTIONS LIMITED-AC</h3>
                            <div class="row">
                                <div class="col">
                                    <p>86% seller score</p>
                                    <p>1k Followers</p>
                                </div>
                                <div class="col">
                                    <button type="button" class="btn_follow">Follow </button>
                                </div>
                            </div>
                        </div>
                        <div class="performance_div">
                            <div class="side_title">
                                <h5>Seller Performance</h5>
                                <a type="modal" id="info"><i class="fa-solid fa-circle-info"></i></a>
                                <!-- seller performance modal  -->
                                <div class="info_modal">
                                    <div class="d-flex justify-content-between">
                                        <div>
                                            <h6>Seller Performance</h6>
                                        </div>
                                        <div><i class="fa-solid fa-x" type="button" style="cursor: pointer;" id="modal_close"></i></div>
                                    </div>
                                    <div>
                                        <p>To help you decide on the best offer we have several key metrics to help you with your decision</p>
                                    </div>
                                </div>
                            </div>
                            <ul>
                                <li>
                                    <i class="fa-solid fa-star"></i>
                                    <p>Order Fulfillment Rate: <strong>Excellent</strong></p>
                                </li>
                                <li>
                                    <i class="fa-solid fa-star"></i>
                                    <p>Order Fulfillment Rate: <strong>Excellent</strong></p>
                                </li>
                                <li>
                                    <i class="fa-solid fa-star"></i>
                                    <p>Order Fulfillment Rate: <strong>Excellent</strong></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!-- details section -->
    <section class="details_scrollspay">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <!-- details part start here  -->
                    <div class="row">
                        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                            <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">
                                <div class="product_details" id="details">
                                    <div class="side_title">
                                        <h5>Product Details</h5>
                                    </div>
                                    <img src="/images/details.jpg" class="img-fluid" alt="">
                                    <p>
                                        LONG LASTING BATTERY: Stay ready for today’s surprises with the fast charging, long-lasting battery of Galaxy A14 4G; Confidently handle work while on the go and play your favorite games with a battery that gives your charger a break

                                        4G AT YOUR FINGERTIPS: Enjoy playing games and streaming with virtually lag-free 4G and the fast, reliable processor of Galaxy A14 4G; Download and share content quickly with a phone that keeps up with the speed of life

                                        EXPANDABLE STORAGE: Live and relive your favorite experiences with the expandable memory of Galaxy A14 4G; Savor those unforgettable moments with 128GB of internal memory and room for up to 1TB more when you add a microSD card

                                        VERSATILE CAMERA EXPERIENCE: Capture amazing selfies with a 13MP front camera and get all the action — whether that’s the bright smiles of friends or stunning sunsets — in high res that will take people’s breath away

                                        INFINITE DISPLAY: Press play and experience games and videos like never before with a 6.6" edge-to-edge screen; Catch all the details and an adaptive 90Hz Infinity-V FHD+ display that makes enjoying your favorite shows easy

                                        STYLISH, DURABLE, PRACTICAL: Take on your day confidently with the durable, modern design of Galaxy A14 4G; Fit with a simple yet classy finish, it’s sure to impress and slide in and out of your hands with ease

                                        VIDEOS CALLS GO WITH YOU: Keep your group conversations going with Google Meet when switching devices; Use Google Meet to start a video chat on your Tab, and then continue the call on your phone as you head out the door

                                        FAST FILE TRANSFERS: Send your files to another Galaxy device with Quick Share; Transfer a photo or video from your Galaxy phone, Tab or Book to other nearby Galaxy devices and vice versa; It’s super easy to move files
                                    </p>
                                </div>

                                <div class="spacification" id="spacification">
                                    <div class="side_title">
                                        <h5>Specification</h5>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="card">
                                                <div class="card-header">
                                                    <h6>KEY FEATURES</h6>
                                                </div>
                                                <div class="card-body">
                                                    <ul>
                                                        <li>Model Name A14 4G</li>
                                                        <li>Operating System Android 13.0</li>
                                                        <li>Cellular Technology 4G</li>
                                                        <li>Memory Storage Capacity 128 GB</li>
                                                        <li>Connectivity Technology Bluetooth, Wi-Fi, USB</li>
                                                        <li>Color Black</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="card">
                                                <div class="card-header">
                                                    <h6>SPECIFICATIONS</h6>
                                                </div>
                                                <div class="card-body">
                                                    <ul>
                                                        <li>SKU: SA948MP3WY8VYNAFAMZ</li>
                                                        <li>Product Line: Sun World Distributions Limited - AC</li>
                                                        <li>Model: A14</li>
                                                        <li>Weight (kg): 0.5</li>
                                                        <li>Color: Black</li>
                                                        <li>Shop Type: ECOMMERCE Mall</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <!-- customer recent views  -->

                                <div class="feedback" id="feedback">
                                    <div class="side_title">
                                        <h5>Varified Customer Feedback</h5>
                                        <a href="customer-review.html">See All <i class="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <h2>Varified ratings(147)</h2>
                                            <div class="box_rating">
                                                <h3>4.5/5</h3>
                                                <div class="ratings">
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star"></span>
                                                    <span class="fa fa-star"></span>
                                                </div>
                                                <p>147 verified ratings</p>
                                            </div>
                                            <div class="rate_count">
                                                <p>5</p>
                                                <i class="fa fa-star checked"></i>
                                                <span>(106)</span>
                                                <div class="progress">
                                                    <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div class="rate_count">
                                                <p>4</p>
                                                <i class="fa fa-star checked"></i>
                                                <span>(106)</span>
                                                <div class="progress">
                                                    <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div class="rate_count">
                                                <p>3</p>
                                                <i class="fa fa-star checked"></i>
                                                <span>(106)</span>
                                                <div class="progress">
                                                    <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div class="rate_count">
                                                <p>2</p>
                                                <i class="fa fa-star checked"></i>
                                                <span>(106)</span>
                                                <div class="progress">
                                                    <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div class="rate_count">
                                                <p>1</p>
                                                <i class="fa fa-star checked"></i>
                                                <span>(106)</span>
                                                <div class="progress">
                                                    <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-8 right_side_rate">
                                            <h2>COMMENTS FROM VERIFIED PURCHASES(51)</h2>
                                            <div>
                                                <div class="ratings">
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star"></span>
                                                    <span class="fa fa-star"></span>
                                                </div>
                                                <h5>Awsome</h5>
                                                <p>awesome</p>
                                                <div class="d-flex justify-content-between">
                                                    <p>04-08-2023 By <a href="#">User </a></p>
                                                    <p class="varify_tag"><i class="fa fa-check"></i>Varified Customer</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="ratings">
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star"></span>
                                                    <span class="fa fa-star"></span>
                                                </div>
                                                <h5>Awsome</h5>
                                                <p>awesome</p>
                                                <div class="d-flex justify-content-between">
                                                    <p>04-08-2023 By <a href="#">User </a></p>
                                                    <p class="varify_tag"><i class="fa fa-check"></i>Varified Customer</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="ratings">
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star"></span>
                                                    <span class="fa fa-star"></span>
                                                </div>
                                                <h5>Awsome</h5>
                                                <p>awesome</p>
                                                <div class="d-flex justify-content-between">
                                                    <p>04-08-2023 By <a href="#">User </a></p>
                                                    <p class="varify_tag"><i class="fa fa-check"></i>Varified Customer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- You may like this  -->

                            </div>

                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 ">
                            <div class="sidebar_here">
                                <div id="list-example" class="list-group id_list">
                                    <a class="list-group-item list-group-item-action active" href="#details"><i class="fa-regular fa-file-lines"></i>Product details </a>
                                    <a class="list-group-item list-group-item-action" href="#spacification"><i class="fa-solid fa-list"></i>Specification</a>
                                    <a class="list-group-item list-group-item-action" href="#feedback"><i class="fa-regular fa-message"></i>Varified Customer Feedback</a>
                                </div>
                                <div class="pro_cart">
                                    <div class="d-flex">
                                        <div><img src="/images/product(1).jpg" alt=""></div>
                                        <div>
                                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo iure harum praesentium temporibus unde mollitia voluptate obcaecati dignissimos rerum numquam.</h3>
                                            <p>TK 2,000</p>
                                        </div>
                                    </div>
                                    <button class="btn_cart" type="button"> <i class="fa-solid fa-cart-shopping"></i>Add to Cart </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <!-- more items for this seller  -->
                    <div class="row">
                        <div class="col-12">
                            <div class="top_selling">
                                <div class="row mb-2">
                                    <div class="col-6">
                                        <div class="sell_title">
                                            <h5>More items from this seller </h5>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <RecentView />
                </div>
            </div>
        </div>
    </section>

</div>
</template>
