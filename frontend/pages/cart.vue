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
            <div class="row">
                <div class="col-xl-8 col-lg-8 col-md-12">
                    <div class="cart">
                        <div class="side_title">
                            <h5>Cart(2)</h5>
                        </div>
                        <!-- <div class="card_porduct">
                            <ul>
                                <li>
                                    <div class="row">
                                        <div class="col-8">
                                            <div class="img_title">
                                                <img src="images/product(1).jpg" class="img-fluid" alt="">
                                                <div>
                                                    <h1><Nuxt-Link to="/product-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sapiente placeat, sint asperiores nihil illo tenetur consectetur eaque ad dolor.</Nuxt-Link></h1>
                                                    <p>Seller: Ecommerce</p>
                                                    <span>In stock </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="cart_price">
                                                <strong>TK 2,000.00</strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-end">
                                        <div class=" p- me-1">
                                            <Button class="btn_cart" style="visibility: unset;"><i class="fa-solid fa-trash-can"></i>Remove</Button>
                                        </div>
                                        <div>
                                            <div class="number">
                                                <span class="minus">-</span>
                                                <input type="text" value="1" />
                                                <span class="plus">+</span>
                                            </div>
                                            <Button class="btn_cart mt-2" style="visibility: unset; background-color: #0C356A;">Update</Button>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="row">
                                        <div class="col-8">
                                            <div class="img_title">
                                                <img src="images/product(1).jpg" class="img-fluid" alt="">
                                                <div>
                                                    <h1><Nuxt-Link to="/product-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sapiente placeat, sint asperiores nihil illo tenetur consectetur eaque ad dolor.</Nuxt-Link></h1>
                                                    <p>Seller: Ecommerce</p>
                                                    <span>In stock </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="cart_price">
                                                <strong>TK 2,000.00</strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <div><Button class="btn_cart" style="visibility: unset;"><i class="fa-solid fa-trash-can"></i>Remove</Button></div>
                                        <div>
                                            <div class="number">
                                                <span class="minus">-</span>
                                                <input type="text" value="1" />
                                                <span class="plus">+</span>
                                            </div>
                                            <Button class="btn_cart mt-2" style="visibility: unset; background-color: #0C356A;">Update</Button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div> -->
                        <h2>Shopping Cart</h2>
                        <!-- <ul>
                            <li v-for="item in cart" :key="item.id">
                                {{ item.name }} - {{ item.price }}
                                <button @click="removeFromCart(item.id)">Remove</button>
                            </li>
                        </ul>
                        <button @click="clearCart">Clear Cart</button> -->

                    </div>
                    <!-- not included part start here  -->
                    <div class="cart not_included">
                        <div class="side_title">
                            <h5>Not included(2)</h5>
                        </div>
                        <div class="card_porduct">
                            <ul>
                                <li>
                                    <div class="row">
                                        <div class="col-8">
                                            <div class="img_title">
                                                <img src="images/product(1).jpg" class="img-fluid" alt="">
                                                <h3>Out of stock </h3>
                                                <div>
                                                    <h1>
                                                        <Nuxt-Link to="/product-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sapiente placeat, sint asperiores nihil illo tenetur consectetur eaque ad dolor.</Nuxt-Link>
                                                    </h1>
                                                    <p>Seller: Ecommerce</p>
                                                    <span>Out of stock </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="cart_price">
                                                <strong>TK 2,000.00</strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <div><Button class="btn_cart" style="visibility: unset;"><i class="fa-solid fa-trash-can"></i>Remove</Button></div>
                                        <div><Button class="btn_cart bg-secondary" disabled style="visibility: unset;">Sold Out</Button></div>
                                    </div>
                                </li>
                                <li>
                                    <div class="row">
                                        <div class="col-8">
                                            <div class="img_title">
                                                <img src="images/product(1).jpg" class="img-fluid" alt="">
                                                <h3>Out of stock </h3>
                                                <div>
                                                    <h1>
                                                        <Nuxt-Link to="/product-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sapiente placeat, sint asperiores nihil illo tenetur consectetur eaque ad dolor.</Nuxt-Link>
                                                    </h1>
                                                    <p>Seller: Ecommerce</p>
                                                    <span>Out of stock </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="cart_price">
                                                <strong>TK 2,000.00</strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <div><Button class="btn_cart" style="visibility: unset;"><i class="fa-solid fa-trash-can"></i>Remove</Button></div>
                                        <div><Button class="btn_cart bg-secondary" disabled style="visibility: unset;">Sold Out</Button></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 .col-lg-4 .col-md-12 " style="position: sticky;top: 60px;height: fit-content;">
                    <div class="cart_summary">
                        <div class="side_title">
                            <h5>Card Summary</h5>
                        </div>
                        <div class="d-flex justify-content-between">
                            <h3>Subtotal</h3>
                            <h2>Tk 14,210</h2>
                        </div>
                        <p>Delivery fees not included yet.</p>
                        <a class="btn_cart login_popup_show" style="visibility: unset;width: 100%; display: block;text-align: center;">CheckOut (14,270)</a>
                    </div>
                    <div class="de_returns">
                        <h3>Returns are easy</h3>
                        <p>Free return within 15 days for Official Store items and 7 days for other eligible items <Nuxt-link to="/refund">See more</Nuxt-link>
                        </p>
                    </div>
                </div>
            </div>
            <!-- recent view part start here  -->
            <RecentView />
            <!-- recent view part end here  -->
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
        title: 'Cart',
    },
    mounted() {

        if (process.client) {
            $(document).ready(function () {
                $(".filter_btn").on('click', function () {
                    $(".filter_modal").show();
                });
                $(".filter_close").on('click', function () {
                    $(".filter_modal").hide();
                });
            })
            // Now you can work with myElement
        }
    },
    computed: {
        // cart() {
        //     return this.$store.state.cart;
        // },
    },
    methods: {
        // removeFromCart(productId) {
        //     this.$store.commit('removeFromCart', productId);
        // },
        // clearCart() {
        //     this.$store.commit('clearCart');
        // },
    },
}
</script>
