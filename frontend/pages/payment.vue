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
            <div class="row mt-2">
                <div class="col-md-6 m-auto text-center">
                    <div class="alert alert-warning" role="alert" style="
                padding: 5px;
                font-size: 12px;
            ">
                        <i class="fa-solid fa-circle-exclamation"></i> Collect payment voucher & get extra savings on your purchase!
                    </div>
                </div>
            </div>

            <!-- payment methods  -->
            <div class="row">
                <div class="col-lg-8">
                    <div class="payment_medthods">
                        <div class="row">
                            <div class="col-12">
                                <h3>Select Payment Method</h3>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-2 col-md-3 col-sm-4 col-4">
                                <div class="method">
                                    <button type="button" class="cards btn_high">
                                        <i class="fa-brands fa-cc-visa"></i>
                                        <h6>Pay with Card</h6>
                                    </button>
                                    <!-- popup -->
                                    <div class="card_popup card_popups">
                                        <div class="form_box">
                                            <div class="row">
                                                <div class="col-6 ms-auto text-end"><button type="button" class="btn_edit card_close " style="border: none;"><i class="fa-solid fa-x" style="font-size: 12px;"></i></button></div>
                                            </div>
                                            <form action="">
                                                <input type="text" class="form-control" placeholder="Card Number">
                                                <input type="text" class="form-control" placeholder="Name On Card">
                                                <div class="row">
                                                    <div class="col-6"><input type="text" class="form-control" placeholder="Expiry Date "></div>
                                                    <div class="col-6"><input type="text" class="form-control" placeholder="CVV"></div>
                                                </div>
                                                <button type="submit" class="btn_cart" style="visibility: unset; background-color: #900c3f;">Pay Now</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-4 col-4">
                                <div class="method">
                                    <button type="button" class="cashs btn_high">
                                        <i class="fa-solid fa-money-bill"></i>
                                        <h6>Cash On Delivery </h6>
                                    </button>
                                    <!-- popup -->
                                    <div class="card_popup cashs_pop">
                                        <div class="form_box">
                                            <div class="row">
                                                <div class="col-6 ms-auto text-end"><button type="button" class="btn_edit card_close " style="border: none;"><i class="fa-solid fa-x" style="font-size: 12px;"></i></button></div>
                                            </div>
                                            <form action="">
                                                <button type="submit" class="btn_cart" style="visibility: unset; background-color: #900c3f;">Confirm Order</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-2 col-md-3 col-sm-4 col-4">
                                <div class="method">
                                    <button type="button" class="cards btn_high">
                                        <i class="fa-brands fa-cc-visa"></i>
                                        <h6>Pay with Card</h6>
                                    </button>
                                    <!-- popup -->
                                    <div class="card_popup card_popups">
                                        <div class="form_box">
                                            <div class="row">
                                                <div class="col-6 ms-auto text-end"><button type="button" class="btn_edit card_close " style="border: none;"><i class="fa-solid fa-x" style="font-size: 12px;"></i></button></div>
                                            </div>
                                            <form action="">
                                                <input type="text" class="form-control" placeholder="Card Number">
                                                <input type="text" class="form-control" placeholder="Name On Card">
                                                <div class="row">
                                                    <div class="col-6"><input type="text" class="form-control" placeholder="Expiry Date "></div>
                                                    <div class="col-6"><input type="text" class="form-control" placeholder="CVV"></div>
                                                </div>
                                                <button type="submit" class="btn_cart" style="visibility: unset; background-color: #900c3f;">Pay Now</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-4 col-4">
                                <div class="method">
                                    <button type="button" class="cashs btn_high">
                                        <i class="fa-solid fa-money-bill"></i>
                                        <h6>Cash On Delivery </h6>
                                    </button>
                                    <!-- popup -->
                                    <div class="card_popup cashs_pop">
                                        <div class="form_box">
                                            <div class="row">
                                                <div class="col-6 ms-auto text-end"><button type="button" class="btn_edit card_close " style="border: none;"><i class="fa-solid fa-x" style="font-size: 12px;"></i></button></div>
                                            </div>
                                            <form action="">
                                                <button type="submit" class="btn_cart" style="visibility: unset; background-color: #900c3f;">Confirm Order</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="order_summary">
                        <h1>Order Summary</h1>
                        <div class="d-flex justify-content-between align-items-center">
                            <p>Subtotal (1 Items and shipping fee included)</p>
                            <p>110 TK</p>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <h6>Toatal Ammount</h6>
                            <h6>110 TK</h6>
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
export default {

    head: {
        title: 'Payment',
    },

}
</script>
