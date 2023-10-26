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
                        <Nuxt-Link to="/">Ecommerce <i class=" fa-regular fa-star"></i></Nuxt-Link>
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
    <!-- Main section start here  -->
    <section class="main_content seller_sellon">
        <div class="container">
            <!-- ads part     -->
            <div class="row">
                <div class="col-12">
                    <Nuxt-link to="/seller-form">
                        <div class="sellon">
                            <img src="/images/Sell-on-Ecommerce.png" class="img-fluid" alt="">
                        </div>
                    </Nuxt-link>
                </div>
            </div>
            <!-- why sell on Ecommerce  -->
            <div class="row">
                <div class="col-12">
                    <div class="why_sell">
                        <div class="sell_title">
                            <h5>Why sale on Ecommerce?</h5>
                        </div>
                        <div class="row">
                            <div class="col-md-2 col-sm-6 col-6">
                                <div class="info_box">
                                    <p>Connect with More Buyers</p>
                                </div>
                            </div>
                            <div class="col-md-2 col-sm-6 col-6">
                                <div class="info_box">
                                    <p>Sell more products</p>
                                </div>
                            </div>
                            <div class="col-md-2 col-sm-6 col-6">
                                <div class="info_box">
                                    <p>Top notch seller support</p>
                                </div>
                            </div>
                            <div class="col-md-2 col-sm-6 col-6">
                                <div class="info_box">
                                    <p>Expert product delivery</p>
                                </div>
                            </div>
                            <div class="col-md-2 col-sm-6 col-6">
                                <div class="info_box">
                                    <p>Improve revenue</p>
                                </div>
                            </div>
                            <div class="col-md-2 col-sm-6 col-6">
                                <div class="info_box">
                                    <p>Free online/offline training</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- testimonial part start here  -->
            <div class="row">
                <div class="col-12">
                    <div class="testimonial">
                        <div class="sell_title">
                            <h5>Testimonial</h5>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="video_story">
                                    <iframe src="https://www.youtube.com/embed/Dx7uwcaDd60" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="story_text">
                                    <p>Selling on Ecommerce has been very rewarding with higher turnover and good profit. <br>
                                        - Amit & Rajat's</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- how it work  -->
            <div class="row">
                <div class="col-12">
                    <div class="how_work">
                        <div class="col-12">
                            <div class="sell_title">
                                <h5>How it work?</h5>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3 col-6">
                                <div class="how_it_works_item">
                                    <img src="/images/step-1.png" class="img-fluid" alt="step 1">
                                    <div class="details">
                                        <h5>Step 1: Register under 5 minutes</h5>
                                        <p>
                                            fill the registration form <br>
                                            submit the required documents<br>
                                            (a) business registration<br>
                                            (b) bank account details
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-6">
                                <div class="how_it_works_item">
                                    <img src="/images/step-2.png" class="img-fluid" alt="step 1">
                                    <div class="details">
                                        <h5>Step 2: Become an ecommerce expert</h5>
                                        <p>
                                            complete the dedicated new seller training <br>
                                            activate your seller center account to manage your shop
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-6">
                                <div class="how_it_works_item">
                                    <img src="/images/step-3.png" class="img-fluid" alt="step 1">
                                    <div class="details">
                                        <h5>Step 3: list your products and sell</h5>
                                        <p>upload your best selling products and start selling</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-6">
                                <div class="how_it_works_item">
                                    <img src="/images/step-4.png" class="img-fluid" alt="step 1">
                                    <div class="details">
                                        <h5>Step 4: Benefit from our promotions and marketing</h5>
                                        <p>get visibility from our campaigns/promotions
                                            and insight on best selling products. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-6 m-auto text-center">
                                <Nuxt-Link to="/seller-form" class="btn_cart " style="visibility: unset; padding: 10px;">Start Selleing</Nuxt-Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- product grid part start here  -->
            <sellOnFilter />
            <!-- product grid part end here  -->
        </div>
    </section>
    <!-- back to top button  -->
    <div class="back_top">
        <a href="#top"><i class="fa-solid fa-angle-up"></i></a>
    </div>
    <Footer />
</div>
</template>

<script>
import $ from 'jquery';
import Common_MobileSidebar from '~/components/Common_MobileSidebar.vue';
import Common_MiniTabNavbar from '~/components/Common_MiniTabNavbar.vue';
import Common_MobileSearchProduct from '~/components/Common_MobileSearchProduct.vue';
import sellOnFilter from '~/pages/sell-on-filter.vue';
export default {
    components: {
        Common_MobileSidebar,
        Common_MiniTabNavbar,
        Common_MobileSearchProduct,
        sellOnFilter,
    },
    head: {
        title: 'Sell On Ecommerce',
    },
}
</script>
