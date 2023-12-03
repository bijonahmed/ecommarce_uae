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
                                <li class="d-none">
                                    <Nuxt-link to="/user/my-reviews">My Reviews </Nuxt-link>
                                </li>
                                <li class="">
                                    <a href="#" @click="logout">LogOut </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div class="col-md-8">
                    <div class="loading-indicator" v-if="loading">
                        <div class="loader-container">
                            <center class="loader-text">Loading...</center>
                            <img src="/loader/loader.gif" alt="Loader" />
                        </div>
                    </div>
                    <div class="cart">
                        <div class="side_title">
                            <h5>Wishlist</h5>

                        </div>
                        <div class="card_porduct">
                            <ul>
                                <li v-for="product in products" :key="product.wishid">
                                    <div class="row">
                                        <div class="col-8">
                                            <div class="img_title">
                                                <img :src="product.thumnail_img" class="img-fluid" alt="">
                                                <div>
                                                    <h1>
                                                        <nuxt-link :to="`/product-details/${product.slug}`">{{ product.product_name }}</nuxt-link>
                                                    </h1>
                                                    <p>Seller: Ecommerce</p>
                                                    <span>In stock </span>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-4">
                                            <div class="cart_price">
                                                <strong>{{ product.price }}</strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <div><Button class="btn_cart" style="visibility: unset;" @click="remove(product.wishid)"><i class="fa-solid fa-trash-can"></i>Remove</Button></div>
                                        <div>
                                            <button class="btn_cart" type="button" style="visibility: unset;" @click="addToCart(product.slug)"><i class="fa-solid fa-cart-shopping"></i> Details </button>
                                        </div>
                                    </div>
                                </li>

                            </ul>
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
    middleware: 'auth',
    components: {
        Common_MobileSidebar,
        Common_MiniTabNavbar,
        Common_MobileSearchProduct,

    },
    head: {
        title: 'My Wishlist',
    },
    data() {
        return {
            product: [],
            cart: [],
            loading: false,
            products: [],
            errors: {},
        }
    },
    mounted() {

        this.loadingWishList();
    },
    methods: {

        addToCart(product_slug) {
            this.$router.push({
                path: '/product-details',
                query: {
                    slug: product_slug
                }
            })

        },

        async remove(productid) {
            this.loading = true;
            await this.$axios.get(`/order/removeWishList/${productid}`).then(response => {
                    this.loadingWishList();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "WishList item deleted successfully",
                        showConfirmButton: false,
                        timer: 1000
                    });
                })
                .catch(error => {
                    // Handle error
                })
                .finally(() => {
                    this.loading = false; // Hide loader after response
                });;

        },

        async loadingWishList() {
            this.loading = true;
            await this.$axios.get(`/order/allWishList`).then(response => {
                    this.products = response.data;

                })
                .catch(error => {
                    // Handle error
                })
                .finally(() => {
                    this.loading = false; // Hide loader after response
                });;

        },

        logout() {
            localStorage.removeItem('jwtToken');
            this.$router.push('/');
        },
    }
}
</script>

<style scoped>
.loading-indicator {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

/* For Loader */
.loader-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
}

.loader-text {
    margin: 0;
    /* Remove default margin */
}

.loader-top {
    top: 0;
}

.loader-bottom {
    bottom: 0;
}
</style>
