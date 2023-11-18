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
                                <center>
                                    <div class="loading-indicator" v-if="loading">
                                        <div class="lodcontainer">
                                            <center class="loader-text">Loading...</center>
                                            <img src="/loader/loader.gif" alt="Loader" />
                                        </div>
                                    </div>
                                </center>
                                <!-- start -->
                                <div class="item" v-for="item in cart" :key="item.product.id">
                                    <div><img :src="item.product.thumnail_img" class="img-fluid" alt=""></div>
                                    <div style="width: 45%;">
                                        <h5>
                                            <nuxt-link :to="`/product-details/${item.product.pro_slug}`">{{ item.product.product_name }}</nuxt-link>

                                        </h5>
                                        <small style="font-size: 12px;">QTY: {{ item.quantity }} x ${{ parseFloat(item.product.price).toFixed(3) }}</small>
                                    </div>
                                    <div style="font-size: 10px;">
                                        &nbsp;
                                        ${{ (parseFloat(item.product.price) * item.quantity).toFixed(3) }}
                                    </div>
                                    <div><button type="button" @click="removeFromCart(item.product)"><i class="fa-solid fa-trash-can"></i></button></div>
                                </div>

                                <!-- end  -->

                            </div>
                            <div class="col-4 d-none">
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
                                        <p>{{ itemCount }} item(s). Subtotal: {{ subtotal  }} TK</p>
                                        <!-- <span>Save 262 TK</span> -->
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
                                        <td>{{ itemCount }}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Delivery Fee </strong></td>
                                        <td>100 TK</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Total Payment</strong></td>
                                        <td>{{ subtotal + 100 }} TK</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="text-end">
                                <p>VAT included, Where applicable </p>
                            </div>
                            <span v-if="cart.length > 0">
                                <button type="button" class="btn_cart text-center" style="visibility: unset; background-color: #900C3F; color: #fff; margin-top: 10px;" @click="placeOrder">Place Order</button>
                            </span>
                            <span v-else>
                                <center>Please add to cart.</center>
                            </span>

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
    middleware: "auth",
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
            loading: false,
            email: '',
            cart: [],
            itemCount: 0,
            subtotal: 0,
            updatedQuantity: 0,
            customer_id: '',
        };
    },

    computed: {
        loggedIn() {
            if (!$auth.loggedIn) {
                this.$router.push('/checkout');
            } else {
                this.$router.push('/');
            }

            return this.$auth.loggedIn;

        }
    },
    mounted() {

        this.calculateSubtotal();
        this.loadCart();
        this.cartItemCount();
        this.subtotal = this.calculateSubtotal();

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
    methods: {
        clearCart() {
            this.loading = true;
            localStorage.removeItem('cart');
            this.cart = [];
            this.cartItemCount();
            setTimeout(() => {
                this.loading = false;
            }, 2000);

        },
        placeOrder() {

            Swal.fire({
                title: "Are you sure?",
                text: "Do you want to submit an order?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes"
            }).then((result) => {
                if (result.isConfirmed) {
                    const response = this.$axios.post('/order/submitOrder', {
                        cart: this.cart,
                    });
                    this.clearCart();
                    console.log(response.data); // Log the API response

                    Swal.fire({
                        title: "Success!",
                        text: "Your order has been submited.",
                        icon: "success"
                    });
                }
            });

        },
        clearCart() {
            this.loading = true;
            localStorage.removeItem('cart');
            this.cart = [];
            this.cartItemCount();
            setTimeout(() => {
                this.loading = false;
            }, 2000);

        },
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
                // existingItem.quantity += 1;
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
    },
};
</script>
