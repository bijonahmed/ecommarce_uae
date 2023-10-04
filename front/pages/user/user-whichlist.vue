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
                <div class="col-md-4">
                    <div class="user_sidebar">

                        <div class="user_page_list">
                            <ul>
                                <li>
                                    <Nuxt-link to="/user/user-profile">User Account </Nuxt-link>
                                </li>
                                <li class="">
                                    <Nuxt-link to="/user/user-orders">My Orders </Nuxt-link>
                                </li>
                                <li class="active">
                                    <Nuxt-link to="/user/user-whichlist">Wishlist </Nuxt-link>
                                </li>
                                <li class="">
                                    <Nuxt-link to="/user/my-reviews">My Reviews </Nuxt-link>
                                    
                                </li>
                                <li class="">
                                    <Nuxt-link to="/login">LogOut </Nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div class="col-md-8">
                    <div class="cart">
                        <div class="side_title">
                            <h5>Wishlist</h5>
                            <button type="button" class="btn_cart" style="visibility: unset; width: fit-content;">Add all to cart</button>
                        </div>
                        <div class="card_porduct">
                            <ul>
                                <li>
                                    <div class="row">
                                        <div class="col-8">
                                            <div class="img_title">
                                                <img src="/images/product(1).jpg" class="img-fluid" alt="">
                                                <div>
                                                    <h1>
                                                        <Nuxt-link to="/product-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sapiente placeat, sint asperiores nihil illo tenetur consectetur eaque ad dolor.</Nuxt-link>
                                                    </h1>
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
                                            <button class="btn_cart" type="button" style="visibility: unset;"><i class="fa-solid fa-cart-shopping"></i> Add To cart </button>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="row">
                                        <div class="col-8">
                                            <div class="img_title">
                                                <img src="/images/product(1).jpg" class="img-fluid" alt="">
                                                <div>
                                                    <h1>
                                                        <Nuxt-link to="/product-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sapiente placeat, sint asperiores nihil illo tenetur consectetur eaque ad dolor.</Nuxt-link>
                                                    </h1>
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
                                            <button class="btn_cart" type="button" style="visibility: unset;"><i class="fa-solid fa-cart-shopping"></i> Add To cart </button>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="row">
                                        <div class="col-8">
                                            <div class="img_title">
                                                <img src="/images/product(1).jpg" class="img-fluid" alt="">
                                                <div>
                                                    <h1>
                                                        <Nuxt-link to="/product-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sapiente placeat, sint asperiores nihil illo tenetur consectetur eaque ad dolor.</Nuxt-link>
                                                    </h1>
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
                                            <button class="btn_cart" type="button" style="visibility: unset;"><i class="fa-solid fa-cart-shopping"></i> Add To cart </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
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

export default {
    components: {
        Common_MobileSidebar,
        Common_MiniTabNavbar,
        Common_MobileSearchProduct,

    },
    head: {
        title: 'My Wishlist',
    },
    mounted() {

    }
}
</script>
