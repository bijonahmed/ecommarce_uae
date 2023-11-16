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

    <section class="main_content">
        <div class="container">
            <div class="row">
                <!-- left side  -->
                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                    <div class="product_details_part">
                        <div class="row">
                            <!-- <p>Product Slug: {{ pro_row.description }}</p> -->
                            <!-- left part  -->
                            <div class="col-md-5">

                                <!-- {{ featuresimgs }} -->
                                <div class="loading-indicator" v-if="loading" style="text-align: center;">
                                    <div class="loader-container">
                                        <center class="loader-text">Loading...</center>
                                        <img src="/loader/loader.gif" alt="Loader" />
                                    </div>
                                </div>
                                <section class="Slider">
                                    <div>
                                        <img id="featuredImage" class="Slider-featuredImage sliderimg" :src="featuresimgs">
                                    </div>

                                    <div class="Slider-thumbnails">
                                        <a v-for="(image, index) in slider_img" :key="index" :href="image.thumnail" :class="{ 'Slider-thumbnail': true, 'active': index === 0 }" @click.prevent="changeSlide(index)">
                                            <img :src="image.thumnail" :alt="image.alt" style="height: 80px; width: 70px;" class="border border-1 rounded">
                                        </a>
                                    </div>
                                </section>

                                <!-- image slider end here  -->
                                <div class="social_share">
                                    <h5>Share This Product</h5>
                                    <ul>
                                        <li>
                                            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- right part  -->
                            <div class="col-md-7">
                                <div class="pro_info">
                                    <div class="badgeses">
                                        <div>
                                            <span>Official store</span>
                                            <strong>free delivery</strong>
                                            <span style="background-color: red;"><a href="affiliate.html" style="color: #fff;">Click to Get Your affiliate link</a></span>
                                        </div>
                                        <button> <i class="fa-regular fa-heart"></i></button>
                                    </div>
                                    <div class="details_title">
                                        <h1>{{pro_row.name}}</h1>
                                        <h6>Brand: <a href="#">Samsung</a>|<a href="#">Similer product from samsung </a></h6>
                                    </div>
                                    <div class="price_div">
                                        <h5>Tk {{pro_row.price}}
                                            <p> <strike>TK {{pro_row.discount}}</strike></p> <span>-8%</span>
                                        </h5>
                                        <p>in stock</p>
                                    </div>
                                    <div class="ratings_pro">
                                        <p>+shipping Tk 50 In Dhaka</p>
                                        <div class="d-flex align-items-center">
                                            <ul class="ratingW">
                                                <li class="on"><a href="javascript:void(0);">
                                                        <div class="star"></div>
                                                    </a></li>
                                                <li class="on"><a href="javascript:void(0);">
                                                        <div class="star"></div>
                                                    </a></li>
                                                <li class="on"><a href="javascript:void(0);">
                                                        <div class="star"></div>
                                                    </a></li>
                                                <li><a href="javascript:void(0);">
                                                        <div class="star"></div>
                                                    </a></li>
                                                <li><a href="javascript:void(0);">
                                                        <div class="star"></div>
                                                    </a></li>
                                            </ul>
                                            <h6>( <a href="#feedback">188 verified ratings</a>)</h6>
                                        </div>
                                        <div class="d-flex align-items-end">
                                            <div class="size_attr">
                                                <label for="">Color:</label>
                                                <select name="" id="" required class="form-control">
                                                    <option value="">Black</option>
                                                    <option value="">White</option>
                                                    <option value=""> Red</option>
                                                    <option value=""> Blue</option>
                                                    <option value=""> Yellow</option>
                                                    <option value=""> navy Blue</option>
                                                </select>
                                            </div>
                                            <div class="size_attr">
                                                <label for="">Size:</label>
                                                <select name="" id="" required class="form-control">
                                                    <option value=""> XS</option>
                                                    <option value=""> S</option>
                                                    <option value=""> M</option>
                                                    <option value=""> L</option>
                                                    <option value=""> XL</option>
                                                    <option value=""> XXL</option>
                                                </select>
                                            </div>
                                            <div class="number">
                                                <span class="minus" @click="decrement">-</span>
                                                <input v-model="updatedQuantity" type="number" @input="sanitizeInput" />
                                                <span class="plus" @click="increment">+</span>
                                            </div>
                                        </div>
                                        <button type="button" class="btn_cart" style="visibility: unset;" @click="addToCart(pro_row.id)"><i class="fa-solid fa-cart-shopping"></i>Add to Cart </button>
                                    </div>

                                    <div class="promotion">
                                        <h4>Promotions</h4>
                                        <ul>
                                            <li>
                                                <a href="#"><i class="fa-solid fa-shield-halved"></i>Need extra money? Loan up to N500,000 on the ECOMMERCEPay Android app.</a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="fa-solid fa-shield-halved"></i>Enjoy cheaper shipping fees when you select a PickUp Station at checkout.</a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="fa-solid fa-shield-halved"></i>Transfer up to N200,000 to any bank in Nigeria for FREE!</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="report">
                                <a href="#">Report Incorrect product information</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- right sidebar    -->
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div class="right_sidebar_top">
                        <div class="return_div">
                            <div class="side_title">
                                <h5>Delivery Returns</h5>
                            </div>
                            <h6>Ecommerce Express</h6>
                            <p>Free delivery on thousands of products in Lagos, Ibadan & Abuja Details</p>
                        </div>
                        <div class="location_div">
                            <div class="side_title">
                                <h5>Choose Your Location</h5>
                            </div>
                            <select name="" id="">
                                <option value="">Banani</option>
                                <option value="">Mohakhali</option>
                                <option value="">Gulshan</option>
                                <option value="">Rampura</option>
                                <option value="">Banasee</option>
                                <option value="">Malibag</option>
                                <option value="">Khilgaon</option>
                                <option value="">Mirpur</option>
                                <option value="">Gabtoli</option>
                            </select>

                            <select name="" id="">
                                <option value="">Road-1 Banani</option>
                                <option value="">Road-1Mohakhali</option>
                                <option value="">Road-1Gulshan</option>
                                <option value="">Road-1Rampura</option>
                                <option value="">Road-1Banasee</option>
                                <option value="">Road-1Malibag</option>
                                <option value="">Road-1Khilgaon</option>
                                <option value="">Road-1Mirpur</option>
                                <option value="">Road-1Gabtoli</option>
                            </select>

                            <div class="delivery_location">
                                <ul>
                                    <li>
                                        <div>
                                            <i class="fa-solid fa-truck"></i>
                                        </div>
                                        <div>
                                            <div class="d-flex justify-content-between">
                                                <h6>Door Delivery</h6>
                                                <a href="#">Details </a>
                                            </div>
                                            <h5>Delivery TK 1,770</h5>
                                            <p>Ready for delivery between 18 August & 22 August when you order within next 6hrs 1mins</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <i class="fa-solid fa-truck"></i>
                                        </div>
                                        <div>
                                            <div class="d-flex justify-content-between">
                                                <h6>Door Delivery</h6>
                                                <a href="#">Details </a>
                                            </div>
                                            <h5>Delivery TK 1,770</h5>
                                            <p>Ready for delivery between 18 August & 22 August when you order within next 6hrs 1mins</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div class="seller_div">
                            <div class="side_title">
                                <h5>Deller Information</h5>
                                <a href="#"><i class="fa-solid fa-chevron-right"></i></a>
                            </div>
                            <h3>SUN WORLDWIDE DISTRIBUTIONS LIMITED-AC</h3>
                            <div class="row">
                                <div class="col">
                                    <p>86% seller score</p>
                                    <p>1k Followers</p>
                                </div>
                                <div class="col">
                                    <button type="button" class="btn_follow">Follow </button>
                                </div>
                            </div>
                        </div>
                        <div class="performance_div">
                            <div class="side_title">
                                <h5>Seller Performance</h5>
                                <a type="modal" id="info"><i class="fa-solid fa-circle-info"></i></a>
                                <!-- seller performance modal  -->
                                <div class="info_modal">
                                    <div class="d-flex justify-content-between">
                                        <div>
                                            <h6>Seller Performance</h6>
                                        </div>
                                        <div><i class="fa-solid fa-x" type="button" style="cursor: pointer;" id="modal_close"></i></div>
                                    </div>
                                    <div>
                                        <p>To help you decide on the best offer we have several key metrics to help you with your decision</p>
                                    </div>
                                </div>
                            </div>
                            <ul>
                                <li>
                                    <i class="fa-solid fa-star"></i>
                                    <p>Order Fulfillment Rate: <strong>Excellent</strong></p>
                                </li>
                                <li>
                                    <i class="fa-solid fa-star"></i>
                                    <p>Order Fulfillment Rate: <strong>Excellent</strong></p>
                                </li>
                                <li>
                                    <i class="fa-solid fa-star"></i>
                                    <p>Order Fulfillment Rate: <strong>Excellent</strong></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!-- details section -->
    <section class="details_scrollspay">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <!-- details part start here  -->
                    <div class="row">
                        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                            <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">
                                <div class="product_details" id="details">

                                </div>

                                <!-- customer recent views  -->

                                <div class="feedback" id="feedback">
                                    <div class="side_title">
                                        <h5>Varified Customer Feedback</h5>
                                        <a href="customer-review.html">See All <i class="fa-solid fa-arrow-right"></i></a>
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
                                        </div>
                                    </div>
                                </div>

                                <!-- You may like this  -->

                            </div>

                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 ">
                            <div class="sidebar_here">
                                <div id="list-example" class="list-group id_list">
                                    <a class="list-group-item list-group-item-action active" href="#details"><i class="fa-regular fa-file-lines"></i>Product details </a>
                                    <a class="list-group-item list-group-item-action" href="#spacification"><i class="fa-solid fa-list"></i>Specification</a>
                                    <a class="list-group-item list-group-item-action" href="#feedback"><i class="fa-regular fa-message"></i>Varified Customer Feedback</a>
                                </div>

                                <div class="pro_cart">
                                    <div class="d-flex">
                                        <div><img :src="featuresimgs" alt=""></div>
                                        <div>
                                            <p>TK {{ pro_row.price }}</p>
                                            <p><strike>TK {{pro_row.discount}}</strike></p>
                                        </div>
                                    </div>
                                    <button class="btn_cart" type="button"> <i class="fa-solid fa-cart-shopping" @click="addToCart(pro_row.id)"></i>Add to Cart </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <!-- more items for this seller  -->
                    <div class="row">
                        <div class="col-12">
                            <div class="top_selling">
                                <div class="row mb-2">
                                    <div class="col-6">
                                        <div class="sell_title">
                                            <h5>More items from this seller </h5>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <RecentView />
                </div>
            </div>
        </div>
    </section>

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
        title: 'Product Details',
    },

    async asyncData({
        params
    }) {
        const productSlug = params.slug;
        return {
            //cart
            loading: false,
            cart: [],
            itemCount: 0,
            subtotal: 0,
            updatedQuantity: 1,
            product: [],
            //end cart
            currentIndex: 0,
            featuresimgs: '',
            slider_img: [],
            pro_row: '',
            productSlug,
        };
    },
    mounted() {
        this.loadCart();
        this.cartItemCount();
        this.initLightSlider();
        this.fetchData();
    },
    methods: {
        increment() {
            // Increase the quantity value
            this.updatedQuantity++;
        },
        decrement() {
            // Decrease the quantity value, but ensure it doesn't go below 1
            if (this.updatedQuantity > 1) {
                this.updatedQuantity--;
            }
        },
        sanitizeInput() {
            // Remove non-numeric characters from the input
            // Remove non-numeric characters from the input
            this.updatedQuantity = this.updatedQuantity.replace(/\D/g, '');

            // Ensure the value is not empty
            if (this.updatedQuantity === '') {
                this.updatedQuantity = 1;
            }
        },
        //for cart
        loadCart() {
            const savedCart = localStorage.getItem('cart');

            if (savedCart) {
                this.cart = JSON.parse(savedCart);
            }
        },
        saveCart() {
            this.loading = true;
            localStorage.setItem('cart', JSON.stringify(this.cart));
            setTimeout(() => {
                this.loading = false;
            }, 2000);
        },
        cartItemCount() {
            let itemCount = 0;
            this.cart.forEach((item) => {
                itemCount += parseInt(item.quantity);
            });
            this.itemCount = itemCount;
            console.log('Emitting cartItemCountUpdated event with itemCount:', this.itemCount);
            this.$eventBus.$emit('cartItemCountUpdated', this.itemCount);

        },
        updateQuantity(productId, newQuantity) {
            const index = this.cart.findIndex((item) => item.product.id === productId);

            if (index !== -1) {
                this.cart[index].quantity = newQuantity;
                this.saveCart();
            }
        },
        addToCart(productId) {
            const productToAdd = this.product.find((product) => product.id === productId);
            const existingItem = this.cart.find((item) => item.product.id === productId);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                this.cart.push({
                    product: productToAdd,
                    quantity: this.updatedQuantity,
                });
            }

            this.saveCart();
            this.cartItemCount();
        },

        //end cart
        initLightSlider() {
            let thumbnails = document.getElementsByClassName('Slider-thumbnail');
            let activeImages = document.getElementsByClassName('active');

            for (let i = 0; i < thumbnails.length; i++) {
                thumbnails[i].addEventListener('click', (e) => {
                    e.preventDefault();

                    if (activeImages.length > 0) {
                        activeImages[0].classList.remove('active');
                    }

                    thumbnails[i].classList.add('active');
                    this.featuresimgs = this.slider_img[i].thumnail;
                });
            }
        },
        changeSlide(index) {
            // Change the slide when a thumbnail is clicked
            this.currentIndex = index;
            this.featuresimgs = this.slider_img[index].thumnail;
        },

        async fetchData() {
            this.loading = true;
            const slug = this.productSlug;
            const response = await this.$axios.get(`/unauthenticate/productSlug/${slug}`);
            this.featuresimgs = response.data.featuredImage;
            this.slider_img = response.data.slider_img;
            this.pro_row = response.data.pro_row;
            this.product = response.data.product;
            this.loading = false;
            $(".product_details").html(response.data.pro_row.description);
            //console.log("====" + response.data.slider_img);
        },

    },

}
</script>

<style scoped>
/* img {
    width: 100%;
    display: block;
} */

.scrollimg {
    height: 40px;
    width: 20px;
}

.sliderimg {
    width: 100%;
    display: block;
}

.Slider {
    max-width: 80vw;
    margin: 0 auto;
}

.Slider-featuredImage {
    padding: 4px
}

.Slider-thumbnails {
    /* display: flex; */
    width: 100%;
    /* overflow: scroll; */
    margin-top: 4px;
    padding: 4px;
    margin-right: 16px;
}

.Slider-thumbnail {
    opacity: 0.7;
    cursor: pointer;
}

.Slider-thumbnail img {
    width: 200px;
}

.Slider-thumbnail .active {
    opacity: 1;
}

.Slider-thumbnail:hover,
.Slider-thumbnail:active,
/* .Slider-thumbnail:focus {
    opacity: 1;
    outline: solid 2px black;
    outline-offset: 2px;
} */

.Slider-thumbnail:not(:first-of-type) {
    margin-left: 10px;
}
</style>
