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

            <!-- bannar slider  -->
            <div class="store_bannar">
                <img src="/images/Slider_fold.jpg" class="img-fluid" alt="">
                <div class="store_details">
                    <div class="row">
                        <div class="col-sm-3 text-center m-auto justify-content-center">
                            <div class="img_box">
                                <img src="/images/addidas1.jpg" class="img-fluid" alt="">
                            </div>
                            <div class="ratings">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star "></span>
                            </div>
                        </div>
                        <div class="col-sm-9">
                            <div class="store_information">
                                <ul>
                                    <li>
                                        <a href="#"><i class="fa-solid fa-location-dot"></i> school road, wireless, Mohakhali, Dhaka </a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fa-solid fa-phone"></i> 444364434414</a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fa-regular fa-envelope"></i> school road, wireless, Mohakhali, Dhaka </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Top deals  -->
            <TopDeals />
            <!-- top deals end here  -->

            <!-- ads bannar 3 img  -->
            <div class="row">
                <div class="col-12">
                    <div class="deal_foryou">

                        <div class="row">
                            <div class="col-4">
                                <a href="#">
                                    <img src="/images/deal(1).jpg" class="img-fluid" alt="">
                                </a>
                            </div>
                            <div class="col-4">
                                <a href="#">
                                    <img src="/images/deal(2).jpg" class="img-fluid" alt="">
                                </a>
                            </div>
                            <div class="col-4">
                                <a href="#">
                                    <img src="/images/deal(1).jpg" class="img-fluid" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ads bannar 2 img  -->
            <div class="row">
                <div class="col-12">
                    <div class="deal_foryou">
                        <div class="row">
                            <div class="col-6">
                                <a href="#">
                                    <img src="/images/deal(1).jpg" class="img-fluid" alt="">
                                </a>
                            </div>
                            <div class="col-6">
                                <a href="#">
                                    <img src="/images/deal(2).jpg" class="img-fluid" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PhoneDeals />

            <div class="video_ads">
                <iframe src="https://www.youtube.com/embed/0pTqynKiki4" frameborder="0"></iframe>
            </div>
            <OfficialStoreFilter />
            <RecentView />

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
import RecentView from '~/components/RecentView.vue';
import TopDeals from '~/components/TopDeals.vue';
import PhoneDeals from '~/components/PhoneDeals.vue';
import OfficialStoreFilter from '~/pages/OfficialStoreFilter.vue';

export default {
    components: {
        Common_MobileSidebar,
        Common_MiniTabNavbar,
        Common_MobileSearchProduct,
        RecentView,
        TopDeals,
        PhoneDeals,
        OfficialStoreFilter

    },
    head: {
        title: 'Official Store',
    },
    mounted() {
        if (process.client) {

            // Now you can work with myElement
        }
    }
}
</script>
