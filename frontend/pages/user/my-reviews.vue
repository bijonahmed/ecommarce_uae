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
                                <li class="">
                                    <Nuxt-link to="/user/user-whichlist">Wishlist </Nuxt-link>
                                </li>
                                <li class="active">
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
                    <div class="review_items">
                        <div class="row">
                            <div class="col-12">
                                <div class="to_review">
                                    <div class="review_title">
                                        <h3>To Reviews</h3>
                                    </div>
                                    <div class="revies_list">
                                        <ul>
                                            <li>
                                                <div class="d-flex align-item-center">
                                                    <div>
                                                        <img src="/images/product(1).jpg" class="img-fluid" alt="">
                                                    </div>
                                                    <div>
                                                        <h1>
                                                            <Nuxt-link to="/product-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, eum.</Nuxt-link>
                                                        </h1>
                                                        <p>Color: Multiple color </p>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button class="btn_cart add_review" style="visibility: unset; width: fit-content;">Add Review </button>
                                                </div>
                                                <!-- modal -->
                                                <div class="add_review_modal add_r">
                                                    <div class="review_box">
                                                        <div class="d-flex justify-content-between align-item-center">
                                                            <h6>Add review</h6>
                                                            <button type="button" class="btn_close_modal"><i class="fa-solid fa-x"></i></button>
                                                        </div>
                                                        <div>
                                                            <form action="">
                                                                <div class="rate">
                                                                    <input type="radio" id="star5" name="rate" value="5" />
                                                                    <label for="star5" title="text">5 stars</label>
                                                                    <input type="radio" id="star4" name="rate" value="4" />
                                                                    <label for="star4" title="text">4 stars</label>
                                                                    <input type="radio" id="star3" name="rate" value="3" />
                                                                    <label for="star3" title="text">3 stars</label>
                                                                    <input type="radio" id="star2" name="rate" value="2" />
                                                                    <label for="star2" title="text">2 stars</label>
                                                                    <input type="radio" id="star1" name="rate" value="1" />
                                                                    <label for="star1" title="text">1 star</label>
                                                                </div>
                                                                <br>
                                                                <div>

                                                                    <textarea name="" id="" class="form-control" cols="30" rows="4"></textarea>
                                                                </div>
                                                                <button type="button" class="btn_confirm">Submit</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- modal end  -->
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="to_review">
                                    <div class="review_title">
                                        <h3>History</h3>
                                    </div>
                                    <div class="revies_list">
                                        <ul>
                                            <li>
                                                <div class="d-flex align-item-center">
                                                    <div>
                                                        <img src="/images/product(1).jpg" class="img-fluid" alt="">
                                                    </div>
                                                    <div>
                                                        <h1>
                                                            <Nuxt-link to="/product-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, eum.</Nuxt-link>
                                                        </h1>
                                                        <p>Color: Multiple color </p>
                                                    </div>
                                                </div>
                                                <div class="review_text">
                                                    <div>
                                                        <div class="rating" bis_skin_checked="1">
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star "></i>
                                                        </div>
                                                        <p>good quality</p>
                                                    </div>
                                                    <div>
                                                        <button type="button" class="update_review">Update Review</button>
                                                    </div>
                                                    <!-- modal -->
                                                    <div class="add_review_modal up_r">
                                                        <div class="review_box">
                                                            <div class="d-flex justify-content-between align-item-center">
                                                                <h6>Add review</h6>
                                                                <button type="button" class="btn_close_modal"><i class="fa-solid fa-x"></i></button>
                                                            </div>
                                                            <div>
                                                                <form action="">
                                                                    <div class="rate">
                                                                        <input type="radio" id="star5" name="rate" value="5" />
                                                                        <label for="star5" title="text">5 stars</label>
                                                                        <input type="radio" id="star4" name="rate" value="4" />
                                                                        <label for="star4" title="text">4 stars</label>
                                                                        <input type="radio" id="star3" name="rate" value="3" />
                                                                        <label for="star3" title="text">3 stars</label>
                                                                        <input type="radio" id="star2" name="rate" value="2" />
                                                                        <label for="star2" title="text">2 stars</label>
                                                                        <input type="radio" id="star1" name="rate" value="1" />
                                                                        <label for="star1" title="text">1 star</label>
                                                                    </div>
                                                                    <br>
                                                                    <div>

                                                                        <textarea name="" id="" class="form-control" cols="30" rows="4"></textarea>
                                                                    </div>
                                                                    <button type="button" class="btn_confirm" style="background-color: #C70039; color: #fff;">Submit</button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- modal end  -->
                                                </div>
                                            </li>
                                            <li>
                                                <div class="d-flex align-item-center">
                                                    <div>
                                                        <img src="/images/product(1).jpg" class="img-fluid" alt="">
                                                    </div>
                                                    <div>
                                                        <h1>
                                                            <Nuxt-link to="/product-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, eum.</Nuxt-link>
                                                        </h1>
                                                        <p>Color: Multiple color </p>
                                                    </div>
                                                </div>
                                                <div class="review_text">
                                                    <div>
                                                        <div class="rating" bis_skin_checked="1">
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star "></i>
                                                        </div>
                                                        <p>good quality</p>
                                                    </div>
                                                    <div>
                                                        <button type="button" class="update_review">Update Review</button>
                                                    </div>
                                                    <!-- modal -->
                                                    <div class="add_review_modal up_r">
                                                        <div class="review_box">
                                                            <div class="d-flex justify-content-between align-item-center">
                                                                <h6>Add review</h6>
                                                                <button type="button" class="btn_close_modal"><i class="fa-solid fa-x"></i></button>
                                                            </div>
                                                            <div>
                                                                <form action="">
                                                                    <div class="rate">
                                                                        <input type="radio" id="star5" name="rate" value="5" />
                                                                        <label for="star5" title="text">5 stars</label>
                                                                        <input type="radio" id="star4" name="rate" value="4" />
                                                                        <label for="star4" title="text">4 stars</label>
                                                                        <input type="radio" id="star3" name="rate" value="3" />
                                                                        <label for="star3" title="text">3 stars</label>
                                                                        <input type="radio" id="star2" name="rate" value="2" />
                                                                        <label for="star2" title="text">2 stars</label>
                                                                        <input type="radio" id="star1" name="rate" value="1" />
                                                                        <label for="star1" title="text">1 star</label>
                                                                    </div>
                                                                    <br>
                                                                    <div>

                                                                        <textarea name="" id="" class="form-control" cols="30" rows="4"></textarea>
                                                                    </div>
                                                                    <button type="button" class="btn_confirm" style="background-color: #C70039; color: #fff;">Submit</button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- modal end  -->
                                                </div>
                                            </li>
                                            <li>
                                                <div class="d-flex align-item-center">
                                                    <div>
                                                        <img src="/images/product(1).jpg" class="img-fluid" alt="">
                                                    </div>
                                                    <div>
                                                        <h1>
                                                            <Nuxt-link to="/product-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, eum.</Nuxt-link>
                                                        </h1>
                                                        <p>Color: Multiple color </p>
                                                    </div>
                                                </div>
                                                <div class="review_text">
                                                    <div>
                                                        <div class="rating" bis_skin_checked="1">
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star "></i>
                                                        </div>
                                                        <p>good quality</p>
                                                    </div>
                                                    <div>
                                                        <button type="button" class="update_review">Update Review</button>
                                                    </div>
                                                    <!-- modal -->
                                                    <div class="add_review_modal up_r">
                                                        <div class="review_box">
                                                            <div class="d-flex justify-content-between align-item-center">
                                                                <h6>Update Review </h6>
                                                                <button type="button" class="btn_close_modal"><i class="fa-solid fa-x"></i></button>
                                                            </div>
                                                            <div>
                                                                <form action="">
                                                                    <div class="rate">
                                                                        <input type="radio" id="star5" name="rate" value="5" />
                                                                        <label for="star5" title="text">5 stars</label>
                                                                        <input type="radio" id="star4" name="rate" value="4" />
                                                                        <label for="star4" title="text">4 stars</label>
                                                                        <input type="radio" id="star3" name="rate" value="3" />
                                                                        <label for="star3" title="text">3 stars</label>
                                                                        <input type="radio" id="star2" name="rate" value="2" />
                                                                        <label for="star2" title="text">2 stars</label>
                                                                        <input type="radio" id="star1" name="rate" value="1" />
                                                                        <label for="star1" title="text">1 star</label>
                                                                    </div>
                                                                    <br>
                                                                    <div>

                                                                        <textarea name="" id="" class="form-control" cols="30" rows="4">good quality</textarea>
                                                                    </div>
                                                                    <button type="button" class="btn_confirm" style="background-color: #C70039; color: #fff;">Submit</button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- modal end  -->
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
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
    middleware: 'auth',
    components: {
        Common_MobileSidebar,
        Common_MiniTabNavbar,
        Common_MobileSearchProduct,

    },
    head: {
        title: 'My Reviews',
    },
    mounted() {

    },
    methods: {
        logout() {
            localStorage.removeItem('jwtToken');
            this.$router.push('/');
        },
    }
}
</script>
