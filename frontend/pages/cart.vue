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
                            <h5>Cart({{ itemCount }})</h5>
                        </div>
                        <div class="loading-indicator" v-if="loading">
                            <div class="loader-container">
                                <center class="loader-text">Loading...</center>
                                <img src="/loader/loader.gif" alt="Loader" />
                            </div>
                        </div>
                        <div class="card_porduct">
                            <ul>
                                <li v-for="item in cart" :key="item.product.id">
                                    <div class="row">
                                        <div class="col-8">
                                            <div class="img_title">
                                                <img :src="item.product.thumnail_img" class="img-fluid" alt="">
                                                <div>
                                                    <h1>
                                                        <Nuxt-Link to="/product-details">{{ item.product.product_name }}</Nuxt-Link>
                                                    </h1>
                                                    <p>Seller: Ecommerce</p>
                                                    <span>In stock </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="cart_price">
                                                <small>(Qty: {{ item.quantity }})</small> x <strong>${{ item.product.price }}</strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-end">
                                        <div class=" p- me-1">
                                            <Button class="btn_cart" style="visibility: unset;" @click="removeFromCart(item.product)"><i class="fa-solid fa-trash-can"></i>Remove</Button>
                                        </div>
                                        <div>
                                            <div class="number">
                                                <span class="minus">-</span>
                                                <!-- <input type="text" value="1" /> -->
                                                <input v-model="item.updatedQuantity" type="number" />
                                                <span class="plus">+</span>
                                            </div>
                                            <Button class="btn_cart mt-2" style="visibility: unset; background-color: #0C356A;" @click="updateQuantity(item.product.id, item.updatedQuantity)">Update</Button>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>

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
                            <h2>${{ subtotal }}</h2>
                        </div>
                        <p>Delivery fees not included yet.</p>
                        <a class="btn_cart login_popup_show" style="visibility: unset;width: 100%; display: block;text-align: center;">CheckOut (${{ subtotal }})</a>
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
    data() {
        return {
            loading: false,
            cart: [],
            itemCount: 0,
            subtotal: 0,
            updatedQuantity: 0,
        };
    },
    head: {
        title: 'Cart',
    },
    mounted() {

        this.calculateSubtotal();
        this.loadCart();
        this.cartItemCount();
        this.subtotal = this.calculateSubtotal(); // Calculate the subtotal and store it in a data property

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
        updateQuantity(productId, newQuantity) {
            this.loading = true;
            const index = this.cart.findIndex((item) => item.product.id === productId);
            if (index !== -1) {
                this.cart[index].quantity = newQuantity;
                this.saveCart();
                this.calculateSubtotal(); // Optionally recalculate subtotal after updating quantity
                setTimeout(() => {
                    this.loading = false;
                }, 2000);

            }

        },
        loadCart() {
            this.loading = true;
            const savedCart = localStorage.getItem('cart');

            if (savedCart) {
                this.cart = JSON.parse(savedCart);
            }

            let itemCount = 0;
            this.cart.forEach((item) => {
                itemCount += parseInt(item.quantity);
            });
            this.itemCount = itemCount;
            setTimeout(() => {
                this.loading = false;
            }, 2000);
        },
        handleCartItemCountUpdated(itemCount) {
            // This method will be called when the event is emitted from ComponentA
            console.log('Received  DesktopViewOptions Com.:', itemCount);
            // Update the local data property with the received itemCount
            this.itemCount = itemCount;
        },

        removeFromCart(product) {
            this.loading = true;
            const index = this.cart.findIndex((item) => item.product.id === product.id);

            if (index !== -1) {
                if (this.cart[index].quantity > 1) {
                    this.cart[index].quantity -= 1;
                } else {
                    this.cart.splice(index, 1);
                }

                this.saveCart();
                this.calculateSubtotal();
                this.cartItemCount();
                setTimeout(() => {
                    this.loading = false;
                }, 1000);
            }
        },
        saveCart() {
            localStorage.setItem('cart', JSON.stringify(this.cart));

        },
        addToCart(productId) {

            const productToAdd = this.prouducts.find((product) => product.id === productId);
            const existingItem = this.cart.find((item) => item.product.id === productId);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                this.cart.push({
                    product: productToAdd,
                    quantity: 1
                });
            }

            this.saveCart();
            this.cartItemCount();
            this.calculateSubtotal();
        },
        cartItemCount() {
            //  this.loading = true;
            let itemCount = 0;
            this.cart.forEach((item) => {
                itemCount += parseInt(item.quantity);
            });
            this.itemCount = itemCount;
            console.log('Emitting cartItemCountUpdated event with itemCount:', this.itemCount);
            this.$eventBus.$emit('cartItemCountUpdated', this.itemCount);

        },
        calculateSubtotal() {
            //  this.loading = true;
            let subtotal = 0;
            this.cart.forEach((item) => {
                const product = item.product;
                console.log(`Quantity: ${item.quantity}, Price: ${product.price}`);
                const priceAsNumber = parseFloat(product.price.replace(/[^\d.]/g, '')); //510;//product.price;
                if (!isNaN(item.quantity) && !isNaN(priceAsNumber)) {
                    subtotal += item.quantity * priceAsNumber;
                } else {
                    console.error('Invalid quantity or price:', item.quantity, product.price);
                }
                // console.log(`Intermediate Subtotal: ${subtotal}`);
            });
            //console.log(`Final Subtotal: ${subtotal}`);
            return this.subtotal = subtotal;
            //return subtotal;
        },
        /*
        updateQuantity(productId, newQuantity) {
            this.loading = true;
            const index = this.cart.findIndex((item) => item.product.id === productId);

            if (index !== -1) {
                this.cart[index].quantity = newQuantity;
                this.saveCart();
                this.calculateSubtotal(); // Optionally recalculate subtotal after updating quantity
            }
        },
        */
    },
}
</script>

<style scoped>
.img_title img {
    width: 110px;
    padding-right: 10px;
}

.img_title {
    display: flex;
    justify-content: left;
    align-items: start;
    margin-bottom: 10px;
    position: relative;
}

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
