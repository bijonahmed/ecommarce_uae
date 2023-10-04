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
    <!-- Main section start here  -->
    <section class="main_content ">
        <div class="container">
            <!-- bannar  -->
            <div class="aff_bannar">
                <div class="row">
                    <div class="col-md-6">
                        <h1>Affiliate</h1>
                        <h2>Program</h2>
                        <p>If you are a Content Creator, Influencer or Affiliate join us to earn commissions.</p>
                        <Nuxt-link to="/affiliate/affiliate-programe-register" class="btn_login">Join now </Nuxt-link>
                    </div>
                    <div class="col-md-6">
                        <img src="/images/influencer.jpg" class="img-fluid" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- who can register  -->
    <div class="who_can_register">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="programme_title">
                        <span></span>
                        <h5>Who can register? </h5>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 col-12">
                    <div class="who_can">
                        <img src="/images/micro.jpg" class="img-fluid" alt="">
                        <h2>Micro-Influencer / Creator</h2>
                        <p>You identify yourself as a content creator who loves to give recommendations and reviews to your loyal followers (minimum 5K).</p>
                    </div>
                </div>
                <div class="col-md-4 col-12">
                    <div class="who_can">
                        <img src="/images/mega.jpg" class="img-fluid" alt="">
                        <h2>Mega-Influencer</h2>
                        <p>You are an individual with huge and well-established social media followers, your posts are enough to make your followers want to purchase that item as soon as possible!</p>
                    </div>
                </div>
                <div class="col-md-4 col-12">
                    <div class="who_can">
                        <img src="/images/affi.jpg" class="img-fluid" alt="">
                        <h2>Affiliate</h2>
                        <p>You have a Website or Social Media Page that allows you to operate in the fields of Cashback, Deals, Reviews, Email Marketing, Loyalty Programs, Coupons, Price Comparisons, or similar ventures.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- How dose it work-->
    <div class="who_can_register bg-light">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="programme_title">
                        <span></span>
                        <h5>How does it work? </h5>
                    </div>
                </div>
            </div>
            <div class="row ">
                <div class="col-md-4 col-12">
                    <div class="who_can">
                        <img src="/images/register.svg" class="img-fluid" alt="">
                        <h2>Register </h2>
                        <p>tart working immediately if you are an affiliate or receive approval within a week if you're a content creator / influencer.</p>
                    </div>
                </div>
                <div class="col-md-4 col-12">
                    <div class="who_can">
                        <img src="/images/advertise.svg" class="img-fluid" alt="">
                        <h2>Advertise</h2>
                        <p>Promote Ecommerce’s various campaigns and enjoy tracking links up to 7 days as well as discount codes.</p>
                    </div>
                </div>
                <div class="col-md-4 col-12">
                    <div class="who_can">
                        <img src="/images/earn.svg" class="img-fluid" alt="">
                        <h2>Earn</h2>
                        <p>Get compensated for your sales with the payment method you choose at the end of every month.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- How dose it work-->
    <div class="who_can_register ">
        <div class="container ">
            <div class="row">
                <div class="col-12">
                    <div class="programme_title">
                        <span></span>
                        <h5>What are our partners saying? </h5>
                    </div>
                </div>
            </div>
            <div class=" owl-carousel testimonial">
                <div class="partner_says">
                    <i class="fa-solid fa-quote-left"></i>
                    <p>I've been working with ECOMMERCE since 2016. ECOMMERCE is one of the region's most successful ecommerce in Egypt and one of the top companies that focuses on customer satisfaction. I am glad and honoured to have been a part of this journey from the start, and we are still moving forward.</p>
                    <h6>Aliaa Hany - Egyptian Influencer</h6>
                </div>
                <div class="partner_says">
                    <i class="fa-solid fa-quote-left"></i>
                    <p>I am very satisfied with my collaboration with ECOMMERCE’s professional team and always listening. I am very pleased with the availability of the products and the speed of delivery. My subscribers are always looking for a promotional code, which encourages me to continue to collaborate with great pleasure.</p>
                    <h6>Donia Ellouze - Tunisian Creator</h6>
                </div>
                <div class="partner_says">
                    <i class="fa-solid fa-quote-left"></i>
                    <p>We work with the KOL program for quite some time. From the very beginning, it was and still is a very pleasant journey. Their affiliate panel is neat and clear. We can always count on my account manager who is ready to help and resolve all doubts. We are looking forward to the future partnership and We recommend working with ECOMMERCE to anyone.</p>
                    <h6>Picodi - Global Affiliate Partner</h6>
                </div>
            </div>
        </div>
    </div>
    <div class="what_r_waiting">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>What are you waiting for?</h1>
                    <Nuxt-link to="/affiliate/affiliate-programe-register" class="btn_login">Join now </Nuxt-link>
                </div>
            </div>
        </div>
    </div>
    <!-- END Main Section here -->
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
export default {
    components: {
        Common_MobileSidebar,
        Common_MiniTabNavbar,
        Common_MobileSearchProduct,
    },
    head: {
        title: 'Affliliate Programe',
    },
}
</script>
