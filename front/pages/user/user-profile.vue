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
                                <li class="active">
                                    <Nuxt-link to="/user/user-profile">User Account </Nuxt-link>
                                </li>
                                <li class="">
                                    <Nuxt-link to="/user/user-orders">My Orders </Nuxt-link>
                                </li>
                                <li class="">
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
                    <div class="main_profile">
                        <div class="user">
                            <img src="/images/powerUp.jpg" class="img-fluid" alt="">
                            <h3>Jhone Due</h3>
                            <p><strong>Registerd at:</strong> 17-08-2023</p>
                        </div>
                        <div class="user_details">
                            <div class="d-flex align-items-center justify-content-between">
                                <h4>Contact Details </h4>
                                <button type="button" class="btn_edit"><i class="fa-solid fa-pen"></i></button>
                                <!-- profile update modal here  -->
                                <div class="modal_address_here edit_div">
                                    <div class="address_form_modal">
                                        <div class="d-flex justify-content-between">
                                            <p>Update Personal Details </p>
                                            <button type="button" class="btn-close btn_address_close"></button>
                                        </div>
                                        <form action="">

                                            <div>
                                                <label for="">Email </label>
                                                <!-- <input type="email" value="usermail@mail.com"  class="form-control"  > -->
                                                <p>user@mail.com</p>
                                            </div>
                                            <div>
                                                <label for="name">Name</label>
                                                <input type="text" name="name" id="name" class="form-control">
                                            </div>
                                            <div class="">
                                                <label for="">Phone </label> <br>
                                                <input type="text" id="" class="form-control mobile_code" placeholder="Phone Number" name="name">

                                            </div>
                                            <div class="">
                                                <label for="">Phone 2 </label> <br>
                                                <input type="text" id="" class="form-control mobile_code" placeholder="Phone Number" name="name">
                                            </div>
                                            <div>
                                                <label for="">Birth Day</label>
                                                <input type="date" class="form-control" name="" id="">
                                            </div>
                                            <div>
                                                <label for="City">Gender </label>
                                                <select class="form-control" name="" id="city">
                                                    <option value="" selected disabled>Select Your Gender</option>
                                                    <option value="">Male</option>
                                                    <option value="">Female</option>
                                                    <option value="">others</option>
                                                </select>
                                            </div>
                                            <div>
                                                <button type="button" class="btn_cart mt-2" style="visibility: unset;">Save</button>
                                            </div>

                                        </form>
                                    </div>

                                </div>
                                <!-- modal end  -->
                            </div>
                            <div class="user_info">
                                <h5>Name</h5>
                                <p>Jhone Due </p>
                            </div>
                            <div class="user_info">
                                <h5>Email</h5>
                                <p>useremail@mail.com</p>
                            </div>
                            <div class="user_info">
                                <h5>Phone</h5>
                                <p>+880 19000000 <strong>(Default)</strong></p>
                                <p>+880 15000000</p>
                            </div>
                            <div class="user_info">
                                <h5>Birth Day</h5>
                                <p>01-01-2000</p>
                            </div>
                            <div class="user_info">
                                <h5>Gender</h5>
                                <p>Male</p>
                            </div>

                            <div class="address_line">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h5>Address 1 <strong>(Defult)</strong></h5>
                                    <!-- <h5>+880 1700000000</h5> -->
                                    <button type="button" class="btn_delete"><i class="fa-solid fa-trash-can"></i></button>
                                    <!-- confirm modal  -->
                                    <div class="confirm_modal">
                                        <div class="confirm_div">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h3>Delete Addess line</h3>
                                                <button class=" close_modal" type="button"><i class="fa-solid fa-x"></i></button>
                                            </div>
                                            <p>Are You Sure?</p>
                                            <div class="d-flex justify-content-end">
                                                <button type="button" class="close_modal">Close</button>
                                                <button type="button" class="btn_confirm">Confirm</button>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- modal end  -->
                                </div>
                                <p>Dhaka, Dhaka Bangladesh</p>
                                <p style="border: none;">+880 1700000000</p>
                            </div>

                            <div class="address_line">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h5>Address 2</h5>
                                    <button type="button" class="btn_delete"><i class="fa-solid fa-trash-can"></i></button>
                                    <!-- confirm modal  -->
                                    <div class="confirm_modal">
                                        <div class="confirm_div">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h3>Delete Addess line</h3>
                                                <button class=" close_modal" type="button"><i class="fa-solid fa-x"></i></button>
                                            </div>
                                            <p>Are You Sure?</p>
                                            <div class="d-flex justify-content-end">
                                                <button type="button" class="close_modal">Close</button>
                                                <button type="button" class="btn_confirm">Confirm</button>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- confirm modal  -->
                                </div>
                                <p>Dhaka, Dhaka Bangladesh</p>
                                <p style="border: none;">+880 1700000000</p>
                                <button type="button" class="add_address"> <i class="fa-solid fa-plus"></i>Add New address</button>
                                <!-- address modal here  -->
                                <div class="modal_address_here address_div">
                                    <div class="address_form_modal">
                                        <div class="d-flex justify-content-between">
                                            <p>Add New address</p>
                                            <button type="button" class="btn-close btn_address_close"></button>
                                        </div>
                                        <form action="">
                                            <div class="adds_type_radio">
                                                <div class="adds_box">
                                                    <label for="adds_type1">Home</label>
                                                    <input type="radio" id="adds_type1" name="adds_type" checked class="red">
                                                </div>
                                                <div class="adds_box">
                                                    <label for="adds_type">Office </label>
                                                    <input type="radio" id="adds_type" name="adds_type" class="">
                                                </div>
                                            </div>
                                            <div>
                                                <label for="City">City </label>
                                                <select class="form-control" name="" id="city">
                                                    <option value="" selected disabled>Select Your City</option>
                                                    <option value="">Dhaka</option>
                                                    <option value="">Tangail</option>
                                                    <option value="">Gazipur</option>
                                                    <option value="">Manikganj</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label for="area">Area</label>
                                                <input type="text" name="area" id="area" class="form-control">
                                            </div>
                                            <div>
                                                <label for="">Address </label>
                                                <input type="text" class="form-control">
                                            </div>
                                            <div>
                                                <label for="">Land Mark </label>
                                                <input type="text" class="form-control">
                                            </div>
                                            <div class="">
                                                <label for="">Phone </label> <br>
                                                <input type="text" id="" class="form-control mobile_code" placeholder="Phone Number" name="name">
                                            </div>
                                            <div>
                                                <button type="button" class="btn_cart mt-3" style="visibility: unset;">Save</button>
                                            </div>

                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="recent_orders">
                            <h4>Recent Orders </h4>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Order id</th>
                                        <th>Place On </th>
                                        <th>Address </th>
                                        <th>Item</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>74476095</td>
                                        <td>15 Aug 2023 </td>
                                        <td>School raod, wirless Mohakhali Dhaka</td>
                                        <td class="order_item">
                                            <Nuxt-link to="/product-details"><img src="/images/product(1).jpg" class="img-fluid" alt=""> </Nuxt-link>
                                            <Nuxt-link to="/product-details"><img src="/images/product(2).jpg" class="img-fluid" alt=""> </Nuxt-link>
                                            <Nuxt-link to="/product-details"><img src="/images/product(3).jpg" class="img-fluid" alt=""> </Nuxt-link>
                                        </td>
                                        <td>6,000 TK</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>74476095</td>
                                        <td>15 Aug 2023 </td>
                                        <td>School raod, wirless Mohakhali Dhaka</td>
                                        <td class="order_item">
                                            <Nuxt-link to="/product-details"><img src="/images/product(1).jpg" class="img-fluid" alt=""> </Nuxt-link>
                                            <Nuxt-link to="/product-details"><img src="/images/product(2).jpg" class="img-fluid" alt=""> </Nuxt-link>
                                            <Nuxt-link to="/product-details"><img src="/images/product(3).jpg" class="img-fluid" alt=""> </Nuxt-link>
                                        </td>
                                        <td>6,000 TK</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
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
        title: 'My Profile',
    },
    mounted() {

    }
}
</script>
