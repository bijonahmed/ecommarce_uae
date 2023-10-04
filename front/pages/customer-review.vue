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

    <section class="main_content">
        <div class="container">
            <div class="row">
                <div class="col-12">

                    <div class="feedback" id="feedback">
                        <div class="side_title">
                            <h5><Nuxt-link to="/" style="padding: 0px 10px;"><i class="fa-solid fa-arrow-left"></i></Nuxt-link> Varified Customer Feedback</h5>

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
                        <div class="row">
                            <div class="col-12">
                                <div class="pagination">
                                    <ul>
                                        <li>
                                            <a href="#"> prv </a>
                                        </li>
                                        <li>
                                            <a href="#" class="active"> 1 </a>
                                        </li>
                                        <li>
                                            <a href="#"> 2 </a>
                                        </li>
                                        <li>
                                            <a href="#"> 3 </a>
                                        </li>
                                        <li>
                                            <a href="#"> next </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </section>

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
import RecentView from '~/components/RecentView.vue';
export default {
    components: {
        Common_MobileSidebar,
        Common_MiniTabNavbar,
        Common_MobileSearchProduct,
        RecentView
    },
    head: {
        title: 'Customer Review',
    },
    mounted() {

    }
}
</script>
