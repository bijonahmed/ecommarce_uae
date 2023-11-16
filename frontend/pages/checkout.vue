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
            <p>
                <center>You'r login : {{ email }}</center>
            </p>
            <div class="row">

                <div class="col-md-8">
                    <div class="delivery_addreess">
                        <h6>Delivery To : Jhone Due </h6>
                        <div class="address">
                            <div class="d-flex align-items-center">
                                <span>Home</span>
                                <p>User Name </p>
                            </div>
                            <div>
                                <p>
                                    ga-129, Hajari bari road, Mohakhali, Dhaka, Mohakhali TB Gate Jame Mosjid, Dhaka - North, Dhaka, Oposite side of titumir college
                                </p>
                            </div>
                            <div><a href="#" class="chage_Daddress">Change</a></div>
                            <!-- modal start  -->
                            <div class="modal_checkoutpage billing">
                                <div class="modal_box">
                                    <div class="row">
                                        <div class="col-6 ms-auto text-end"><button class="btn_edit modal_close"><i class="fa-solid fa-x"></i></button></div>
                                    </div>
                                    <form action="">
                                        <select name="" id="" class="form-control">
                                            <option value="" disabled selected> Select One </option>
                                            <option value="">Address 1</option>
                                            <option value="">Address 2</option>
                                        </select>
                                        <button class="btn_confirm mt-2">Submit</button>
                                    </form>
                                </div>
                            </div>
                            <!-- modal end  -->
                        </div>
                        <div class="pickUp_address">
                            <h6>Collect your parcel from the nearest Ecommerce Pick-up Point with a reduced shipping fee</h6>
                            <p>20 suggested collection point(s) nearbyCheck <a href="#" class="btn_picup">Pick-up Points</a></p>

                            <!-- modal start  -->
                            <div class="modal_checkoutpage pickup_point">
                                <div class="modal_box">
                                    <div class="row">
                                        <div class="col-6 ms-auto text-end"><button class="btn_edit modal_close"><i class="fa-solid fa-x"></i></button></div>
                                    </div>
                                    <form action="">
                                        <select name="" id="" class="form-control">
                                            <option value="" disabled selected> Select One </option>
                                            <option value="">Address 1</option>
                                            <option value="">Address 2</option>
                                        </select>
                                        <button class="btn_confirm mt-2">Submit</button>
                                    </form>
                                </div>
                            </div>
                            <!-- modal end  -->
                        </div>
                        <p>Bill to same address <a href="#" class="billing_address">Edit</a></p>
                        <!-- modal start  -->
                        <div class="modal_checkoutpage bill_address">
                            <div class="modal_box">
                                <div class="row">
                                    <div class="col-6 ms-auto text-end"><button class="btn_edit modal_close"><i class="fa-solid fa-x"></i></button></div>
                                </div>
                                <form action="">
                                    <select name="" id="" class="form-control">
                                        <option value="" disabled selected> Select One </option>
                                        <option value="">Address 1</option>
                                        <option value="">Address 2</option>
                                    </select>
                                    <button class="btn_confirm mt-2">Submit</button>
                                </form>
                            </div>
                        </div>
                        <!-- modal end  -->
                        <p>Email to useremail@mail.com <a href="user-profile.html">Edit</a></p>
                    </div>
                    <div class="items_details">
                        <h5>Happy Shopping</h5>
                        <div class="row">
                            <div class="col-8">
                                <div class="item">
                                    <div><img src="images/product(1).jpg" class="img-fluid" alt=""></div>
                                    <div class="" style="width: 45%;">
                                        <h5>Special Phone Number Anti-Lost Phone Number Key Ring Keychain for.. Special Phone Number Anti-Lost Phone Number Key Ring Keychain fo</h5>
                                        <p>No Brand, Color Family: Red </p>
                                    </div>
                                    <div class="">
                                        <span>QTY: 1</span>
                                    </div>
                                    <div><button type="button"><i class="fa-solid fa-trash-can"></i></button></div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="d-flex justify-content-end align-items-center">
                                    <span class="badges">350TK -75%</span>
                                    <p>88TK</p>
                                </div>
                            </div>
                        </div>
                        <div class="sub_total">
                            <div class="row">
                                <div class="col-8">
                                    <div class="delivery_section">
                                        <h5>standard delivery | 55TK</h5>
                                        <p>Receive by 19 Aug - 23 Aug</p>
                                    </div>
                                    <div class="voucher">
                                        <h6>store voucher</h6>
                                        <a href="#">Get Voucher <i class="fa-solid fa-chevron-right"></i></a>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="s_item_sub">
                                        <p>1 item(s). Subtotal: 143Tk</p>
                                        <span>Save 262 TK</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="cart_sidebar">
                        <h5>Discount and Payment </h5>
                        <div class="d-flex align-items-center justify-content-between">
                            <p>Ecommerce Voucher</p>
                            <strong>No Applicable Voucher</strong>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                            <p>Promo Code</p>
                            <Button type="button" class="btn_promo">Enter Promo code <i class="fa-solid fa-chevron-right"></i></Button>
                            <!-- modal start  -->
                            <div class="modal_checkoutpage promo">
                                <div class="modal_box">
                                    <div class="row">
                                        <div class="col-6 ms-auto text-end"><button class="btn_edit modal_close"><i class="fa-solid fa-x"></i></button></div>
                                    </div>
                                    <form action="">
                                        <input type="text" class="form-control" placeholder="Enter Your Promo Code ">
                                        <button class="btn_confirm mt-2">Submit</button>
                                    </form>
                                </div>
                            </div>
                            <!-- modal end  -->
                        </div>
                        <div class="pirce_summary">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>Order Summary</strong>
                                        </td>
                                        <td>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>Items Total</strong></td>
                                        <td>542 TK</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Delivery Fee </strong></td>
                                        <td>110 TK</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Total Payment</strong></td>
                                        <td>662 TK</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="text-end">
                                <p>VAT included, Where applicable </p>
                            </div>
                            <Nuxt-link to="/payment" type="button" class="btn_cart text-center" style="visibility: unset; background-color: #900C3F; color: #fff; margin-top: 10px;"> Place Order </Nuxt-link>
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
        title: 'Checkout',
    },
    data() {
        return {
            email: '',
        };
    },
    mounted() {
        //this.checkLoginStatus();
    },
    computed: {
        // isAuthenticated() {
        //     return this.$auth.loggedIn;
        // },
    },
    methods: {
        checkLoginStatus() {
            if (this.isAuthenticated) {
                console.log('User is logged in.');
                // You can perform actions for authenticated users here
            } else {
                console.log('User is not logged in.');
                // You can handle actions for non-authenticated users here
            }
        },
    },
};
</script>
